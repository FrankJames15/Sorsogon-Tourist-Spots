import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Box,
  Textarea,
  Spinner,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";

export default function EditTouristSpotForm({ spot }) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const [touristSpot, setTouristSpot] = useState({
    name: "",
    address: { barangay: "", municipality: "" },
    description: "",
    details: "",
  });

  useEffect(() => {
    if (spot) {
      setTouristSpot({
        name: spot.name || "",
        address: spot.address || { barangay: "", municipality: "" },
        description: spot.description || "",
        details: spot.details || "",
      });
    }
  }, [spot]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("address.")) {
      const fieldName = name.split(".")[1]; // Extract 'barangay' or 'municipality'
      setTouristSpot((prev) => ({
        ...prev,
        address: { ...prev.address, [fieldName]: value },
      }));
    } else {
      setTouristSpot((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !touristSpot.name ||
      !touristSpot.address.barangay ||
      !touristSpot.address.municipality
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    const updatedTouristSpot = {
      name: touristSpot.name,
      address: {
        barangay: touristSpot.address.barangay,
        municipality: touristSpot.address.municipality,
      },
      description: touristSpot.description,
      details: touristSpot.details,
    };

    try {
      setLoading(true);
      setError(null); // Clear any previous errors
      const response = await fetch(
        `http://localhost:5000/api/tourist-spots/${spot._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedTouristSpot),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update tourist spot");
      }

      
      toast({
        title: "Success",
        description: "Tourist spot updated successfully!",
        status: "success",
        isClosable: true,
        position: "top",
        variant: "subtle",
        duration: 2000,
      });
      setSuccessMessage("Tourist spot updated successfully!");
      setTouristSpot({
        name: "",
        address: { barangay: "", municipality: "" },
        description: "",
        details: "",
      }); // Clear form after success

      setTimeout(() => {
        window.location.reload(); // Refresh the page after success
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!spot) {
    return (
      <Box p={4} textAlign="center">
        <Alert status="error">
          <AlertIcon />
          Error: No tourist spot data available.
        </Alert>
      </Box>
    );
  }

  return (
    <Box p={4}>
      
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={touristSpot.name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="address.barangay" isRequired>
            <FormLabel>Barangay</FormLabel>
            <Input
              type="text"
              name="address.barangay"
              value={touristSpot.address.barangay}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="address.municipality" isRequired>
            <FormLabel>Municipality</FormLabel>
            <Input
              type="text"
              name="address.municipality"
              value={touristSpot.address.municipality}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={touristSpot.description}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="details">
            <FormLabel>Details</FormLabel>
            <Textarea
              name="details"
              value={touristSpot.details}
              onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="blue" isDisabled={loading}>
            {loading ? <Spinner size="sm" /> : "Update Tourist Spot"}
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

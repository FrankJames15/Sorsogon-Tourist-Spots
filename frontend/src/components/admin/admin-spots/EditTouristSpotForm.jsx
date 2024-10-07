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
} from "@chakra-ui/react";

export default function EditTouristSpotForm({ spot }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Ensure that touristSpot is initialized only after spot is available
  const [touristSpot, setTouristSpot] = useState({
    name: "",
    address: { barangay: "", municipality: "" },
    description: "",
    details: "",
  });

  useEffect(() => {
    if (spot) {
      // Initialize touristSpot state with spot prop once it's available
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
      const fieldName = name.split(".")[1]; // Get 'barangay' or 'municipality'
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
    const formData = new FormData(event.target);

    const updatedTouristSpot = {
      name: formData.get("name"),
      address: {
        barangay: formData.get("address.barangay"),
        municipality: formData.get("address.municipality"),
      },
      description: formData.get("description"),
      details: formData.get("details"),
    };

    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/tourist-spots/${spot._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTouristSpot),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update tourist spot");
      }

      alert("Tourist spot updated successfully!");
      window.location.reload();
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
      {loading && (
        <Box p={4} textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}

      {error && (
        <Box p={4}>
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        </Box>
      )}

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
              value={touristSpot.address?.barangay}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl id="address.municipality" isRequired>
            <FormLabel>Municipality</FormLabel>
            <Input
              type="text"
              name="address.municipality"
              value={touristSpot.address?.municipality}
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

          <Button type="submit" width={"200px"} colorScheme="blue">
            Update Tourist Spot
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

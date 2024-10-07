import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Textarea,
  Alert,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";

export default function TouristSpotForm() {
  const formRef = React.useRef();
  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation (if needed)
    const formData = new FormData(formRef.current);

    const newTouristSpot = {
      name: formData.get("name"),
      address: {
        barangay: formData.get("barangay"),
        municipality: formData.get("municipality"),
      },
      description: formData.get("description"),
      details: formData.get("details"),
    };

    try {
      setLoading(true); // Start loading state
      const response = await fetch("http://localhost:5000/api/tourist-spots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTouristSpot),
      });

      if (response.ok) {
        formRef.current.reset();
        setSuccessMessage("Tourist Spot added successfully!");
        setErrorMessage(""); // Clear any previous errors
        window.location.reload(); // Optionally refresh the page
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("Failed to submit the form. Please try again later.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <>
      {errorMessage && (
        <Alert status="error">
          <AlertIcon />
          {errorMessage}
        </Alert>
      )}
      {successMessage && (
        <Alert status="success">
          <AlertIcon />
          {successMessage}
        </Alert>
      )}
      <form ref={formRef} onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Enter the name of the tourist spot"
            />
          </FormControl>

          <FormControl id="barangay" isRequired>
            <FormLabel>Barangay</FormLabel>
            <Input
              type="text"
              name="barangay"
              placeholder="Enter the barangay"
            />
          </FormControl>

          <FormControl id="municipality" isRequired>
            <FormLabel>Municipality</FormLabel>
            <Input
              type="text"
              name="municipality"
              placeholder="Enter the municipality"
            />
          </FormControl>

          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              placeholder="Enter description (optional)"
            />
          </FormControl>

          <FormControl id="details">
            <FormLabel>Details</FormLabel>
            <Textarea
              name="details"
              placeholder="Enter additional details (optional)"
            />
          </FormControl>

          <Button
            type="submit"
            width={"200px"}
            colorScheme="blue"
            isDisabled={loading}
          >
            {loading ? <Spinner size="sm" /> : "Add Tourist Spot"}
          </Button>
        </VStack>
      </form>
    </>
  );
}

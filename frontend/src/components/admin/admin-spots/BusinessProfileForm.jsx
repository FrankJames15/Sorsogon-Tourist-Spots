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

export default function BusinessForm() {
  const formRef = React.useRef();
  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Client-side validation (if needed)
    const formData = new FormData(formRef.current);
    const phoneNumber = formData.get("phoneNumber");
    if (!/^\+?\d{10,15}$/.test(phoneNumber)) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }

    const newBusiness = {
      name: formData.get("name"),
      businessType: formData.get("businessType"),
      address: {
        barangay: formData.get("barangay"),
        municipality: formData.get("municipality"),
      },
      contact: {
        phoneNumber: formData.get("phoneNumber"),
        email: formData.get("email"),
      },
      website: formData.get("website"),
      description: formData.get("description"),
      details: formData.get("details"),
    };

    try {
      setLoading(true); // Start loading state
      const response = await fetch(
        "http://localhost:5000/api/business-profiles",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBusiness),
        }
      );

      if (response.ok) {
        formRef.current.reset();
        setSuccessMessage("Business added successfully!");
        setErrorMessage(""); // Clear any previous errors
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
              placeholder="Enter the name of the business"
            />
          </FormControl>
          <FormControl id="businessType" isRequired>
            <FormLabel>Business Type</FormLabel>
            <Input
              type="text"
              name="businessType"
              placeholder="Enter the type of business"
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
          <FormControl id="phoneNumber" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Enter the phone number"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Enter the email address"
            />
          </FormControl>
          <FormControl id="website">
            <FormLabel>Website</FormLabel>
            <Input
              type="text"
              name="website"
              placeholder="Enter the website URL (optional)"
            />
          </FormControl>
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              placeholder="Enter the description of the business"
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
            {loading ? <Spinner size="sm" /> : "Add Business"}
          </Button>
        </VStack>
      </form>
    </>
  );
}

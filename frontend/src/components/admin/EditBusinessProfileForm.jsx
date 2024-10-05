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

export default function EditBusinessProfileForm({id}) {
  const [businessProfile, setBusinessProfile] = useState({
    name: "",
    businessType: "",
    address: { barangay: "", municipality: "" },
    contact: { phoneNumber: "", email: "" },
    website: "",
    description: "",
    details: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinessProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/business-profiles/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch business profile");
        }
        const data = await response.json();
        setBusinessProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessProfile();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Handle nested objects for address and contact
    if (name.startsWith("address.")) {
      const fieldName = name.split(".")[1];
      setBusinessProfile((prev) => ({
        ...prev,
        address: { ...prev.address, [fieldName]: value },
      }));
    } else if (name.startsWith("contact.")) {
      const fieldName = name.split(".")[1];
      setBusinessProfile((prev) => ({
        ...prev,
        contact: { ...prev.contact, [fieldName]: value },
      }));
    } else {
      setBusinessProfile((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/business-profiles/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(businessProfile),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update business profile");
      }

      alert("Business profile updated successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) {
    return (
      <Box p={4} textAlign="center">
        <Spinner size="xl" />
      </Box>
    ); // Loading spinner
  }

  if (error) {
    return (
      <Box p={4}>
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    ); // Error alert
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
              value={businessProfile.name}
              onChange={handleChange}
              placeholder="Enter the name of the business"
            />
          </FormControl>
          <FormControl id="businessType" isRequired>
            <FormLabel>Business Type</FormLabel>
            <Input
              type="text"
              name="businessType"
              value={businessProfile.businessType}
              onChange={handleChange}
              placeholder="Enter the business type"
            />
          </FormControl>
          <FormControl id="address.barangay" isRequired>
            <FormLabel>Barangay</FormLabel>
            <Input
              type="text"
              name="address.barangay"
              value={businessProfile.address.barangay}
              onChange={handleChange}
              placeholder="Enter barangay"
            />
          </FormControl>
          <FormControl id="address.municipality" isRequired>
            <FormLabel>Municipality</FormLabel>
            <Input
              type="text"
              name="address.municipality"
              value={businessProfile.address.municipality}
              onChange={handleChange}
              placeholder="Enter municipality"
            />
          </FormControl>
          <FormControl id="contact.phoneNumber" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="text"
              name="contact.phoneNumber"
              value={businessProfile.contact.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </FormControl>
          <FormControl id="contact.email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="contact.email"
              value={businessProfile.contact.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </FormControl>
          <FormControl id="website">
            <FormLabel>Website</FormLabel>
            <Input
              type="text"
              name="website"
              value={businessProfile.website}
              onChange={handleChange}
              placeholder="Enter website URL"
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={businessProfile.description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </FormControl>
          <FormControl id="details">
            <FormLabel>Details</FormLabel>
            <Textarea
              name="details"
              value={businessProfile.details}
              onChange={handleChange}
              placeholder="Enter additional details"
            />
          </FormControl>
          <Button type="submit" width={"200px"} colorScheme="blue">
            Update
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

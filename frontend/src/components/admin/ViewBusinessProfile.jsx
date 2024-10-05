import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  VStack,
  Button,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

export default function ViewBusinessProfile({id}) {
  const [businessProfile, setBusinessProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for programmatic navigation

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
      <VStack spacing={4} align="start">
        <Text fontSize="2xl" fontWeight="bold">
          {businessProfile.name}
        </Text>
        <Text fontSize="lg">
          <strong>Business Type:</strong> {businessProfile.businessType}
        </Text>
        <Text fontSize="lg">
          <strong>Address:</strong> {businessProfile.address.barangay},{" "}
          {businessProfile.address.municipality}
        </Text>
        <Text fontSize="lg">
          <strong>Phone Number:</strong> {businessProfile.contact.phoneNumber}
        </Text>
        <Text fontSize="lg">
          <strong>Email:</strong> {businessProfile.contact.email}
        </Text>
        {businessProfile.website && (
          <Text fontSize="lg">
            <strong>Website:</strong>{" "}
            <a
              href={businessProfile.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {businessProfile.website}
            </a>
          </Text>
        )}
        <Text fontSize="lg">
          <strong>Description:</strong> {businessProfile.description}
        </Text>
        <Text fontSize="lg">
          <strong>Details:</strong> {businessProfile.details}
        </Text>
        <Button colorScheme="blue" onClick={() => navigate(-1)}>
          Back
        </Button>
      </VStack>
    </Box>
  );
}

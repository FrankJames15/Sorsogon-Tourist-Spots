import React from "react";

import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function BusinessProfileForm() {
  const formRef = React.useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);

    const newBusiness = {
      name: formData.get("name"),
      address: formData.get("address"),
      description: formData.get("description"),
      details: formData.get("details"),
    };

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
      // Refresh the page
      window.location.reload();
    }
  };
  return (
    <>
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
          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              name="address"
              placeholder="Enter the address of the business"
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
          <FormControl>
            <FormLabel>Details</FormLabel>
            <Input
              type="text"
              name="details"
              placeholder="Enter the details of the business"
            />
          </FormControl>
          <Flex direction={["column", "row"]} justifyContent="end" w="100%">
            <Button type="submit" leftIcon={<CheckIcon />} colorScheme="green">
              Save
            </Button>
          </Flex>
        </VStack>
      </form>
    </>
  );
}

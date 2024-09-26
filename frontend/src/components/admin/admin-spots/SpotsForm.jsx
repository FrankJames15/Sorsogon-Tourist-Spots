import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Box,
  Textarea,
} from "@chakra-ui/react";
import CustomModal from "../../CustomModal";

export default function SpotsForm() {
  const formRef = React.useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);

    const newSpot = {
      name: formData.get("name"),
      address: formData.get("address"),
      description: formData.get("description"),
      details: formData.get("details"),
    };

    const response = await fetch("http://localhost:5000/api/tourist-spots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSpot),
    });

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
                placeholder="Enter the name of the spot"
              />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                placeholder="Enter the address of the spot"
              />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                placeholder="Enter the description of the spot"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Details</FormLabel>
              <Textarea
                type="text"
                name="details"
                placeholder="Enter the details of the spot"
              />
            </FormControl>
            <Button type="submit" width={"200px"} colorScheme="blue">
              Add
            </Button>
          </VStack>
        </form>
    </>
  );
}

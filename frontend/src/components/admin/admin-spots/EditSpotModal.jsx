import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Tooltip,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

import { EditIcon } from "@chakra-ui/icons";
export default function EditSpotModal({ spot }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

    const response = await fetch(`http://localhost:5000/api/tourist-spots/${spot._id}`, {
      method: "PATCH",
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
      <Tooltip
        label="Click to edit"
        aria-label="Edit Spot"
        placement="top"
        openDelay={250}
      >
        <Button
          onClick={onOpen}
          size="sm"
          colorScheme="blue"
          leftIcon={<EditIcon />}
          variant={"ghost"}
        >
          Edit
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <form ref={formRef} onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter the name of the spot"
                  defaultValue={spot.name}
                />
              </FormControl>
              <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  name="address"
                  placeholder="Enter the address of the spot"
                  defaultValue={spot.address}
                />
              </FormControl>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  type="text"
                  name="description"
                  placeholder="Enter the description of the spot"
                  defaultValue={spot.description}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Details</FormLabel>
                <Textarea
                  type="text"
                  name="details"
                  placeholder="Enter the details of the spot"
                  defaultValue={spot.details}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
              <Button
                as="button"
                colorScheme="green"
                ml={3}
                type="submit"
                onClick={() => {
                  onClose();
                }}
              >
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

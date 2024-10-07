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
  Text,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

export default function SpotPreviewModal({ spot , button_props }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip
        label="Click to preview"
        aria-label="Preview Spot"
        placement="top"
        openDelay={250}
      >
        <Button
          onClick={onOpen}
          leftIcon={<ViewIcon />}
          variant={"outline"}
          colorScheme={"blue"}
          {...button_props}
        >
          Preview
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          // maxW="container.md"
          p={5}
        >
          <ModalHeader>{spot.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={3}>
              <Text>
                <strong>Address:</strong> <br />
                {`${spot?.address?.barangay}, ${spot?.address?.municipality}`}
              </Text>
              <Text>
                <strong>Description:</strong>
                <br /> {spot?.description}
              </Text>
              <Text>
                <strong>Details: </strong>
                <br />
                {spot?.details}
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

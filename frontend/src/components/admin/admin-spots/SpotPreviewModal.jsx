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
} from "@chakra-ui/react";

import { EditIcon } from "@chakra-ui/icons";
export default function SpotPreviewModal({ spot }) {
  const { name, address, description, details } = spot;

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip
        label="Click to preview"
        aria-label="Preview Spot"
        placement="top"
        openDelay={250}
      >
        <Button onClick={onOpen} size="sm" variant={"ghost"}>
          {name}
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Address:</strong> {address}
            </Text>
            <Text>
              <strong>Description:</strong> {description}
            </Text>
            <Text>
              <strong>Details:</strong> {details}
            </Text>

          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

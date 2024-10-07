import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ModalFooter,
} from "@chakra-ui/react";

function CustomModal({
  button_props,
  button_label,
  modal_props,
  header,
  children,
  modal_body,
  footer_props,
  primary_button_props,
  primary_button_label,
  primary_button_function,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="blue"
        variant="solid"
        size="sm"
        {...button_props}
      >
        {button_label}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}
      {...modal_props}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            {children}
            {modal_body}
          </ModalBody>

          <ModalFooter {...footer_props}>
            <Button variant={"ghost"} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              variant="solid"
              ms={2}
              {...primary_button_props}
              onClick={() => {
                primary_button_function();
                onClose();
              }}
            >
              {primary_button_label}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default CustomModal;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
export default function ModalFootless({ button_label,  children, button_props , modal_props}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}
      {...button_props}>{button_label}</Button>

      <Modal isOpen={isOpen} onClose={onClose}
        size="xl"
        scrollBehavior="inside"
        closeOnOverlayClick={true}
        {...modal_props}
      >
        <ModalOverlay />
        <ModalContent p={4}>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

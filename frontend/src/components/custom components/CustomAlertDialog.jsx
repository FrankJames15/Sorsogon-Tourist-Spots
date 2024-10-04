import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
export default function CustomAlertDialog({
  button_props,
  button_label = "button_label",
  dialog_header = "dialog_header",
  dialog_body = "dialog_body",
  primary_button,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  return (
    <>
      <Button onClick={onOpen} {...button_props}>
        {button_label}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {dialog_header}
            </AlertDialogHeader>

            <AlertDialogBody>
              {
                dialog_body 
              }
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              {primary_button ? (
                primary_button
              ) : (
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  Delete
                </Button>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

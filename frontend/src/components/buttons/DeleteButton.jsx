import React from "react";

import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function DeleteButton({ ...props }) {
  return (
    <>
      <Button colorScheme="red" leftIcon={<DeleteIcon />} {...props}>
        Delete
      </Button>
    </>
  );
}

export default DeleteButton;

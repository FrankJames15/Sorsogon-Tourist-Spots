import React from "react";

import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function AddButton({ ...props }) {
  return (
    <>
      <Button size="sm" colorScheme="green" LeftIcon={<DeleteIcon />} {...props}>
        Delete
      </Button>
    </>
  );
}

export default AddButton;

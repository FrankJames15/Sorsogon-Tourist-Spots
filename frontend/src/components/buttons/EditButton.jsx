import React from "react";

import { Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

function AddButton({ ...props }) {
  return (
    <>
      <Button size="sm" colorScheme="green" LeftIcon={<EditIcon />} {...props}>
        Edit
      </Button>
    </>
  );
}

export default AddButton;

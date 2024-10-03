import React from "react";

import { Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

function EditButton({  ...props }) {
  return (
    <>
      <Button
        colorScheme="blue"
        leftIcon={<EditIcon />}
        {...props}
      >
        Edit
      </Button>
    </>
  );
}

export default EditButton;

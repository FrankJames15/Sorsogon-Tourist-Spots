import React from "react";

import { Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

function EditButton({button_label = "Edit",  ...button_props }) {
  return (
    <>
      <Button
        colorScheme="blue"
        leftIcon={<EditIcon />}
        {...button_props}
      >
        {button_label}
      </Button>
    </>
  );
}

export default EditButton;

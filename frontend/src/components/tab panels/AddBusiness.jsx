import React from "react";
import ModalFootless from "../overlays/ModalFootless";
import { AddIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

function AddBusiness() {
  return (
    <>
      <Flex
        justify={"flex-end"}
        // border={"2px dashed gray"}
      >
        <ModalFootless
          button_label={"Promote my business"}
          button_props={{
            colorScheme: "green",
            // variant: "ghost",
            leftIcon: <AddIcon />,
          }}
        >
          children
        </ModalFootless>
      </Flex>
    </>
  );
}

export default AddBusiness;

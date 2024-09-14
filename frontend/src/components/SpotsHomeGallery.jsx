import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "./section templates/SectionHeading";

function SpotsHomeGallery() {
  const container = {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justify: "center",
    bg: "gray.50",
    color: "blue.500",
    // px: ["1rem", "2.5rem", "5rem"],
    textAlign: "center",
  };

  const content = {
    border: "2px dashed red",
    h: "85%",
    w: "85%",
    m: "auto",
  };
  return (
    <>
      <Box {...container}>
        <Box {...content}>
          <SectionHeading title="Welcome" sub_heading="subheading" />
        </Box>
      </Box>
    </>
  );
}

export default SpotsHomeGallery;

import React from "react";
import { Text } from "@chakra-ui/react";

function SectionSubheading({ children, ...rest }) {
  const sub_heading_style = {
    color: "gray.500",
    mb: "2rem",
    textAlign: "center",
    lineHeight: "1.5",
  };
  return (
    <>
      <Text {...sub_heading_style} {...rest}>
        {children}
      </Text>
    </>
  );
}

export default SectionSubheading;

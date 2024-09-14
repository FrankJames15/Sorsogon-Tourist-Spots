import { Text, Heading } from "@chakra-ui/react";
import React from "react";

function SectionHeading({ children, ...rest }) {
  const heading_style = {
    fontSize: ["3xl", "lg: 4xl", "xl: 5xl"],
    fontWeight: "bold",
    color: "blue.500",
    mb: 2,
    textAlign: "center",
  };

  return (
    <>
      <Text {...heading_style} {...rest}>{children}</Text>
    </>
  );
}

export default SectionHeading;

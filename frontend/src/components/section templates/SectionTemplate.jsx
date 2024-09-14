import React from "react";
import { Box } from "@chakra-ui/react";

function SectionTemplate({ children, ...rest }) {
   return (
    <>
      <Box
        // border: "2px dashed red",
        w="100%"
        bg="gray.50"
        {...rest}
      >
        <Box
          w="85%"
          mx="auto" // to center
          py="4rem"
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

export default SectionTemplate;

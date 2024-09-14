import {
  Box,
  Container,
  Divider,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Footer() {
  return (
    <>
      <Box
        as="footer"
        px={["1rem", "2rem", "4rem"]}
        py="4rem"
        bg={"blue.600"}
        color={"white"}
      >
        <Container maxW="container.xl">
          <VStack spacing={4}>
            <HStack width={"full"}>
              <Logo />
              <Spacer />
              <NavBar fontWeight='semibold' />
            </HStack>
            <Divider />
            <Text fontSize="sm">&copy; 2024 | All Rights Reserved </Text>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default Footer;

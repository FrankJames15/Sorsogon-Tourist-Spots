import {
  Box,
  Flex,
  Text,
  Spacer,
  Container,
  Menu,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";

// components
import Logo from "./Logo";
import MenuToggle from "./MenuToggle";
import NavBarContainer from "./NavBarContainer";
import { NavLink } from "react-router-dom";

function Header({ ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Box height={"50px"}></Box>
      <NavBarContainer
        height="50px"
        position="fixed"
        shadow="base"
        pt={{ base: isOpen ? "0.7rem" : "0", md: "0" }}
        px="5"
        bg="white"
        zIndex="1000"
        top="0"
        opacity="0.95"
        {...props}
      >
        <Logo as={NavLink} to="/" ms="5" color="blue.600" />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <Box
          bg={"white"}
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            spacing={2}
            align="center"
            justify={["center", "space-around", "flex-end"]}
            direction={["column", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <Button as={NavLink} to="/" variant="ghost" colorScheme="blue">
              Home
            </Button>
            <Button as={NavLink} to="/spots" variant="ghost" colorScheme="blue">
              Tourist Spots
            </Button>
            <Button as={NavLink} to="/business" variant="ghost" colorScheme="blue">
              Local Businesses
            </Button>
            <Button
              me="md:5"
              as={NavLink}
              variant="solid"
              size="sm"
              colorScheme="blue"
            >
              log as admin
            </Button>
          </Stack>
        </Box>
      </NavBarContainer>
    </>
  );
}

export default Header;

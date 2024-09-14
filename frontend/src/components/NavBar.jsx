import { HStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ ...props }) {
  return (
    <>
      <HStack {...props}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/spots">Tourist Spots</NavLink>
      </HStack>
    </>
  );
}

export default NavBar;

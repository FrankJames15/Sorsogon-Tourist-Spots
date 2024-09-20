import {
  Box,
  Button,
  Heading,
  Spacer,
  VStack,
  Icon,
  List,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <Box display="flex" w="100%" h="100vh" color="gray.500">
        <VStack
          bg="white"
          color="gray.500"
          h="100vh"
          minW="clamp(200px, 20%, 300px)"
          justify="start"
          shadow={"lg"}
          p={4}
        >
          <Heading size="md">Admin</Heading>
          <List spacing={2}>
            <ListItem border={"1px dashed red"}>
              <NavLink
                to="/admin"
                colorScheme="blue"
                variant="ghost"
                w="100%"
                size={"sm"}
              >
                Dasboard
              </NavLink>
            </ListItem>
            <ListItem border={"1px dashed red"}>
              <NavLink
                to="/admin/spots"
                colorScheme="blue"
                variant="ghost"
                w="100%"
                size={"sm"}
              >
                Tourist Spots
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/admin/business"
                colorScheme="blue"
                variant="ghost"
                w="100%"
                size={"sm"}
              >
                Business Profiles
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/admin/reviews"
                colorScheme="blue"
                variant="ghost"
                w="100%"
                size={"sm"}
              >
                Reviews
              </NavLink>
            </ListItem>
          </List>
          <Spacer />

          <Button
            colorScheme="blue"
            variant="ghost"
            w="100%"
            justifySelf={"flex-end"}
            leftIcon={<Icon as={HiOutlineLogout} />}
          >
            Logout
          </Button>
        </VStack>
        <Box
          bg="gray.50"
          color="gray.500"
          h="100vh"
          w="calc(100% - 200px)"
          justify="center"
          align="center"
          p={4}
        >
          <HStack>

          </HStack>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

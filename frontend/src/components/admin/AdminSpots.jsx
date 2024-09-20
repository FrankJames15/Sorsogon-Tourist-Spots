import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  HStack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
function AdminSpots() {
  const spots = useLoaderData();
  return (
    <>
      <TableContainer>
        <HStack>
          <Heading as="h2" size="md" textAlign="center" color="blue.500">
            List of Tourist Spots
          </Heading>
          <Spacer />
          <Button size={"sm"} colorScheme="blue" variant="solid">
            Add New
          </Button>
        </HStack>
        <Table variant="striped" colorScheme="blue" size={"sm"}>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {spots.map((spot) => {
              const { _id, name, description } = spot;
              return (
                <Tr key={_id}>
                  <Td>{_id}</Td>
                  <Td>{name}</Td>
                  <Td>{description}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Description</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminSpots;

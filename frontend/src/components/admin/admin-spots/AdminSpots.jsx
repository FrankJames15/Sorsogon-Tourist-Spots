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
  Text,
  Box,
} from "@chakra-ui/react";

import CustomModal from "../../CustomModal";
import { useLoaderData } from "react-router-dom";
import SpotsForm from "./SpotsForm";

function AdminSpots() {
  const spots = useLoaderData();
  async function deleteSpot(id) {
    const response = await fetch(
      `http://localhost:5000/api/tourist-spots/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      // Refresh the page
      window.location.reload();
    }
  }
  return (
    <>
      <Box maxW={"container.xl"}>
        <HStack>
          <Heading as="h2" size="md" textAlign="center" color="blue.500">
            List of Tourist Spots
          </Heading>
          <Spacer />
          <CustomModal
            button_props={{
              size: "sm",
              colorScheme: "blue",
            }}
            button_label="Add Spot"
            header="Add Spot"
            modal_props={{
              size: "2xl",
            }}
            modal_body={<SpotsForm />}
            footer_props={{
              display: "none",
            }}
          />
        </HStack>
        <TableContainer mt={2}>
          <Table
            variant="striped"
            size={"sm"}
            maxW="container.xl"
            borderWidth="1px"
            borderRadius="lg"
          >
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Address</Th>
                <Th>Description</Th>
                <Th>RATING</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {spots.map((spot) => {
                const { _id, name, address, description, reviews } = spot;

                // Calculate the average rating

                const rating =
                  reviews?.reduce((acc, review) => acc + review?.rating, 0) /
                  reviews?.length;

                return (
                  <Tr key={_id}>
                    <Td>{name}</Td>
                    <Td>{address}</Td>
                    <Td
                      maxWidth={"300px"}
                      overflow={"hidden"}
                      textOverflow={"ellipsis"}
                      whiteSpace={"wrap"}
                    >
                      {description}
                    </Td>
                    <Td>{rating}</Td>
                    <Td>
                      <CustomModal
                        button_props={{
                          size: "sm",
                          colorScheme: "red",
                        }}
                        button_label="Delete"
                        modal_props={{
                          size: "sm",
                        }}
                        header="Delete Spot"
                        modal_body={
                          <Text>
                            Are you sure you want to <strong> delete </strong>
                            this spot?
                          </Text>
                        }
                        primary_button_label="Delete"
                        primary_button_props={{ colorScheme: "red" }}
                        primary_button_function={() => deleteSpot(_id)}
                      ></CustomModal>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Name</Th>
                <Th>Address</Th>
                <Th>Description</Th>
                <Th>RATING</Th>
                <Th>Action</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default AdminSpots;

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
  InputRightElement,
  Icon,
  textDecoration,
  Tooltip,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { ViewIcon, EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";

import CustomModal from "../../CustomModal";
import { useLoaderData } from "react-router-dom";
import SpotsForm from "./SpotsForm";
import EditSpotModal from "./EditSpotModal";
import SpotPreviewModal from "./SpotPreviewModal";
import DeleteAlert from "../../overlays/DeleteAlert";
import MenuTemplate from "../../overlays/MenuTemplate";

function AdminSpots() {
  const spots = useLoaderData();
  return (
    <>
      <Box maxW={"container.xl"}>
        <Flex align={"center"} p={2}>
          <Heading as="h2" size="md" textAlign="center" color="blue.500">
            List of Tourist Spots
          </Heading>
          <Spacer />
          <CustomModal
            button_props={{
              // size: "sm",
              colorScheme: "green",
              leftIcon: <AddIcon />,
            }}
            button_label="Add"
            header="Add Spot"
            modal_props={{
              size: "2xl",
            }}
            modal_body={<SpotsForm />}
            footer_props={{
              display: "none",
            }}
          />
        </Flex>
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

                // Calculate the average rating and show rating if there are reviews
                let rating = 0;
                if (reviews?.length < 1) {
                  rating = "No reviews yet";
                } else {
                  rating =
                    reviews?.reduce((acc, review) => acc + review.rating, 0) /
                    reviews?.length;
                }

                return (
                  <Tr key={_id}>
                    <Td>
                      <SpotPreviewModal spot={spot} />
                    </Td>
                    <Td>{address?.barangay + ", " + address?.municipality}</Td>
                    <Td
                      minW={"300px"}
                      overflow={"hidden"}
                      textOverflow={"ellipsis"}
                      whiteSpace={"wrap"}
                    >
                      {description}
                    </Td>
                    <Td>{rating}</Td>
                    <Td>
                      <EditSpotModal spot={spot} />,
                      <DeleteAlert
                        name={name}
                        url={`http://localhost:5000/api/tourist-spots/${_id}`}
                      />
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

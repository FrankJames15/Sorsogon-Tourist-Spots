import React from "react";
import CustomTable from "../custom components/CustomTable";
import {
  Tr,
  Td,
  Button,
  HStack,
  Heading,
  Spacer,
  Container,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import ReviewRating from "../ReviewRating";
import CustomAlertDialog from "../custom components/CustomAlertDialog";
import DeleteAction from "../actions/DeleteAction";
import { DeleteIcon, AddIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import ModalFootless from "../overlays/ModalFootless";
import BusinessProfileForm from "./admin-spots/BusinessProfileForm";
import EditBusinessProfileForm from "./EditBusinessProfileForm";
import ViewBusinessProfile from "./ViewBusinessProfile";

export default function AdminBusiness() {
  const business_profiles = useLoaderData();

  return (
    <>
      <Container
        maxW={"container.xl"}
        mt={5}
        p={5}
        borderWidth={1}
        borderRadius={"lg"}
      >
        <HStack align={"center"} p={2}>
          <Heading as="h2" size="md" textAlign="center" color="blue.500">
            List of Business Profiles
          </Heading>
          <Spacer />
          <ModalFootless
            button_label="Create New"
            button_props={{
              colorScheme: "green",
              leftIcon: <AddIcon />,
            }}
            modal_props={{
              size: "2xl",
            }}
          >
            <BusinessProfileForm />
          </ModalFootless>
        </HStack>
        {/* Table */}
        <CustomTable
          table_head={[
            "name",
            "business type",
            "address",
            "description",
            "rating",
            "actions",
          ]}
        >
          {business_profiles?.map((business_profile) => {
            return (
              <Tr key={business_profile?._id}>
                <Td>{business_profile?.name}</Td>
                <Td>{business_profile?.businessType}</Td>
                <Td>
                  {business_profile?.address?.barangay +
                    ", " +
                    business_profile?.address?.municipality}
                </Td>
                <Td
                  width={"400px"}
                  minW={"300px"}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                  whiteSpace={"wrap"}
                >
                  {business_profile?.description}
                </Td>
                <Td>{<ReviewRating reviews={business_profile?.reviews} />}</Td>
                <Td>
                  <ModalFootless
                    button_label="View"
                    button_props={{
                      colorScheme: "blue",
                      size: "sm",
                      ms: 2,
                      leftIcon: <ViewIcon />,
                    }}
                  >
                    <ViewBusinessProfile id={business_profile?._id} 
                    />
                  </ModalFootless>
                  <ModalFootless
                    button_label="Edit"
                    button_props={{
                      colorScheme: "blue",
                      size: "sm",
                      ms: 2,
                      leftIcon: <EditIcon />,
                    }}
                  >
                    <EditBusinessProfileForm
                      id={business_profile?._id}
                    />
                  </ModalFootless>
                  <CustomAlertDialog
                    button_label="Delete"
                    button_props={{
                      leftIcon: <DeleteIcon />,
                      colorScheme: "red",
                      size: "sm",
                      ms: 2,
                    }}
                    dialog_header={`Delete ${business_profile?.name} ?`}
                    dialog_body="Are you sure? You can't undo this action afterwards."
                    primary_button={
                      <DeleteAction
                        url={`http://localhost:5000/api/business-profiles/${business_profile?._id}`}
                      />
                    }
                  />
                </Td>
              </Tr>
            );
          })}
        </CustomTable>
      </Container>
    </>
  );
}

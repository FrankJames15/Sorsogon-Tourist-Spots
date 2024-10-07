import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import BusinessProfileCard from "../components/BusinessProfileCard";
import { useLoaderData } from "react-router-dom";
import AddBusiness from "../components/tab panels/AddBusiness";
import CustomGrid from "../components/CustomGrid";
import ModalFootless from "../components/overlays/ModalFootless";
import { AddIcon } from "@chakra-ui/icons";
import BusinessForm from "../components/admin/admin-spots/BusinessProfileForm";

function BusinessProfiles() {
  const business_profiles = useLoaderData();
  console.log(business_profiles);
  // find business profiles
  return (
    <>
      <Box px={"5%"} py={"32px"} bg={"gray.50"}>
        <Container maxW={"container.xl"}>
          <Flex align={"end"}>
            <Heading textAlign={"center"} color={"blue.500"}>
              Business Profiles
            </Heading>
            <Spacer />
            <ModalFootless
              button_label={"Promote my business"}
              button_props={{
                colorScheme: "green",
                variant: "outline",
                leftIcon: <AddIcon />,
                _hover: { bg: "green.500", color: "white" },
              }}
            >
              <BusinessForm />
            </ModalFootless>
          </Flex>

          <CustomGrid mt={8}>
            {business_profiles.map((business, index) => (
              <BusinessProfileCard key={index} business={business} />
            ))}
          </CustomGrid>
        </Container>
      </Box>
    </>
  );
}

export default BusinessProfiles;

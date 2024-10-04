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

function BusinessProfiles() {
  const business_profiles = useLoaderData();

  // find business profiles
  return (
    <>
      <Box px={"5%"} py={"32px"} bg={"gray.50"} border={"3px dashed"}>
        <Container maxW={"container.xl"} border={"3px dashed red"}>
          <Flex align={"end"}>
            <Heading
              border={"3px dashed"}
              textAlign={"center"}
              color={"blue.500"}
            >
              Business Profiles
            </Heading>
            <Spacer />
            <AddBusiness />
          </Flex>
          <Grid
            templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
            gap={6}
            mt={8}
          >
            {business_profiles.map((business_profile, index) => (
              <BusinessProfileCard
                business_profile={business_profile}
                key={index}
              />
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default BusinessProfiles;

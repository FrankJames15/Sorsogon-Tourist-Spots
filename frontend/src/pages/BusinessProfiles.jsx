import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import BusinessProfileCard from "../components/BusinessProfileCard";

function BusinessProfiles() {
  return (
    <>
      <Box px={"5%"} py={"32px"} bg={"gray.50"} border={"3px dashed"}>
        <Container maxW={"container.xl"} border={"3px dashed red"}>
          <Heading
            border={"3px dashed"}
            textAlign={"center"}
            color={"blue.500"}
          >
            Business Profiles
          </Heading>
          <Grid templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"} gap={6} mt={8}>
            <BusinessProfileCard />
            <BusinessProfileCard />
            <BusinessProfileCard />
            <BusinessProfileCard />
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default BusinessProfiles;

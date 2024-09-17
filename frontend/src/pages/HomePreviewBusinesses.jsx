import React from "react";

import { Box, Button, VStack, Heading, Grid, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

import BusinessProfileCard from "../components/BusinessProfileCard";

function HomePreviewBusinesses({ spots_data }) {
  return (
    <>
      <Box bg={"gray.50"} border={"2px dashed pink"}>
        <VStack spacing={"3rem"}>
          <VStack spacing={2}>
            <Heading
              as="h2"
              fontSize={["3xl", "4xl"]}
              fontWeight="bold"
              color={"blue.500"}
            >
              Local Businesses
            </Heading>
            <Text color={"gray.500"}>Support local businesses</Text>
          </VStack>

          <Grid
            templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
            gap={6}
          >
            {/* <BusinessProfileCard />
            <BusinessProfileCard />
            <BusinessProfileCard /> */}
          </Grid>
          <Button
            as={NavLink}
            to={"/business"}
            colorScheme="blue"
            variant="outline"
            rightIcon={<ChevronRightIcon />}
          >
            View all
          </Button>
        </VStack>
      </Box>
    </>
  );
}

export default HomePreviewBusinesses;

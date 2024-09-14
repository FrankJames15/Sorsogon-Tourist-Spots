import React from "react";

import SectionHeading from "./section templates/SectionHeading";
import SectionSubheading from "./section templates/SectionSubheading";
import {
  Box,
  Button,
  VStack,
  Container,
  Heading,
  Grid,
  Text,
  HStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import SpotCard from "./SpotCard";
import { NavLink } from "react-router-dom";

function PopularSpots({ spots_data }) {
  return (
    <>
      <Box p={"4rem"} bg={"gray.50"}>
        <Container maxW={"container.xl"} border={"2px dashed gray"}>
          <VStack spacing={"3rem"}>
            <VStack spacing={2}>
              <Heading
                as="h2"
                fontSize={["3xl", "4xl"]}
                fontWeight="bold"
                color={"blue.500"}
              >
                Discover Sorsogon's Hidden Gems
              </Heading>
              <Text color={"gray.500"}>
                Explore the beauty of Sorsogon's top tourist spots.
              </Text>
            </VStack>

            <Grid
              width="full"
              maxW={"1000px"}
              mx={"auto"}
              border={"2px dashed gray"}
            >
              <SpotCard data={spots_data} />
            </Grid>
            <Button
              as={NavLink}
              to={"/spots"}
              colorScheme="blue"
              variant="outline"
            >
              View all
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default PopularSpots;

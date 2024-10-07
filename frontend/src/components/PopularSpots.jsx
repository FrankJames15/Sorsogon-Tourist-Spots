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
import CustomGrid from "./CustomGrid";

function PopularSpots({ spots }) {
  // get the first 3 spots
  spots = spots.slice(0, 3);

  return (
    <>
      <Box py={"5rem"} bg={"gray.50"}>
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

            <CustomGrid>
              {spots.map((spot, index) => (
                <SpotCard spot={spot} key={index} />
              ))}
            </CustomGrid>
            <Button
              as={NavLink}
              to={"/spots"}
              colorScheme="blue"
              variant="outline"
              _hover={{ bg: "blue.500", color: "white" }}
              rightIcon={<ChevronRightIcon />}
            >
              View all
            </Button>
          </VStack>
      </Box>
    </>
  );
}

export default PopularSpots;

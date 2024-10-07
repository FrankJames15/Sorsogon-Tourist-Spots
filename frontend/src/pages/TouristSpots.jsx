import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";
import CustomGrid from "../components/CustomGrid";
function TouristSpots() {
  const spots = useLoaderData();
  return (
    <>
      <Box px={"5rem"} py={"4rem"} bg={"gray.50"}>
        <Heading
          as="h1"
          fontSize={["3xl", "4xl"]}
          fontWeight="bold"
          color={"blue.500"}
          textAlign={"center"}
          mb={"4rem"}
        >
          Tourist Spots
        </Heading>
        <CustomGrid>
          {spots.map((spot, index) => (
            <SpotCard spot={spot} key={index} />
          ))}
        </CustomGrid>
      </Box>
    </>
  );
}

export default TouristSpots;

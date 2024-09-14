import React from "react";
import SectionTemplate from "../components/section templates/SectionTemplate";
import SectionHeading from "../components/section templates/SectionHeading";

import {Box } from "@chakra-ui/react";
import {useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";
function TouristSpots() {
  const spots_data = useLoaderData();
  return (
    <>
      <SectionTemplate bg="gray.50">
        <SectionHeading>Tourist Spots</SectionHeading>
        <Box mt={"2rem"}>
          <SpotCard data={spots_data} />
        </Box>
      </SectionTemplate>
    </>
  );
}

export default TouristSpots;

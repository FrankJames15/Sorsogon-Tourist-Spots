import { Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import AddBusiness from "./AddBusiness";
import CustomGrid from "../CustomGrid";
import BusinessProfileCard from "../BusinessProfileCard";

export default function BusinessAround({ address }) {
  const [businesses, setBusinesses] = React.useState([]);

  React.useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/business-profiles`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setBusinesses(data); // Set state with the fetched data
      } catch (error) {
        console.error("Error fetching businesses:", error);
      }
    };

    fetchBusinesses(); // Call the fetch function
  }, [address]);
  console.log(businesses);
  return (
    <>
      <Flex align={"center"}>
        <Heading size={"md"}>Businesses nearby</Heading>
        <Spacer />
        <AddBusiness />
      </Flex>
      <br />
      <CustomGrid>
        {businesses
          .filter((business) => business.address.barangay === address.barangay)
          .map((business, index) => (
            <BusinessProfileCard key={index} business_profile={business} />
          ))}
      </CustomGrid>
    </>
  );
}

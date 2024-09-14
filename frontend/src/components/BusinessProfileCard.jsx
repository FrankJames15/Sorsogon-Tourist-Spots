import {
  Avatar,
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ReviewRating from "./ReviewRating";

function BusinessProfileCard() {
  return (
    <>
      <VStack
        borderRadius="lg"
        spacing={7}
        py={5}
        px={"7%"}
        overflow="hidden"
        bg="white"
        shadow={"md"}
        align={"stretch"}
      >
        <HStack spacing={5}>
          <Avatar
            size={"lg"}
            name={business_profile.businessName}
            bg="blue.500"
          ></Avatar>
          <VStack align={"start"} spacing={"1px"}>
            <Text fontSize={"1.5rem"} fontWeight={"500"} color={"blue.500"}>
              {business_profile.businessName}
            </Text>
            <Text color={"gray.500"}>{business_profile.businessType}</Text>
            <ReviewRating
              avgRating={business_profile.rating}
              reviewCount={business_profile.reviewsCount}
            />
          </VStack>
        </HStack>
        <VStack align={"start"}>
          <Text color={"gray.400"}>{business_profile.description}</Text>
          <Button
            colorScheme="blue"
            variant={"ghost"}
            w={"100%"}
            alignSelf={"center"}
          >
            View Business
          </Button>
        </VStack>
      </VStack>
    </>
  );
}

export default BusinessProfileCard;

export const business_profile = {
  businessName: "Business Name",
  businessType: "Type of business",
  description:
    "Description of business lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
  rating: 4,
  reviewsCount: 100,
};

import { Avatar, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import ReviewRating from "./ReviewRating";
import { NavLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

function BusinessProfileCard({ business_profile }) {
  const { _id, name, businessType, reviews, description } = business_profile;

  //   reviews?.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
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
        _hover={{ shadow: "xl" }}
      >
        <HStack spacing={5}>
          <Avatar size={"lg"} name={name} bg="blue.500"></Avatar>
          <VStack align={"start"} spacing={"1px"}>
            <Text fontSize={"1.5rem"} fontWeight={"500"} color={"blue.500"}>
              {name}
            </Text>
            <Text color={"gray.500"}>{businessType}</Text>

            <ReviewRating reviews={reviews} />

          </VStack>
        </HStack>
        <VStack align={"start"}>
          <Text color={"gray.400"}>{description}</Text>
          <Button
            colorScheme="blue"
            as={NavLink}
            to={`/business/${_id}`}
            variant={"ghost"}
            w={"100%"}
            alignSelf={"center"}
            rightIcon={<ChevronRightIcon />}
          >
            View Business
          </Button>
        </VStack>
      </VStack>
    </>
  );
}

export default BusinessProfileCard;

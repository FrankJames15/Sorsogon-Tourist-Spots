import React from "react";

import { Box, HStack, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function ReviewRating({ reviews }) {
  return (
    <>
      <HStack>
        {!reviews ? (
          <Text color={"gray.400"}>No reviews yet</Text>
        ) : (
          <Box
            display={"flex"}
            justify={"space-between"}
            align={"center"}
            fontSize="sm"
            color={"gray.400"}
          >
            <Box display={"flex"} bg={"yellow.100"} px={1}>
              <StarIcon
                alignSelf={"center"}
                mr={"5px"}
                color="orange"
                boxSize={"1rem"}
              />
              <Text fontWeight={"semibold"} color={"gray.600"}>
                {reviews.reduce((acc, review) => acc + review.rating, 0) /
                  reviews.length}{" "}
                / 5
              </Text>
            </Box>
          </Box>
        )}
      </HStack>
    </>
  );
}

export default ReviewRating;

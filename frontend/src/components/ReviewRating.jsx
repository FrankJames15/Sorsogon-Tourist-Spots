import React from "react";

import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function ReviewRating({ avgRating, reviewCount, ...rest }) {
  return (
    <>
      <HStack sx={{ ...rest }}>
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
              {avgRating} / 5
            </Text>
          </Box>
        </Box>
        <Text color={"gray.500"}>
          {"|  "}
          {reviewCount} reviews
        </Text>
      </HStack>
    </>
  );
}

export default ReviewRating;

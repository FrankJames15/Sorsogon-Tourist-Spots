import React from 'react'

import { StarIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";

function RatingStars({ rating, size }) {
  return (
    <>
      <HStack>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon boxSize={size} key={i} color={i < rating ? "orange" : "gray"} />
          ))}
      </HStack>
    </>
  );
}

export default RatingStars
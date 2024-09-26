import { Card, Stack, Button, Text, Box, Image, Grid } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { Link as ReactRouterLink } from "react-router-dom";
import React from "react";
import ReviewRating from "./ReviewRating";

function SpotCard({ data, ...props }) {
  const card_root = {
    maxW: "sm",
    borderRadius: "lg",
    overflow: "hidden",
    boxShadow: "md",
    _hover: {
      shadow: "xl",
      transition: "all .7/s ease-out",
    },
    ...props,
  };
  return (
    <>
      <Grid
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap={6}
        alignItems={"center"}
      >
        {data.map((spot, index) => (
          <Card {...card_root} key={index}>
            <Image
              objectFit={"cover"}
              src={spot.images}
              alt={spot.name}
              aspectRatio={16 / 9}
            />
            <Box p="6">
              <Stack spacing={4}>
                <Text fontSize="xl" fontWeight="bold" color={"blue.600"}>
                  {spot.name}
                </Text>

                <Text fontSize="md" color={"gray.600"}>
                  {spot.description}
                </Text>

                <ReviewRating
                  avgRating={
                    spot?.reviews?.reduce(
                      (acc, review) => acc + review?.rating,
                      0
                    ) / spot?.reviews?.length
                  }
                  reviewCount={spot?.reviews?.length}
                />

                <Button
                  as={ReactRouterLink}
                  to={`/spots/${spot._id}`}
                  colorScheme={"blue"}
                  variant={"ghost"}
                  rightIcon={<ChevronRightIcon />}
                >
                  More Details
                </Button>
              </Stack>
            </Box>
          </Card>
        ))}
      </Grid>
    </>
  );
}

export default SpotCard;

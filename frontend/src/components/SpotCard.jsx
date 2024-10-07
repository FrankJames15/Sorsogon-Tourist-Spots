import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Image,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ReviewRating from "./ReviewRating";

export default function SpotCard({ spot }) {
  return (
    <>
      <Card
        overflow={"hidden"}
        boxShadow={"md"}
        borderRadius={"xl"}
        _hover={{ shadow: "xl", transition: "all .7/s ease-out" }}
        overFlow={"hidden"}
      >
        <Image
          objectFit={"cover"}
          src={`http://localhost:5000/${spot?.images?.[0]?.path}`}
          alt={spot?.name}
          aspectRatio={16 / 9}
        />
        <CardHeader>
          <Text fontSize="xl" fontWeight="bold" color={"blue.500"}>
            {spot?.name}
          </Text>
        </CardHeader>
        <CardBody>
          <Text color={"gray.500"}>{spot?.description}</Text>
        </CardBody>
        <CardFooter>
          <Button
            as={NavLink}
            to={`/spots/${spot?._id}`}
            width={"100%"}
            variant={"ghost"}
            colorScheme={"blue"}
            rightIcon={<ChevronRightIcon />}
          >
            More Details
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

//                 <ReviewRating
//                   avgRating={
//                     spot?.reviews?.reduce(
//                       (acc, review) => acc + review?.rating,
//                       0
//                     ) / spot?.reviews?.length
//                   }
//                   reviewCount={spot?.reviews?.length}
//                 />

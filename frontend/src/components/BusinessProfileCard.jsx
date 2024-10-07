import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Image,
  Avatar,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ReviewRating from "./ReviewRating";

export default function BusinessProfileCard({ business }) {
  if (!business) {
    return null;
  }
  return (
    <>
      <Card
        overflow={"hidden"}
        p={2}
        boxShadow={"md"}
        borderRadius={"lg"}
        _hover={{ shadow: "xl", transition: "all .7/s ease-out" }}
        overFlow={"hidden"}
      >
        <CardHeader>
          <HStack spacing={5}>
            <Avatar size={"lg"} name={business?.name} bg="blue.500"></Avatar>{" "}
            <VStack align={"start"} spacing={"1px"}>
              {" "}
              <Text fontSize={"1.5rem"} fontWeight={"500"} color={"blue.500"}>
                {business.name}{" "}
              </Text>
              <Text color={"gray.500"}>{business?.businessType}</Text>
              <ReviewRating reviews={business?.reviews} />{" "}
            </VStack>{" "}
          </HStack>
          {/* <Text fontSize="xl" fontWeight="bold" color={"blue.500"}>
            {spot?.name}
          </Text> */}
        </CardHeader>
        <CardBody>
          <Text color={"gray.500"}>{business?.description}</Text>
        </CardBody>
        <CardFooter>
          <Button
            as={NavLink}
            to={`/business/${business?._id}`}
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

// import { Avatar, Button, HStack, Text, VStack, Box } from "@chakra-ui/react";
// import React from "react";
// import ReviewRating from "./ReviewRating";
// import { NavLink } from "react-router-dom";
// import { ChevronRightIcon } from "@chakra-ui/icons";

// function BusinessProfileCard({ business_profile }) {
//   const { _id, name, businessType, reviews, description } = business_profile;

//   //   reviews?.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
//   return (
//     <>
//       <Box maxW={"400px"} minW={"300px"}>
//         <VStack
//           borderRadius="lg"
//           spacing={7}
//           p={5}
//           overflow="hidden"
//           bg="white"
//           shadow={"md"}
//           align={"stretch"}
//           _hover={{ shadow: "xl" }}
//         >
//           <HStack spacing={5}>
//             <Avatar size={"lg"} name={name} bg="blue.500"></Avatar>
//             <VStack align={"start"} spacing={"1px"}>
//               <Text fontSize={"1.5rem"} fontWeight={"500"} color={"blue.500"}>
//                 {name}
//               </Text>
//               <Text color={"gray.500"}>{businessType}</Text>

//               <ReviewRating reviews={reviews} />
//             </VStack>
//           </HStack>
//           <VStack align={"start"}>
//             <Text color={"gray.400"}>{description}</Text>
//             <Button
//               colorScheme="blue"
//               as={NavLink}
//               to={`/business/${_id}`}
//               variant={"ghost"}
//               w={"100%"}
//               alignSelf={"center"}
//               rightIcon={<ChevronRightIcon />}
//             >
//               View Business
//             </Button>
//           </VStack>
//         </VStack>
//       </Box>
//     </>
//   );
// }

// export default BusinessProfileCard;

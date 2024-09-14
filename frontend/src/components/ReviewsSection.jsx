// import React from "react";
// import {
//   Box,
//   Flex,
//   Text,
//   Heading,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
//   Button,
// } from "@chakra-ui/react";

// const comments = [
//   {
//     user: "John Doe",
//     date: "2021-07-15",
//     comment: "Great article! Very informative.",
//   },
//   {
//     user: "Jane Smith",
//     date: "2021-07-15",
//     comment: "I learned a lot from this. Thanks for sharing!",
//   },
//   {
//     user: "Bob Johnson",
//     date: "2021-07-15",
//     comment: "Interesting perspective. I'd love to see more on this topic.",
//   },
// ];

// function ReviewsSection() {
//   return (
//     <>
//       <Flex gap={"20px"} wrap={"wrap"} width={"100%"}>
//         <Box minW={"300px"} width={"lg"}>
//           <Text fontSize={"xl"} fontWeight={"600"}>
//             {comments.length} Reviews
//           </Text>
//           {comments.map((comment) => (
//             <Box key={comment.index} mt="10px" p={"10px"}>
//               <Text fontWeight={"500"} color={"gray.600"}>
//                 {comment.user}
//               </Text>
//               <Text fontSize={"70%"} color={"gray.400"}>
//                 {comment.date}
//               </Text>
//               <Text mt={"7px"}>{comment.comment}</Text>
//             </Box>
//           ))}
//         </Box>
//         <Box
//           padding={"2rem"}
//           borderRadius={"5px"}
//           boxShadow={"md"}
//           border={"1px solid "}
//           borderColor={"gray.200"}
//         >
//           <Heading as="h3" size="md" textAlign={"center"}>
//             Leave a comment
//           </Heading>
//           <FormControl>
//             <FormLabel mt={"1rem"}>Name</FormLabel>
//             <Input required="true" size={"sm"} type="text" />
//             <FormLabel mt={"1rem"}>Comment</FormLabel>
//             <Textarea
//               placeholder="Write a comment..."
//               _placeholder={{ color: "gray.300" }}
//             />
//             <Button colorScheme="blue" mt="4">
//               Submit
//             </Button>
//           </FormControl>
//         </Box>
//       </Flex>
//     </>
//   );
// }

// export default ReviewsSection;

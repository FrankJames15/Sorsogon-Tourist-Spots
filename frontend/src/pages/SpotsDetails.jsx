import React from "react";

import { useLoaderData } from "react-router-dom";
import {
  Text,
  Box,
  Heading,
  ListItem,
  UnorderedList,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  OrderedList,
  Flex,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Select,
  Divider,
  VStack,
  HStack,
  Container,
  Grid,
  Center,
} from "@chakra-ui/react";

import RatingStars from "../components/RatingStars";
import DetailsTabPanel from "../components/tab panels/DetailsTabPanel";
import BusinessAround from "../components/tab panels/BusinessAround";

function SpotsDetails() {
  const spot = useLoaderData();

  const { name, description, details, reviews, address } = spot;
  const { user, rating, comment, date } = reviews;

  return (
    <>
      <Box p={["1rem", "2rem"]} bg={"gray.50"}>
        <Container maxW={"container.xl"}>
          <Grid align={"center"} mb={4}>
            <Heading color={"blue.600"}>{name}</Heading>
            <Text color={"gray.400"}>{description}</Text>
          </Grid>
          <Tabs color={"gray.500"} position="relative">
            <TabList
              position={"sticky"}
              zIndex={"100"}
              top={"50px"}
              bg={"gray.50"}
              opacity={"0.95"}
            >
              <Tab>Details</Tab>
              <Tab>Products/Services around here</Tab>
              <Tab>Reviews</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box maxW="800px">
                  <DetailsTabPanel data={spot} />
                </Box>
              </TabPanel>
              <TabPanel>
                {/* PRODUCTS/SERVICES section  */}
                <BusinessAround address={address} />
              </TabPanel>
              <TabPanel>
                {/* REVIEWS section  */}
                <Box margin={"auto"} maxW={"600px"} padding={4}>
                  <VStack spacing={4} align="stretch">
                    <Text
                      fontSize={"2xl"}
                      fontWeight={"bold"}
                      color={"blue.600"}
                    >
                      {reviews.length} Reviews
                    </Text>
                    {reviews.map((reveiw) => (
                      <VStack
                        key={reveiw.index}
                        p={4}
                        borderWidth={1}
                        borderRadius="md"
                        borderColor="blue.200"
                        align={"start"}
                      >
                        <HStack spacing={3}>
                          <Text fontWeight={"bold"} color={"blue.600"}>
                            {reveiw.user}
                          </Text>
                          <Text fontSize={"70%"} color={"gray.500"}>
                            {reveiw.date}
                          </Text>
                        </HStack>
                        <RatingStars rating={reveiw.rating} size={"10px"} />
                        <Text color={"gray.600"}>{reveiw.comment}</Text>
                      </VStack>
                    ))}
                    <Box
                      padding={4}
                      borderRadius={"md"}
                      border={"1px solid"}
                      borderColor={"blue.200"}
                    >
                      <FormControl>
                        <VStack>
                          <HStack width={"full"}>
                            <Input
                              required="true"
                              type="text"
                              placeholder="Write your name here..."
                            />
                            <Select width={"220px"} placeholder="Rate">
                              <option value={5}>5 ⭐⭐⭐⭐⭐ </option>
                              <option value={4}>4 ⭐⭐⭐⭐ </option>
                              <option value={3}>3 ⭐⭐⭐ </option>
                              <option value={2}>3 ⭐⭐ </option>
                              <option value={1}>1 ⭐ </option>
                            </Select>
                          </HStack>
                          <Textarea placeholder="Write a comment..." />
                          <Button colorScheme="blue" alignSelf={"flex-end"}>
                            Post Comment
                          </Button>
                        </VStack>
                      </FormControl>
                    </Box>
                  </VStack>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </>
  );
}

export default SpotsDetails;

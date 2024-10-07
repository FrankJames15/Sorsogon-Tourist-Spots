import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";

import { FaMap, FaCommentDots, FaBriefcase } from "react-icons/fa6";
export const HomeFeaturesSection = (props) => {
  const { tagline, heading, description, sections } = {
    ...props,
    ...PropsDefault,
  };

  return (
    <Box as="section" px={{ base: "5%" }}>
      {/* Tagline, Heading, Description */}
      <VStack spacing={6} mb={{ base: 12, md: 18, lg: 20 }} textAlign="center">
        <Text fontSize="sm" fontWeight="semibold" color="gray.400">
          {tagline}
        </Text>
        <Heading
          as="h3"
          fontSize={["3xl", "4xl"]}
          fontWeight="bold"
          color="blue.600"
        >
          {heading}
        </Heading>
        <Text color="gray.500" mb="2rem">
          {description}
        </Text>
      </VStack>

      {/* Sections */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 12, md: 8, lg: 12 }}
      >
        {sections.map((section, index) => (
          <VStack key={index} spacing={6} textAlign="center">
            <Icon
              color="blue.500"
              as={section.icon.src}
              boxSize="48px"
              mb={2}
            />
            <HStack>{section.icon.src}</HStack>
            <Heading
              as="h3"
              fontSize={"xl"}
              fontWeight="bold"
              color={"blue.600"}
            >
              {section.heading}
            </Heading>
            <Text color="gray.500">{section.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export const PropsDefault = {
  tagline: "Features",
  heading: "Explore Sorsogon's Hidden Gems",
  description:
    "Welcome to Sorsogon Tourist Spots, your ultimate guide to exploring the breathtaking attractions of Sorsogon. Use our interactive map tonavigate through the city's popular tourist spots, read reviews.",
  sections: [
    {
      icon: {
        src: FaBriefcase,
        alt: "Relume logo 1",
      },
      heading: "Promote Your Business",
      description:
        "Showcase your products and services to a wider audience. Increase your visibility and attract more customers. Boost your business with Sorsogon Tourist Spots.",
    },
    {
      icon: {
        src: FaCommentDots,
        alt: "Relume logo 2",
      },
      heading: "Read Reviews",
      description:
        "Get insights from fellow travelers and locals. Read reviews and comments to help you plan your itinerary and make the most out of your Sorsogon experience.",
    },
    {
      icon: {
        src: FaMap,
        alt: "Relume logo 3",
      },
      heading: "Explore trough Map",
      description:
        "Easily find your way around Sorsogon with our interactive map. Discover the best attractions, restaurants, and accommodations at your fingertips.",
    },
  ],
};

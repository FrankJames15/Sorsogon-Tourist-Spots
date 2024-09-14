import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function HeroSection() {
  return (
    <Box
      height="95vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Background Image with filter applied */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage="url(https://www.judethetourist.com/wp-content/uploads/2023/03/Donsol-Whale-Shark-Interaction-Sorsogon-Tourist-Spots.jpeg)"
        backgroundSize="cover"
        backgroundPosition="center"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay with dark filter
        }}
      />

      {/* Content (Text) */}
      <VStack
        zIndex={1} // Ensures content stays above the background
        maxW="md"
        spacing={4}
        textAlign="center"
        pos={"relative"}
        top={"-15%"}
        filter="drop-shadow(0 0 5px rgba(0, 0, 0, 0.5))"
      >
        <Heading color="white" size="2xl">
          Discover the beauty of Sorsogon
        </Heading>
        <Text color="white">
          Welcome to Sorsogon, home to breathtaking tourist spots
        </Text>
      </VStack>
    </Box>
  );
}

export default HeroSection;

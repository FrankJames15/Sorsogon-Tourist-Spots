import { Box, VStack, HStack, Text, Avatar, Icon } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, LinkIcon, StarIcon } from "@chakra-ui/icons";

export default function BusinessCard() {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      p={6}
    >
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <Avatar size="xl" name="Logo" bg="blue.500" />
          <VStack align="start" spacing={1}>
            <Text fontWeight="bold" fontSize="2xl">
              Buiness Name
            </Text>
            <Text fontSize="md" color="gray.400">
              Type of business
            </Text>
            <HStack>
              <StarIcon color="yellow.400" />
              <StarIcon color="yellow.400" />
              <StarIcon color="yellow.400" />
              <StarIcon color="yellow.400" />
              <StarIcon color="gray.300" />
            </HStack>
          </VStack>
        </HStack>

        <VStack align="start" spacing={2}>
          <HStack>
            <Icon as={PhoneIcon} color="blue" />
            <Text fontSize="sm">phone contact number</Text>
          </HStack>
          <HStack>
            <Icon as={EmailIcon} color="purple.500" />
            <Text fontSize="sm">emailaddress@email.com</Text>
          </HStack>
          <HStack>
            <Icon as={LinkIcon} color="purple.500" />
            <Text fontSize="sm">external link</Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

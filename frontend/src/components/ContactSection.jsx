import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaComments,
} from "react-icons/fa6";
import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Container,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";

export function ContactSection({ props }) {
  const { heading, description, contacts } = {
    ...props,
    ...ContactDefaults,
  };

  return (
    <Box as="section" py={"4rem"} border={"2px dashed gray"}>
      <Container maxW="container.xl" centerContent border={"2px dashed gray"}>
        <VStack spacing={5}>
          <VStack spacing={2} textAlign="center">
            <Heading
              as="h3"
              fontSize={["3xl", "4xl"]}
              fontWeight="bold"
              color="blue.600"
            >
              {heading}
            </Heading>
            <Text color="gray.500">{description}</Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {contacts.map((contact, index) => (
              <VStack key={index} textAlign="center" border={"2px dashed gray"}>
                <Icon as={contact.icon} boxSize={12} color="blue.500" mb={4} />
                <Heading
                  as="h3"
                  fontSize={"xl"}
                  fontWeight="bold"
                  color={"blue.600"}
                >
                  {contact.title}
                </Heading>
                <Text mb={4} color="gray.500">
                  {contact.description}
                </Text>
                <Link
                  href={contact.link.url}
                  color="blue.500"
                  textDecoration="underline"
                >
                  {contact.link.label}
                </Link>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

const ContactDefaults = {
  heading: "Get in touch",
  description: "We love to hear from. Contact us today!",
  contacts: [
    {
      icon: FaEnvelope,
      title: "Email",
      description: "Feel free to send us an email anytime.",
      link: {
        label: "hello@example.com",
        url: "mailto:hello@example.com",
      },
    },

    {
      icon: FaPhone,
      title: "Phone",
      description: "Reach us by phone for any inquiries.",
      link: {
        label: "+1 (555) 000-0000",
        url: "tel:+15550000000",
      },
    },
    {
      icon: FaLocationDot,
      title: "Office",
      description: "Visit our office at the given location.",
      link: {
        label: "123 Sample St, Sydney NSW 2000 AU",
        url: "#",
      },
    },
  ],
};

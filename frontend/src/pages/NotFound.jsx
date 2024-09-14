import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SectionTemplate from "../components/section templates/SectionTemplate";

function NotFound() {
  return (
    <div>
      <SectionTemplate>
        <Heading>Oops!</Heading>
        <Text>Sorry, it seems like the page you were looking for doesn't exist.</Text>
        <Button variant = 'outline' colorScheme={"blue"} onClick={() => window.history.back()}>
          Go back
        </Button>
      </SectionTemplate>
    </div>
  );
}

export default NotFound;
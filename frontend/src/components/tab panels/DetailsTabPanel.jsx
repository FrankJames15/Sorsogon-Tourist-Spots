import { Text } from "@chakra-ui/react";
import React from "react";

export default function DetailsTabPanel({ data }) {
  return (
    <>
      <Text>
        <Text as="span" fontWeight="bold">
          {"Address: "}</Text>
        {`${data?.address?.barangay}, ${data?.address?.municipality}`}
      </Text>
      <Text>
        {data?.details}
      </Text>
    </>
  );
}

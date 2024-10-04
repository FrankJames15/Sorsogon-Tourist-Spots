import React from "react";
import { Grid } from "@chakra-ui/react";

export default function CustomGrid({ children }) {
  return (
    <>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))"
        gap={6}
        justifyContent={"center"}
        width={'full'}
        justifyItems={"center"}
      >
        {children}
      </Grid>
    </>
  );
}

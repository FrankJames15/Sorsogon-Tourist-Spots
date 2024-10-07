import React from "react";
import { Grid } from "@chakra-ui/react";

export default function CustomGrid({ children , ...props}) {
  return (
    <>
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={6}
        width={"100%"}
        mx={"auto"}
        {...props}
      >
        {children}
      </Grid>
    </>
  );
}

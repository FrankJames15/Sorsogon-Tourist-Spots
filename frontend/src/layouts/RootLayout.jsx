import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;

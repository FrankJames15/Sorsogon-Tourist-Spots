import { Container, Divider } from "@chakra-ui/react";

// sections
import HeroSection from "../components/HeroSection";
import PopularSpots from "../components/PopularSpots";
import { useLoaderData } from "react-router-dom";
import { HomeFeaturesSection } from "../components/HomeFeaturesSection";
import { ContactSection } from "../components/ContactSection";
import Sample from "../components/Sample";
import HomePreviewBusinesses from "./HomePreviewBusinesses";

function Home() {
  const spots = useLoaderData();
  return (
    <>
      <HeroSection />
      <Container
        maxW={"container.xl"}
        border={"2px dashed pink"}
        bg={"gray.50"}
        p={"5%"}
        mt={5}
      >
        <HomeFeaturesSection />
        <Divider />
        <PopularSpots spots_data={spots} />
        <Divider />
        <HomePreviewBusinesses />
        <Divider />
        <ContactSection />
      </Container>
    </>
  );
}

export default Home;

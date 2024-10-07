import { Container, Divider } from "@chakra-ui/react";

// sections
import HeroSection from "../components/HeroSection";
import PopularSpots from "../components/PopularSpots";
import { useLoaderData } from "react-router-dom";
import { HomeFeaturesSection } from "../components/HomeFeaturesSection";
import { ContactSection } from "../components/ContactSection";
import HomePreviewBusinesses from "./HomePreviewBusinesses";
import businessDetailsLoader from "../loaders/businessDetailsLoader";
import businessProfilesLoader from "../loaders/businessProfilesLoader";

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
        my={5}
      >
        <HomeFeaturesSection />
        <Divider />
        <PopularSpots spots={spots} />
        <Divider />
        <HomePreviewBusinesses
        />
        <Divider />
        <ContactSection />
      </Container>
    </>
  );
}

export default Home;

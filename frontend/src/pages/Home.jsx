import { Divider } from "@chakra-ui/react";

// sections
import HeroSection from "../components/HeroSection";
import PopularSpots from "../components/PopularSpots";
import { useLoaderData } from "react-router-dom";
import { HomeFeaturesSection } from "../components/HomeFeaturesSection";
import { ContactSection } from "../components/ContactSection";
import Sample from "../components/Sample";

function Home() {
  const spots = useLoaderData();
  return (
    <>
      
      <HeroSection />
      <Divider />
      <HomeFeaturesSection />
      <Divider />
      <PopularSpots spots_data={spots} />
      <Divider />
      <ContactSection />
      <Divider />
    </>
  );
}

export default Home;

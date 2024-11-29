import React from "react";
import Banner from "./Banner";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import TechStack from "./TechStack";
import Certificates from "./Certificates";
import Contact from "../Contact/Contact";
import Services from "./Services";
import Hero from "./Hero";
import HomeCertificatePreview from "./HomeCertificatePreview";
import HomeProjects from "./HomeProjects";

const Home = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <Education />
      <WorkExperience />
      <Services />
      <TechStack />
      <HomeProjects />
      <HomeCertificatePreview />
      <Contact />
    </div>
  );
};

export default Home;

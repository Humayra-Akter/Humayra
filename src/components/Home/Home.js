import React from "react";
import Banner from "./Banner";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import TechStack from "./TechStack";
import Certificates from "./Certificates";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Education /> */}
      <WorkExperience />
      <TechStack />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Home;

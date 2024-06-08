import React from "react";
import Banner from "./Banner";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import TechStack from "./TechStack";
import Certificates from "./Certificates";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Education /> */}
      <WorkExperience />
      <TechStack />
      <Certificates />
    </div>
  );
};

export default Home;

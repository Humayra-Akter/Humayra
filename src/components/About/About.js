import React from "react";
import me from "../../images/humayra.png";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <h2 className="text-2xl font-semibold text-primary mt-20 mb-8 dark:text-secondary">
        About Me
      </h2>
      <div className="flex mx-32 gap-8">
        <svg
          className="absolute pt-10 w-auto h-96 text-primary"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M44.3,-34.3C60.4,-15.2,78.4,3.4,75.1,17C71.9,30.6,47.4,39.1,26.6,45.3C5.8,51.6,-11.4,55.4,-29.7,50.8C-48.1,46.1,-67.6,33,-71.2,16.5C-74.8,-0.1,-62.5,-20,-48,-38.8C-33.4,-57.6,-16.7,-75.2,-1.3,-74.1C14.1,-73.1,28.3,-53.5,44.3,-34.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <img
          src={me}
          alt="Humayra"
          className="relative h-96 pl-10"
          style={{ zIndex: 10 }}
        />
        <Slide cascade damping={0.5}>
          <div className="text-primary text-wrap text-justify w-full lg:w-auto dark:text-secondary">
            <p className="mb-4">
              Hi, I'm Humayra Akter, a passionate and dedicated junior software
              developer with a strong interest in web development and software
              engineering. I hold a degree in Computer Science from Military
              Institute of Science and Technology, where I honed my skills in
              various programming languages and software development
              methodologies.
            </p>
            <p className="mb-4">
              Over the past few years, I have gained hands-on experience working
              on several projects, both academic and personal. My technical
              skills include proficiency in JavaScript, React, Node.js, and C,
              C++. I am also familiar with databases such as MySQL and MongoDB,
              and have experience with version control systems like Git.
            </p>
            <p className="mb-4">
              I am always eager to learn new technologies and take on
              challenging projects. My goal is to continuously grow as a
              developer and contribute to impactful projects that make a
              difference. In addition to my technical skills, I have strong
              problem-solving abilities, excellent communication skills, and a
              collaborative mindset that allows me to work effectively in team
              environments.
            </p>
            <p className="mb-4">
              Outside of coding, I enjoy time with my cat and also do crafting,
              which helps me stay balanced and inspired. Feel free to download
              my CV below to learn more about my background, skills, and
              experience. I look forward to connecting with you!
            </p>
          </div>
        </Slide>
      </div>
      <a
        href="/Humayra_Akter_CV.pdf"
        download
        className="bg-primary text-secondary py-2 px-4 rounded-md hover:bg-secondary hover:text-primary transition-colors mt-8 inline-block"
      >
        Download My CV
      </a>
    </div>
  );
};

export default About;

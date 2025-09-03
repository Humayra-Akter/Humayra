import React, { useEffect } from "react";
import humayra from "../../images/humayra.png";
import download from "../../images/file.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { ReactTyped as Typed } from "react-typed";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="lg:pt-5 mx-20 lg:grid grid-cols-3"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <div className="lg:text-left text-center pt-10 lg:mt-24">
        {/* <h1 className="text-4xl md:text-6xl xl:text-7xl leading-tight">
          <span className="bg-gradient-to-r from-primary via-purple-400 to-purple-100 bg-clip-text text-transparent">
            Humayra Akter
          </span>
        </h1> */}
        <motion.div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl xl:text-6xl leading-tight">
            <span className="glitch text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-purple-100 block">
              <Typed
                strings={["Humayra Akter"]}
                typeSpeed={100}
                backSpeed={20}
                backDelay={2000}
                loop
              />
            </span>
          </h1>
          <SocialMedia />

          <div className="mt-8 inline-flex">
            <a
              href="/Humayra_Akter_CV.pdf"
              download
              className="hover:bg-primary hover:text-secondary py-2.5 px-4 rounded-md bg-secondary text-primary border-2 flex gap-2 hover:border-secondary transition-colors"
            >
              <img src={download} className="w-5 h-5" alt="download" />
              Download My CV
            </a>
          </div>
        </motion.div>

        {/* <p className="text-md lg:text-xl text-gray-300 lg:mt-10 mt-6">
          <span className="text-accent dark:text-white">
            Full Stack Developer
          </span>{" "}
          |{" "}
          <span className="text-accent dark:text-white">UI/UX Enthusiast</span>{" "}
          | <span className="text-accent dark:text-white">Innovator</span>
        </p> */}
      </div>
      {/* </Slide> */}
      {/* <Slide cascade damping={0.5} direction="up"> */}
      <div className="mt-10 flex justify-center items-center">
        <svg
          className="absolute lg:pt-10 lg:w-auto lg:h-96 h-72 text-primary"
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
          src={humayra}
          alt="Humayra"
          // data-aos="fade-down"
          className="relative w-auto h-auto lg:pl-10"
          style={{ zIndex: 10 }}
        />
      </div>
      {/* </Slide> */}
      <div>
        <div className="text-justify mt-10 lg:mt-32">
          <h3 className="text-2xl text-center lg:text-left text-primary">
            About Me
          </h3>
          <p className="lg:text-base text-sm text-slate-200 mt-2">
            Dedicated and innovative computer science undergraduate with a
            passion for programming and problem-solving. Committed to leveraging
            skills in C, CPP, and JavaScript, Typescript along with a keen
            interest in environmental conservation, to contribute effectively to
            challenging roles and organizational success.
          </p>
        </div>
        {/* </Slide> */}
      </div>{" "}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;

import React, { useEffect } from "react";
import humayra from "../../images/humayra.png";
import download from "../../images/file.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="pt-24 mx-20 lg:grid grid-cols-3"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <Slide cascade damping={0.5} direction="right">
        <div className="text-left sm:text-center sm:pt-10 lg:mt-24">
          <h1 className="text-6xl font-bold bg-clip-text text-primary dark:text-secondary">
            Humayra
          </h1>
          <h2 className="text-6xl font-bold bg-clip-text text-primary dark:text-secondary">
            Akter
          </h2>
          <div className="inline-block">
            <a
              href="/Humayra_Akter_CV.pdf"
              download
              className="bg-primary text-secondary py-2 px-4 rounded-md hover:bg-secondary border-primary dark:border-secondary hover:text-primary transition-colors mt-12 flex gap-2"
            >
              <img src={download} className="w-6" />
              Download My CV
            </a>
          </div>
        </div>
      </Slide>
      <Slide cascade damping={0.5} direction="up">
        <div className="sm:mt-10 flex justify-center items-center">
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
            src={humayra}
            alt="Humayra"
            data-aos="fade-down"
            className="relative w-auto pl-10"
            style={{ zIndex: 10 }}
          />
        </div>
      </Slide>
      <div>
        <Slide cascade damping={0.5}>
          <div className="text-justify sm:mt-10 lg:mt-32">
            <h3 className="text-2xl font-semibold text-primary dark:text-secondary">
              About Me
            </h3>
            <p className="text-base text-primary dark:text-secondary mt-2">
              Dedicated and innovative computer science undergraduate with a
              passion for programming and problem-solving. Committed to
              leveraging skills in C, CPP, and JavaScript, Typescript along with
              a keen interest in environmental conservation, to contribute
              effectively to challenging roles and organizational success.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Banner;

import React, { useEffect } from "react";
import humayra from "../../images/humayra.png";
import download from "../../images/file.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Slide } from "react-awesome-reveal";
import SocialMedia from "./SocialMedia";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="lg:pt-24 mx-20 lg:grid grid-cols-3"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      {/* Distorted Animated Lines */}
      <div className="absolute inset-0 z-0 h-[380px] pointer-events-none">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className={`absolute bg-slate-200 dark:bg-slate-800 opacity-60 w-[2px] h-full animate-flicker line-${index}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
            }}
          ></div>
        ))}
      </div>
      {/* <Slide cascade damping={0.5} direction="right"> */}
      <div className="lg:text-left text-center pt-10 lg:mt-24">
        <h1 className="lg:text-6xl text-3xl font-bold bg-clip-text text-primary dark:text-secondary">
          Humayra
        </h1>
        <h2 className="lg:text-6xl text-3xl font-bold bg-clip-text text-primary dark:text-secondary">
          Akter
        </h2>{" "}
        <p className="text-md lg:text-xl text-gray-300 lg:mt-10 mt-6">
          <span className="text-accent dark:text-white">
            Full Stack Developer
          </span>{" "}
          |{" "}
          <span className="text-accent dark:text-white">UI/UX Enthusiast</span>{" "}
          | <span className="text-accent dark:text-white">Innovator</span>
        </p>
        <div className="inline-block">
          <a
            href="/Humayra_Akter_CV.pdf"
            download
            className="bg-primary text-secondary py-2 px-4 rounded-md hover:bg-secondary border-primary dark:border-secondary text-sm lg:text-md hover:text-primary transition-colors mt-8 flex gap-2"
          >
            <img src={download} className="lg:w-6 lg:h-6 w-4 h-4" />
            Download My CV
          </a>
        </div>
        {/* Social Icons */}
        <SocialMedia />
      </div>
      {/* </Slide> */}
      {/* <Slide cascade damping={0.5} direction="up"> */}
      <div className="mt-10 flex justify-center items-center">
        <svg
          className="absolute lg:pt-10 lg:w-auto lg:h-96 h-80 text-primary"
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
          className="relative w-auto lg:pl-10"
          style={{ zIndex: 10 }}
        />
      </div>
      {/* </Slide> */}
      <div>
        {/* <Slide cascade damping={0.5}> */}
        <div className="text-justify mt-10 lg:mt-32">
          <h3 className="text-2xl text-center lg:text-left font-semibold text-primary dark:text-secondary">
            About Me
          </h3>
          <p className="lg:text base text-sm text-primary dark:text-white mt-2">
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
        @keyframes flicker {
          0%,
          100% {
            opacity: 0.2;
            transform: scaleY(1) translateY(0);
          }
          50% {
            opacity: 0.8;
            transform: scaleY(1.5) translateY(-20px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
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

        .animate-flicker {
          animation: flicker 3s infinite ease-in-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 2s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fade-in 3s ease-out forwards;
        }

        /* Randomized line animation delays */
        ${[...Array(15)].map(
          (_, i) => `.line-${i} { animation-delay: ${Math.random() * 2}s; }`
        )}
      `}</style>
    </div>
  );
};

export default Banner;

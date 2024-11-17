import React, { useEffect } from "react";
import txbd from "../../images/TechnocianBD.png";
import devSprint from "../../images/devSprint.jpg";
import caseCraft from "../../images/BUETCasecraft.jpg";
import kiron from "../../images/kironPython.png";
import uiu from "../../images/uiu_participate_certificate.png";
import leetcon from "../../images/leetcon.jpg";
import ieee from "../../images/IEEECSBDC.jpeg";
import bohubrihi from "../../images/Bohubrihi.png";
import bohubrihi2 from "../../images/bohubrihi2.png";
import trust from "../../images/TrustBank.png";
import genAI from "../../images/GenAI.png";
import gpOnlineSafety from "../../images/gpOnlineSafety.png";
import gpMS from "../../images/gpMSWord.png";
import gpCv from "../../images/gpCVWriting.png";
import gpAdaption from "../../images/gpCustomerBehavior.png";
import gpTownhall from "../../images/gp.png";
import idpc from "../../images/idpc.png";
import robot from "../../images/robotOlympiad.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const certificates = [
  {
    title:
      "IEEE Computer Society Bangladesh chapter Web and IT Committee Frontend Volunteer",
    image1: ieee,
    image2: trust,
  },
  {
    title: "Introduction to Generative AI by Google Cloud 2024",
    image1: genAI,
    image2: bohubrihi,
  },
  {
    title:
      "BUET DevSprint 2024: Inter-University Software Development Competition, finalist",
    image1: devSprint,
    image2: leetcon,
  },
  // Add more certificates as needed
];

const Certificate = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-gray-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-white"></div>
        </div>
      </div>
      <h3 className="text-2xl mt-20 mb-10 font-semibold text-primary text-center dark:text-secondary">
        Certificates
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="relative bg-primary text-secondary p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            <div className="relative group h-64 overflow-hidden rounded-md">
              {/* First Image */}
              <img
                src={certificate.image1}
                alt={certificate.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />
              {/* Second Image */}
              <img
                src={certificate.image2}
                alt={certificate.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium">
              {certificate.title}
            </p>
          </div>
        ))}
      </div>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-r from-primary to-purple-400 dark:from-gray-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-br from-cyan-400 to-sky-300 dark:to-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;

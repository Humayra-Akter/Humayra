import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ieee from "../../images/IEEECSBDC.jpeg";
import ieee2 from "../../images/IEEECSBDC.jpg";
import devSprint from "../../images/devSprint.jpg";
import devSprint2 from "../../images/devSprint2.jpg";
import caseCraft from "../../images/BUETCasecraft.jpg";
import caseCraft2 from "../../images/casecraft.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const homeCertificates = [
  {
    title:
      "IEEE Computer Society Bangladesh chapter Web and IT Committee Frontend Volunteer",
    image1: ieee,
    image2: ieee2,
  },
  {
    title:
      "BUET DevSprint 2024: Inter-University Software Development Competition, finalist - 1 March 2024",
    image1: devSprint,
    image2: devSprint2,
  },
  {
    title:
      "BUET CaseCraft AutoRealm competition: 2nd Runner-up - 26 January 2024",
    image1: caseCraft,
    image2: caseCraft2,
  },
];

const HomeCertificatePreview = () => {
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
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-50"
        >
          <div className="blur-[106px] lg:h-56 h-44 bg-gradient-to-br from-primary to-purple-400 dark:from-slate-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r  to-sky-300 from-cyan-400 dark:to-white"></div>
        </div>
      </div>
      <h3 className="text-3xl mt-10 mb-6 font-semibold text-primary text-center dark:text-secondary">
        Featured Certificates
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homeCertificates.map((certificate, index) => (
          <div
            key={index}
            // data-aos="fade-left"
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
      <div className="text-center mt-6">
        <Link
          to="/certificate"
          className="inline-block px-6 py-2 text-sm font-medium text-white bg-primary rounded-md shadow hover:bg-secondary transition"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default HomeCertificatePreview;

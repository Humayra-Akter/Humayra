import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import devSprint from "../../images/devSprint.jpg";
import devSprint2 from "../../images/devSprint2.jpg";
import caseCraft from "../../images/BUETCasecraft.jpg";
import caseCraft2 from "../../images/casecraft.jpg";
import nsuHackathon from "../../images/nsuHackathon.jpg";
import nsuHackathon2 from "../../images/nsuHackathon2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const homeCertificates = [
  {
    title:
      "WebXtreme Hackathon 2025, powered by Gigabyte AORUS and co-powered by Programming Hero at NSU Tech Fest 2025 - 12 February 2025",
    image1: nsuHackathon2,
    image2: nsuHackathon,
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
    image1: caseCraft2,
    image2: caseCraft,
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
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
        >
          <div className="blur-[106px] lg:h-56 h-44 bg-gradient-to-br from-slate-200 to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-white"></div>
        </div>
      </div>
      <h3 className="text-3xl mt-10 mb-6 text-primary text-center">
        Featured Certificates
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homeCertificates.map((certificate, index) => (
          <div
            key={index}
            // data-aos="fade-left"
            className="p-4 rounded-lg shadow-sm hover:shadow-md bg-transparent shadow-purple-200 text-white hover:shadow-accent border border-primary"
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
      <div className="text-center mt-6 mb-16">
        <Link
        to="/certificate"
          className="hover:bg-primary hover:text-secondary py-2 px-6 rounded-md bg-secondary text-primary border-2  hover:border-secondary transition-colors mt-4 inline-block"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default HomeCertificatePreview;

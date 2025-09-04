import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import devSprint from "../../images/devSprint.jpg";
import devSprint2 from "../../images/devSprint2.jpg";
import caseCraft from "../../images/BUETCasecraft.jpg";
import caseCraft2 from "../../images/casecraft.jpg";
import nsuHackathon from "../../images/nsuHackathon.jpg";
import nsuHackathon2 from "../../images/nsuHackathon2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

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
    <section
      className="max-w-7xl mx-auto px-6 py-16 relative"
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
    >
      {/* Title */}
      <h3 className="text-4xl text-center text-primary mb-14 tracking-wide">
        Featured Certificates
      </h3>

      {/* Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {homeCertificates.map((certificate, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-slate-600/40 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-primary/40 transition-all overflow-hidden"
          >
            {/* Hover Image Swap */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={certificate.image1}
                alt={certificate.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
              />
              <img
                src={certificate.image2}
                alt={certificate.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <p
              style={{ fontFamily: "'Esteban'" }}
              className="p-4 text-center text-slate-200 text-sm leading-relaxed"
            >
              {certificate.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-12">
        <Link
          to="/certificate"
          className="px-6 py-2 rounded-full border-cyan-400/50 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 shadow-md transition border-2"
        >
          See All
        </Link>
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HomeCertificatePreview;

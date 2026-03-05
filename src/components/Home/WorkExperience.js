import React, { useState } from "react";

/* images */
import computerClub from "../../images/MISTComputerClub.png";
import careerClub from "../../images/MISTCareerClub.jpg";
import cyberClub from "../../images/MISTCyberSecurity.jpg";
import bcc from "../../images/BCC.jpg";
import ieee from "../../images/exp/IEEECSBDC.jpeg";
import instructor from "../../images/exp/instructor.jpg";

import mcc from "../../images/exp/mcc(computer).jpg";
import mcc2 from "../../images/exp/mcc(computer)2023.png";
import mcc3 from "../../images/exp/mcc.jpg";
import mcc4 from "../../images/exp/mcc2022.jpg";
import mcc5 from "../../images/exp/mcc2023.jpg";
import mcsc from "../../images/exp/mcsc.jpg";
import bcc2 from "../../images/exp/bcc.png";
import trp from "../../images/exp/trp.jpg";
import trp2 from "../../images/exp/trp.png";

const experiences = [
  {
    org: "TRPGLOBAL",
    role: "Software Developer",
    year: "2026 – Present",
    logo: trp,
    image: trp2,
    description:
      "Designing and developing regulatory and risk-assessment web platforms for international clients, translating complex policy requirements into scalable production-ready systems.",
  },
  {
    org: "Bangladesh Computer Council",
    role: "Intern",
    year: "2024",
    logo: bcc,
    image: bcc2,
    description:
      "Worked on the Election Commission’s national ICT website: wrote functional test cases, validated UI/UX, and organized defects in test sheets. Exposure to national-scale systems, including switch/router configuration scripts, VLAN setups, routing logic, and government data storage infrastructure.",
  },
  {
    org: "IEEE CS Bangladesh Frontend Developer",
    role: "Web & IT Committee",
    year: "2024",
    logo: ieee,
    image: ieee,
    description:
      "Designed and implemented the initial architecture and core codebase of a production-grade web system for an academic symposium using Next.js; established project structure, reusable components, and documentation before handing over maintenance to the organizing team.",
  },
  {
    org: "Web Dev Course",
    role: "Instructor",
    year: "2024",
    logo: careerClub,
    image: instructor,
    description:
      "Taught web development concepts and technologies to multi-department students through live online sessions, providing guidance and support for their learning journey.",
  },
  {
    org: "MIST Career Club",
    role: "Director – Creative Design",
    year: "2024",
    logo: careerClub,
    image: mcc3,
    description:
      "Led the creative design efforts for national events (ENGIBIZ & MIST JOB FAIR) and initiatives, ensuring a cohesive and engaging visual identity.",
  },
  {
    org: "MIST Career Club",
    role: "Asst. Director – Event",
    year: "2024",
    logo: careerClub,
    image: mcc4,
    description:
      "Assisted in organizing and managing events, coordinating logistics, and ensuring successful execution of club activities.",
  },
  {
    org: "MIST Career Club",
    role: "Executive – Communication",
    year: "2023–24",
    logo: careerClub,
    image: mcc5,
    description:
      "Served as a key member of the communication team, responsible for promoting club activities and maintaining engagement with the student body.",
  },
  {
    org: "MIST Computer Club",
    role: "VP – R&D",
    year: "2024–Present",
    logo: computerClub,
    image: mcc,
    description:
      "Leading research and development initiatives, fostering innovation, and guiding the club's technical projects and activities.",
  },
  {
    org: "MIST Computer Club",
    role: "Executive – R&D",
    year: "2023–24",
    logo: computerClub,
    image: mcc2,
    description:
      "Participated in research and development projects, contributing to the club's technical initiatives and innovation efforts.",
  },
  {
    org: "MIST Cyber Security Club",
    role: "Organizer",
    year: "2023–24",
    logo: cyberClub,
    image: mcsc,
    description:
      "Organized and conducted cybersecurity workshops and events, raising awareness about security best practices.",
  },
];

const WorkExperience = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
      className="relative py-20 px-6 max-w-7xl mx-auto"
    >
      {/* ACTIVE PANEL */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-8 shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src={experiences[active].image}
            alt="active"
            className="w-full lg:w-1/2 max-h-72 object-contain rounded-2xl"
          />

          <div className="text-center lg:text-left">
            <h4 className="text-3xl text-primary">{experiences[active].org}</h4>
            <p
              style={{ fontFamily: "'Esteban'" }}
              className="text-xl text-gray-200 mt-2"
            >
              {experiences[active].role}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {experiences[active].year}
            </p>{" "}
            {experiences[active].description && (
              <p
                style={{ fontFamily: "'Esteban'" }}
                className="text-gray-300 mt-4 text-sm max-w-xl"
              >
                {experiences[active].description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* HORIZONTAL RAIL */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`snap-center min-w-[260px] p-4 rounded-2xl border transition ${
              active === index
                ? "bg-primary/20 border-primary scale-105"
                : "bg-white/5 border-white/20 hover:bg-white/10"
            }`}
          >
            <img
              src={exp.logo}
              alt="logo"
              className="w-10 h-10 rounded-full mx-auto mb-2"
            />
            <p className="text-sm text-primary text-center">{exp.org}</p>
            <p
              style={{ fontFamily: "'Esteban'" }}
              className="text-xs text-gray-300 text-center"
            >
              {exp.role}
            </p>
          </button>
        ))}
      </div>

      {/* background glow */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-400 blur-3xl rounded-full" />
      </div>
    </section>
  );
};

export default WorkExperience;

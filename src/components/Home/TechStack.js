import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const TechStack = () => {
  const techStack = [
    "C",
    "C++",
    "CSS3",
    "HTML5",
    "Java",
    "JavaScript",
    "TypeScript",
    "Firebase",
    "Heroku",
    "Netlify",
    "Oracle",
    "Render",
    "Vercel",
    "Ant-Design",
    "Bootstrap",
    "DaisyUI",
    "Expo",
    "Express.js",
    "JWT",
    "NPM",
    "Next JS",
    "NodeJS",
    "Nodemon",
    "React",
    "React Native",
    "React Query",
    "React Router",
    "React Hook Form",
    "Redux",
    "TailwindCSS",
    "Vite",
    "Zod",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Adobe Lightroom",
    "Canva",
    "Figma",
    "GitHub",
    "Cisco",
    "Postman",
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
    >
      <h3
        className="text-3xl mt-20 mb-10 font-semibold text-primary text-center dark:text-secondary"
        style={{ fontFamily: "'Poetsen One', sans-serif" }}
      >
        Tech Stack
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {techStack?.map((tech, index) => (
          <div
            key={index}
            // data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="bg-primary text-secondary py-2 px-4 rounded-full text-sm hover:scale-105"
          >
            {tech}
          </div>
        ))}
      </div>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-tr from-primary to-green-100 dark:from-gray-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-l from-teal-400 to-emerald-300 dark:to-white"></div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

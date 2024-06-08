import React from "react";

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

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      {" "}
      <h3
        className="text-2xl mt-20 mb-10 font-semibold text-primary text-center dark:text-secondary"
        style={{
          fontFamily: "'Poetsen One', sans-serif",
        }}
      >
        Tech Stack
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-primary text-secondary py-2 px-4 rounded-full text-sm transition-transform transform hover:scale-105"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

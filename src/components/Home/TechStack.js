import React from "react";
import {
  FaReact,
  FaJava,
  FaNode,
  FaDatabase,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiBootstrap,
  SiAdobe,
  SiCanva,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiRender,
  SiVercel,
  SiAntdesign,
  SiDaisyui,
  SiExpo,
  SiExpress,
  SiJsonwebtokens,
  SiNpm,
  SiNodedotjs,
  SiNodemon,
  SiReactquery,
  SiReactrouter,
  SiReacthookform,
  SiRedux,
  SiVite,
  SiZod,
  SiCisco,
} from "react-icons/si";

const techCategories = {
  "Programming Languages": [
    { name: "C", icon: <SiC className="text-blue-400" /> },
    { name: "C++", icon: <SiCplusplus className="text-indigo-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  ],
  Frontend: [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "React Native", icon: <FaReact className="text-cyan-300" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-300" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "Ant Design", icon: <SiAntdesign className="text-cyan-500" /> },
    { name: "DaisyUI", icon: <SiDaisyui className="text-pink-400" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Nodemon", icon: <SiNodemon className="text-green-400" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-red-400" /> },
  ],
  Databases: [
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <FaDatabase className="text-orange-400" /> },
    { name: "Oracle", icon: <FaDatabase className="text-red-500" /> },
  ],
  Deployment: [
    { name: "Heroku", icon: <SiHeroku className="text-purple-400" /> },
    { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
    { name: "Render", icon: <SiRender className="text-indigo-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Expo", icon: <SiExpo className="text-black" /> },
  ],
  "Libraries & State": [
    { name: "React Query", icon: <SiReactquery className="text-pink-400" /> },
    { name: "React Router", icon: <SiReactrouter className="text-red-400" /> },
    {
      name: "React Hook Form",
      icon: <SiReacthookform className="text-blue-300" />,
    },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Zod", icon: <SiZod className="text-teal-400" /> },
  ],
  "Tools & Design": [
    { name: "GitHub", icon: <FaGitAlt className="text-gray-200" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "NPM", icon: <SiNpm className="text-red-500" /> },
    { name: "Cisco", icon: <SiCisco className="text-blue-400" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Canva", icon: <SiCanva className="text-sky-500" /> },
    { name: "Adobe Lightroom", icon: <SiAdobe className="text-pink-400" /> },
  ],
};

const TechStack = () => {
  return (
    <section
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
      className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <h3 className="text-4xl text-center text-primary mb-10 tracking-wide">
        Tech Stack
      </h3>

      <div className="flex flex-wrap justify-between gap-y-7">
        {Object.entries(techCategories).map(([category, skills], i) => (
          <div
            key={i}
            className="rounded-2xl border-x border-slate-500 backdrop-blur-xl py-1 px-6 shadow-xl hover:shadow-primary/30 transition-transform duration-300 hover:-translate-y-2"
          >
            <h4 className="text-xl text-primary mb-6 text-center">
              {category}
            </h4>
            <ul className="flex flex-wrap gap-6 justify-center">
              {skills.map((s, j) => (
                <li
                  key={j}
                  className="flex flex-col items-center text-gray-300 hover:text-white transition"
                >
                  <span className="text-3xl mb-1">{s.icon}</span>
                  <span
                    style={{ fontFamily: "'Esteban'" }}
                    className="text-sm text-center"
                  >
                    {s.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* background gradient blobs */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-24 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-24 right-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default TechStack;

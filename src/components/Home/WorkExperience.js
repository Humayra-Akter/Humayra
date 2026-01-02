// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";

// /* images */
// import computerClub from "../../images/MISTComputerClub.png";
// import careerClub from "../../images/MISTCareerClub.jpg";
// import cyberClub from "../../images/MISTCyberSecurity.jpg";
// import bcc from "../../images/BCC.jpg";
// import ieee from "../../images/exp/IEEECSBDC.jpeg";
// import instructor from "../../images/exp/instructor.jpg";

// import mcc from "../../images/exp/mcc(computer).jpg";
// import mcc2 from "../../images/exp/mcc(computer)2023.png";
// import mcc3 from "../../images/exp/mcc.jpg";
// import mcc4 from "../../images/exp/mcc2022.jpg";
// import mcc5 from "../../images/exp/mcc2023.jpg";
// import mcsc from "../../images/exp/mcsc.jpg";
// import bcc2 from "../../images/exp/bcc.png";

// /* data */
// const experiences = [
//   {
//     org: "Bangladesh Computer Council",
//     role: "Intern",
//     year: "2024",
//     logo: bcc,
//     image: bcc2,
//   },
//   {
//     org: "IEEE CS Bangladesh Frontend Developer",
//     role: "Web & IT Committee",
//     year: "2024",
//     logo: ieee,
//     image: ieee,
//   },
//   {
//     org: "Web Dev Course",
//     role: "Instructor",
//     year: "2024",
//     logo: careerClub,
//     image: instructor,
//   },
//   {
//     org: "MIST Career Club",
//     role: "Director – Creative Design",
//     year: "2024",
//     logo: careerClub,
//     image: mcc3,
//   },
//   {
//     org: "MIST Career Club",
//     role: "Asst. Director – Event",
//     year: "2024",
//     logo: careerClub,
//     image: mcc4,
//   },
//   {
//     org: "MIST Career Club",
//     role: "Executive – Communication",
//     year: "2023–24",
//     logo: careerClub,
//     image: mcc5,
//   },
//   {
//     org: "MIST Computer Club",
//     role: "VP – R&D",
//     year: "2024–Present",
//     logo: computerClub,
//     image: mcc,
//   },
//   {
//     org: "MIST Computer Club",
//     role: "Executive – R&D",
//     year: "2023–24",
//     logo: computerClub,
//     image: mcc2,
//   },
//   {
//     org: "MIST Cyber Security Club",
//     role: "Organizer",
//     year: "2023–24",
//     logo: cyberClub,
//     image: mcsc,
//   },
// ];

// const WorkExperience = () => {
//   const [active, setActive] = useState(null);

//   return (
//     <section
//       style={{ fontFamily: "'Poetsen One', sans-serif" }}
//       className="py-20 px-6 max-w-7xl mx-auto"
//     >
//       <h3 className="text-4xl text-center text-primary mb-12">Experience</h3>

//       {/* GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {experiences.map((exp, index) => (
//           <button
//             key={index}
//             onClick={() => setActive(index)}
//             className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-left shadow-xl hover:scale-[1.03] transition"
//           >
//             <div className="flex items-center gap-4">
//               <img
//                 src={exp.logo}
//                 alt="logo"
//                 className="w-12 h-12 rounded-full object-cover border border-white/30"
//               />
//               <div>
//                 <h4 className="text-lg text-primary leading-tight">
//                   {exp.org}
//                 </h4>
//                 <p
//                   style={{ fontFamily: "'Esteban'" }}
//                   className="text-sm text-gray-200"
//                 >
//                   {exp.role}
//                 </p>
//                 <p className="text-xs text-gray-400">{exp.year}</p>
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>

//       {/* MODAL */}
//       {active !== null && (
//         <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
//           <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl max-w-2xl w-full p-6 shadow-2xl">
//             <button
//               onClick={() => setActive(null)}
//               className="absolute top-4 right-4 text-white hover:text-primary"
//             >
//               <FaTimes />
//             </button>

//             <img
//               src={experiences[active].image}
//               alt="experience"
//               className="w-full max-h-80 object-contain rounded-xl"
//             />

//             <div className="mt-4 text-center">
//               <h4 className="text-xl text-primary">
//                 {experiences[active].org}
//               </h4>
//               <p style={{ fontFamily: "'Esteban'" }} className="text-gray-200">
//                 {experiences[active].role}
//               </p>
//               <p className="text-sm text-gray-400">
//                 {experiences[active].year}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default WorkExperience;
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

const experiences = [
  {
    org: "Bangladesh Computer Council",
    role: "Intern",
    year: "2024",
    logo: bcc,
    image: bcc2,
  },
  {
    org: "IEEE CS Bangladesh Frontend Developer",
    role: "Web & IT Committee",
    year: "2024",
    logo: ieee,
    image: ieee,
  },
  {
    org: "Web Dev Course",
    role: "Instructor",
    year: "2024",
    logo: careerClub,
    image: instructor,
  },
  {
    org: "MIST Career Club",
    role: "Director – Creative Design",
    year: "2024",
    logo: careerClub,
    image: mcc3,
  },
  {
    org: "MIST Career Club",
    role: "Asst. Director – Event",
    year: "2024",
    logo: careerClub,
    image: mcc4,
  },
  {
    org: "MIST Career Club",
    role: "Executive – Communication",
    year: "2023–24",
    logo: careerClub,
    image: mcc5,
  },
  {
    org: "MIST Computer Club",
    role: "VP – R&D",
    year: "2024–Present",
    logo: computerClub,
    image: mcc,
  },
  {
    org: "MIST Computer Club",
    role: "Executive – R&D",
    year: "2023–24",
    logo: computerClub,
    image: mcc2,
  },
  {
    org: "MIST Cyber Security Club",
    role: "Organizer",
    year: "2023–24",
    logo: cyberClub,
    image: mcsc,
  },
];

const WorkExperience = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
      className="relative py-20 px-6 max-w-7xl mx-auto"
    >
      <h3 className="text-4xl text-center text-primary mb-10">Experience</h3>

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
            </p>
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

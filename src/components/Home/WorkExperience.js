import React, { useState, useEffect } from "react";
import computerClub from "../../images/MISTComputerClub.png";
import careerClub from "../../images/MISTCareerClub.jpg";
import cyberClub from "../../images/MISTCyberSecurity.jpg";
import bcc from "../../images/BCC.jpg";
import leetcon from "../../images/leetcon.jpg";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const slides = [
  {
    text: "MIST Career Club: Assistant Director of Event Management (2024 to present)",
    image: careerClub,
  },
  {
    text: "MIST Career Club: Executive Member of Communication Publication, 1 year (2023 to 2024)",
    image: careerClub,
  },
  {
    text: "MIST Career Club: Associate Communication Online (2022-2023)",
    image: careerClub,
  },
  {
    text: "MIST Computer Club: Vice President of the Research and Development Committee (2024 to present)",
    image: computerClub,
  },
  {
    text: "MIST Computer Club: Executive Member of the Research and Development Committee (2023 to 2024)",
    image: computerClub,
  },
  {
    text: "MIST Cyber Security Club: Organizer (2023 to present)",
    image: cyberClub,
  },
  {
    text: "Volunteer of Leetcon Hackathon contest 2023",
    image: leetcon,
  },
  {
    text: "Intern at BCC 2024",
    image: bcc,
  },
];

const WorkExperience = () => {
   const [current, setCurrent] = useState(0);

   const handleNext = () => {
     setCurrent((prev) => (prev + 1) % slides.length);
   };

   const handlePrev = () => {
     setCurrent(
       (prev) => (prev - 1 + slides.length) % slides.length
     );
   };
   return (
     <div className="relative flex flex-col items-center py-20 bg-gray-900 text-white overflow-hidden">
       <h2
         style={{
           color: "#66fcf1",
           marginTop: "40px",
           zIndex: 1,
         }}
         className="text-3xl text-center mb-12"
       >
         What Our Clients Say
       </h2>

       {/* Arrow Controls - Outside the Card */}
       <div className="flex justify-between w-full max-w-5xl">
         <button
           onClick={handlePrev}
           style={{ color: "#66fcf1" }}
           className="text-3xl hover:text-green-200 focus:outline-none"
         >
           <FaChevronLeft />
         </button>
         <button
           onClick={handleNext}
           className="text-3xl text-green-400 hover:text-green-200 focus:outline-none"
         >
           <FaChevronRight />
         </button>
       </div>

       <div
         className="relative w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-800 to-[#66fcf1] rounded-lg shadow-lg overflow-hidden transform transition duration-500 ease-in-out scale-95 hover:scale-100"
         style={{ animation: "fadeIn 1s ease-in-out" }}
       >
         {/* Background Glow Effect */}
         <div className="absolute -inset-3 rounded-lg bg-gradient-to-r from-green-500 via-blue-500 to-blue-500 opacity-30 blur-lg"></div>

         {/* Quote Icon */}
         <FaQuoteLeft className="absolute top-4 left-4 text-5xl text-green-400 opacity-50" />

         {/* Avatar */}
         <img
           src={slides[current].avatar}
           alt={slides[current].name}
           className="absolute top-6 right-6 w-16 h-16 rounded-full border-4 border-white shadow-lg"
         />

         {/* slide Content */}
         <div className="relative">
           {/* slide Text */}
           <p className="mt-10 text-lg font-medium text-center transition-opacity duration-500 opacity-100">
             {slides[current].text}
           </p>

           {/* Star Rating */}
           <div className="flex justify-center mt-6 space-x-1">
             {Array.from({ length: slides[current].rating }).map(
               (_, i) => (
                 <FaStar key={i} className="text-yellow-400" />
               )
             )}
           </div>
         </div>
       </div>

       {/* Inline CSS for background animation */}
       <style jsx>{`
         @keyframes glow {
           0% {
             transform: scale(1);
           }
           50% {
             transform: scale(1.05);
           }
           100% {
             transform: scale(1);
           }
         }
         @keyframes fadeIn {
           0% {
             opacity: 0;
             transform: translateY(10px);
           }
           100% {
             opacity: 1;
             transform: translateY(0);
           }
         }
         .animate-glow {
           animation: glow 10s ease-in-out infinite;
         }
       `}</style>
     </div>
   );
};

export default WorkExperience;

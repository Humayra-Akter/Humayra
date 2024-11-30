import React, { useState, useEffect } from "react";
import computerClub from "../../images/MISTComputerClub.png";
import careerClub from "../../images/MISTCareerClub.jpg";
import cyberClub from "../../images/MISTCyberSecurity.jpg";
import bcc from "../../images/BCC.jpg";
import leetcon from "../../images/leetcon.jpg";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    text: "MIST Career Club",
    text2: "Assistant Director of Event Management",
    year: "2024 to present",
    image: careerClub,
  },
  {
    text: "MIST Career Club",
    text2: "Executive Member of Communication Publication",
    year: "2023 to 2024",
    image: careerClub,
  },
  {
    text: "MIST Career Club",
    text2: "Associate Communication Online",
    year: "2022-2023",
    image: careerClub,
  },
  {
    text: "MIST Computer Club",
    text2: "Vice President of the Research and Development Committee",
    year: "2024 to present",
    image: computerClub,
  },
  {
    text: "MIST Computer Club",
    text2: "Executive Member of the Research and Development Committee",
    year: "2023 to 2024",
    image: computerClub,
  },
  {
    text: "MIST Cyber Security Club: Organizer",
    year: "2023 to 2024",
    image: cyberClub,
  },
  {
    text: "Volunteer of Leetcon Hackathon",
    year: "2023",
    image: leetcon,
  },
  {
    text: "Intern at Bangladesh Computer Council (BCC)",
    year: "2024",
    image: bcc,
  },
];

const WorkExperience = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <h3 className="text-3xl font-semibold text-center text-primary mb-10 mt-16 dark:text-secondary">
        Experiences
      </h3>
      <div
        className="relative h-52 max-w-4xl mx-auto p-8 shadow-2xl rounded-lg  overflow-hidden transform transition duration-500 ease-in-out scale-95 hover:scale-100"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        {/* Background Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-purple-500 via-pink-500 to-fuchsia-500 dark:bg-gradient-to-l dark:from-green-500 dark:via-teal-500 dark:to-emerald-500 rounded-lg opacity-25 pointer-events-none transform transition duration-500 hover:opacity-50"></div>

        {/* Quote Icon */}
        <FaQuoteLeft className="absolute top-4 left-4 text-5xl text-primary dark:text-secondary opacity-50" />

        <img
          src={slides[current].image}
          alt={slides[current].name}
          className="absolute top-6 right-6 w-16 h-16 rounded-full border-4 border-white shadow-lg"
        />

        {/* Slide Content */}
        <div className="relative">
          <p className="mt-10 text-xl text-primary dark:text-secondary font-medium text-center transition-opacity duration-500 opacity-100">
            {slides[current].text}
          </p>
          <p className="mt-1 text-lg font-medium text-center dark:text-white transition-opacity duration-500 opacity-100">
            {slides[current]?.text2}
          </p>{" "}
          <p className="mt-1 text-lg font-medium text-center dark:text-white transition-opacity duration-500 opacity-100">
            {slides[current].year}
          </p>
        </div>
      </div>

      {/* Dots and Arrow Controls */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <button
          onClick={handlePrev}
          className="p-2 text-white bg-primary rounded-full hover:scale-110 transition-transform"
        >
          <FaArrowLeft />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-primary dark:bg-secondary"
                  : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 text-white bg-primary rounded-full hover:scale-110 transition-transform"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Inline CSS for Background Animation */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default WorkExperience;

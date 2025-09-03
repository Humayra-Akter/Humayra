import React, { useState, useEffect } from "react";
import computerClub from "../../images/MISTComputerClub.png";
import careerClub from "../../images/MISTCareerClub.jpg";
import cyberClub from "../../images/MISTCyberSecurity.jpg";
import bcc from "../../images/BCC.jpg";
import leetcon from "../../images/leetcon.jpg";
import {
  FaQuoteLeft,
  FaArrowLeft,
  FaArrowRight,
  FaQuoteRight,
} from "react-icons/fa";
import mcc from "../../images/exp/mcc(computer).jpg";
import mcc2 from "../../images/exp/mcc(computer)2023.png";
import mcc3 from "../../images/exp/mcc.jpg";
import mcc4 from "../../images/exp/mcc2022.jpg";
import mcc5 from "../../images/exp/mcc2023.jpg";
import mcsc from "../../images/exp/mcsc.jpg";
import ieee from "../../images/exp/IEEECSBDC.jpeg";
import bcc2 from "../../images/exp/bcc.png";

const slides = [
  {
    text: "MIST Career Club",
    text2: "Director of Creative Design",
    year: "2024 Fall Term",
    image: careerClub,
    post: mcc3,
  },
  {
    text: "MIST Career Club",
    text2: "Assistant Director of Event Management",
    year: "2024 to 2024 Spring Term",
    image: careerClub,
    post: mcc4,
  },
  {
    text: "MIST Career Club",
    text2: "Executive Member of Communication Publication",
    year: "2023 to 2024",
    image: careerClub,
    post: mcc5,
  },
  {
    text: "MIST Career Club",
    text2: "Associate Communication Online",
    year: "2022-2023",
    image: careerClub,
    post: mcc4,
  },
  {
    text: "MIST Computer Club",
    text2: "Vice President of the Research and Development Committee",
    year: "2024 to present",
    image: computerClub,
    post: mcc,
  },
  {
    text: "MIST Computer Club",
    text2: "Executive Member of the Research and Development Committee",
    year: "2023 to 2024",
    image: computerClub,
    post: mcc2,
  },
  {
    text: "MIST Cyber Security Club: Organizer",
    year: "2023 to 2024",
    image: cyberClub,
    post: mcsc,
  },
  {
    text: "Intern at Bangladesh Computer Council (BCC)",
    year: "2024",
    image: bcc,
    post: bcc2,
  },
  {
    text: "IEEE Computer Society Bangladesh Chapter Web & IT Committee",
    year: "2024",
    image: ieee,
    post: ieee,
  },
];

const WorkExperience = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];
  const mainImage = slide.post || slide.image;

  return (
    <div style={{ fontFamily: "'Poetsen One', sans-serif" }}>
      <h3 className="text-3xl text-center text-primary mb-10 mt-10">
        Experiences
      </h3>

      <div className="relative max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden transition duration-500">
        {/* Header with Icon */}
        <div className="absolute top-4 left-4">
          <img
            src={slide?.image}
            alt="icon"
            className="w-16 h-16 rounded-full border-2 border-white shadow-lg object-cover"
          />
        </div>

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-bl from-green-300 via-purple-300 to-emerald-300 opacity-10 pointer-events-none"></div>
        {/* Quote Icon */}
        <FaQuoteRight className="absolute top-4 right-4 text-3xl text-primary opacity-40" />

        {/* Main Post Image */}
        <div className="flex justify-center">
          <img
            src={mainImage}
            alt="post"
            className="mt-20 max-h-60 border rounded-lg shadow-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="p-6 text-center">
          <p className="mt-4 text-xl text-primary">
            {slide.text}
          </p>
          {slide.text2 && (
            <p className="text-lg text-gray-300">
              {slide.text2}
            </p>
          )}
          <p className="mt-1 text-md text-gray-400">
            {slide.year}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <button
          onClick={handlePrev}
          className="p-2 text-black bg-primary rounded-full hover:scale-110 transition-transform"
        >
          <FaArrowLeft />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === index
                  ? "bg-primary scale-110"
                  : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 text-black bg-primary rounded-full hover:scale-110 transition-transform"
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

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";

import computerClub from "../../images/MISTComputerClub.png";
import careerClub from "../../images/MISTCareerClub.jpg";
import cyberClub from "../../images/MISTCyberSecurity.jpg";
import bcc from "../../images/BCC.jpg";
import ieee from "../../images/exp/IEEECSBDC.jpeg";

import mcc from "../../images/exp/mcc(computer).jpg";
import mcc2 from "../../images/exp/mcc(computer)2023.png";
import mcc3 from "../../images/exp/mcc.jpg";
import mcc4 from "../../images/exp/mcc2022.jpg";
import mcc5 from "../../images/exp/mcc2023.jpg";
import mcsc from "../../images/exp/mcsc.jpg";
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
    year: "2024 Spring Term",
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
    text2: "Vice President of Research & Development",
    year: "2024 to Present",
    image: computerClub,
    post: mcc,
  },
  {
    text: "MIST Computer Club",
    text2: "Executive Member of R&D Committee",
    year: "2023 to 2024",
    image: computerClub,
    post: mcc2,
  },
  {
    text: "MIST Cyber Security Club",
    text2: "Organizer",
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
    text: "IEEE CS Bangladesh Chapter",
    text2: "Web & IT Committee",
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
    }, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  const slide = slides[current];
  const mainImage = slide.post || slide.image;

  return (
    <div
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
      className="py-16 px-4 md:px-12 lg:px-20"
    >
      <h3 className="text-4xl text-center text-primary mb-12 tracking-wide">
        Experiences
      </h3>

      {/* Card Container */}
      <div className="relative max-w-5xl mx-auto">
        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 flex flex-col items-center transition-all duration-500 hover:scale-[1.02]">
          {/* Club/Company Icon */}
          <div className="absolute -top-8 left-6">
            <img
              src={slide?.image}
              alt="logo"
              className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover"
            />
          </div>

          {/* Decorative Quote */}
          <FaQuoteRight className="absolute top-6 right-6 text-3xl text-primary opacity-30" />

          {/* Post Image */}
          <div className="flex justify-center mb-6">
            <img
              src={mainImage}
              alt="post"
              className="max-h-64 rounded-xl shadow-lg border border-white/20 object-contain"
            />
          </div>

          {/* Text */}
          <div className="text-center">
            <p className="text-2xl text-primary">{slide.text}</p>
            {slide.text2 && (
              <p
                style={{ fontFamily: "'Esteban'" }}
                className="text-lg text-gray-200 mt-2"
              >
                {slide.text2}
              </p>
            )}
            <p className="mt-2 text-sm text-gray-400">{slide.year}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 p-3 rounded-full glass text-white shadow-lg hover:scale-110 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 p-3 rounded-full glass text-white shadow-lg hover:scale-110 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-primary scale-125"
                : "bg-gray-500 hover:bg-primary/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

import React, { useState, useEffect } from "react";
import computerClub from "../../images/MISTComputerClub.png";
import careerClub from "../../images/MISTCareerClub.jpg";
import cyberClub from "../../images/MISTCyberSecurity.jpg";
import bcc from "../../images/BCC.jpg";
import leetcon from "../../images/leetcon.jpg";

const WorkExperience = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
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

  // Append a duplicate set of slides to the end of the array
  const extendedSlides = [...slides, ...slides];

  useEffect(() => {
    const slider = document.getElementById("slider");
    if (slider) {
      setSliderWidth(slider.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlide();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div
      className="max-w-8xl mx-16 overflow-hidden"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <h3
        className="text-2xl mt-20 mb-10 font-semibold text-primary text-center dark:text-secondary"
        style={{
          fontFamily: "'Poetsen One', sans-serif",
        }}
      >
        Experience
      </h3>
      <ul
        id="slider"
        className="list-none p-0 m-0 gap-10 flex transition-transform duration-300"
        style={{
          transform: `translateX(-${sliderWidth * currentSlide}px)`,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <li
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: "600px" }}
          >
            <div className="p-4 bg-primary text-secondary shadow-md border dark:border-secondary rounded-lg overflow-hidden transition-colors duration-300 flex items-center h-full">
              <div className="mr-4">
                <img
                  src={slide.image}
                  alt="Slide"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <p>{slide.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;

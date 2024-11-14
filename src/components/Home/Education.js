import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 800, offset: 200, easing: "ease-in-out" });
  }, []);

  const educationData = [
    {
      institution: "Military Institute of Science and Technology",
      degree: "BSc in Computer Science & Engineering",
      year: "2021-present",
    },
    {
      institution: "Ideal School and College",
      degree: "HSC, Grade: A+ with General Scholarship",
      year: "2020",
    },
    {
      institution: "Ideal School and College",
      degree: "SSC, Grade: A+",
      year: "2018",
    },
    {
      institution: "Ideal School and College",
      degree: "JSC, Grade: A+ with General Scholarship",
      year: "2016",
    },
  ];

  return (
    <div className="mt-24">
      <h3
        className="text-3xl font-semibold text-primary text-center dark:text-secondary"
        style={{
          fontFamily: "'Poetsen One', sans-serif",
        }}
      >
        Education
      </h3>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mx-8 lg:mx-20">
        {educationData.map((education, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="relative bg-primary dark:bg-slate-800 hover:bg-black dark:hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-2 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-6 text-center text-white dark:text-secondary">
              <div className="font-bold text-xl mb-2">
                {education.institution}
              </div>
              <p className="text-base mt-1">{education.degree}</p>
              <p className="text-sm mt-2 text-gray-300">{education.year}</p>
            </div>

            {/* Background animation */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-20 z-0 pointer-events-none animate-slow-pulse"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: "6s",
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Additional styles */}
      <style jsx>{`
        @keyframes slow-pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        .animate-slow-pulse {
          animation: slow-pulse 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Education;

import React from "react";
import { Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  // Array of education objects
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
    <div
      className="my-20 px-6 lg:px-20"
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
    >
      <h3 className="text-3xl font-semibold text-center text-primary dark:text-secondary mb-10">
        <FontAwesomeIcon
          icon={faGraduationCap}
          className="text-primary dark:text-secondary text-3xl mr-6 animate-pulse"
        />
        Education
      </h3>

      {/* Education Timeline */}

      <div className="mt-12 max-w-6xl mx-auto text-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationData.map((education, index) => (
            <Slide key={index} direction={index % 2 === 0 ? "left" : "right"}>
              <ul className="flex space-x-8 shadow-lg border-x-4 border-y-0 dark:border-slate-800 p-4 rounded-lg transform transition-all duration-500 hover:scale-105">
                <li className="flex flex-col items-center text-primary -mt-10 dark:text-secondary">
                  <div
                    className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-primary relative"
                    style={{
                      animation: "bounce 2s infinite",
                    }}
                  >
                    <span className="dark:text-white text-yellow-800 font-semibold">
                      {education.year}
                    </span>
                  </div>
                  <h4 className="text-primary dark:text-secondary mt-4 text-lg font-semibold">
                    {education.institution}
                  </h4>
                  <p className="text-black dark:text-white text-xs mt-2">
                    {education.degree}
                  </p>
                </li>
              </ul>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

// Add the following CSS for the circle animation
<style jsx>{`
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`}</style>;

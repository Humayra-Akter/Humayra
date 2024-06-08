import React from "react";

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
    <div>
      <h3
        className="text-2xl mt-20 font-semibold text-primary text-center dark:text-secondary"
        style={{
          fontFamily: "'Poetsen One', sans-serif",
        }}
      >
        Education
      </h3>
      <div
        className="grid lg:grid-cols-4 gap-5 mx-20"
        style={{
          fontFamily: "'Poetsen One', sans-serif",
        }}
      >
        {educationData.map((education, index) => (
          <div
            key={index}
            className="mt-4 bg-primary hover:bg-black shadow-md border dark:border-secondary rounded-lg overflow-hidden transition-colors duration-300 hover:text-black"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-white text-center text-xl mb-2">
                {education.institution}
              </div>
              <p className="text-white pt-2 text-base text-center dark:text-secondary">
                {education.degree}
              </p>
              <p className="text-white text-base text-center dark:text-secondary">
                {education.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

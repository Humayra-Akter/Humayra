import { Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  const bachelors = {
    institution: "Military Institute of Science and Technology",
    degree: "BSc in Computer Science & Engineering",
    year: "2021 — 2025",
  };

  const schoolGroup = {
    institution: "Ideal School and College",
    items: [
      {
        level: "HSC",
        note: "Grade: A+ with General Scholarship",
        year: "2020",
      },
      { level: "SSC", note: "Grade: A+", year: "2018" },
      {
        level: "JSC",
        note: "Grade: A+ with General Scholarship",
        year: "2016",
      },
    ],
  };

  return (
    <div
      className="my-20 px-6 lg:px-20 relative"
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
    >
      <h3 className="text-3xl text-center text-primary mb-12 flex items-center justify-center gap-3">
        <FontAwesomeIcon
          icon={faGraduationCap}
          className="text-primary text-3xl"
        />
        Education
      </h3>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-primary to-pink-400 rounded-full"></div>

        <div className="space-y-12">
          {/* Bachelor's Card - Highlighted */}
          <Slide direction="up" triggerOnce>
            <div className="relative flex items-start gap-6">
              {/* Timeline Dot */}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-primary flex items-center justify-center text-white shadow-lg">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
              </div>

              {/* Main Highlight Card */}
              <div className="flex-1 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-purple-500/30 transition-all">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h4 className="text-xl text-primary">
                    {bachelors.institution}
                  </h4>
                  <span className="text-sm text-gray-300">
                    {bachelors.year}
                  </span>
                </div>
                <p
                  style={{ fontFamily: "'Esteban'" }}
                  className="text-white mt-3 text-lg"
                >
                  {bachelors.degree}
                </p>
              </div>
            </div>
          </Slide>

          {/* School Group Card - Compact */}
          <Slide direction="up" delay={150} triggerOnce>
            <div className="relative flex items-start gap-6">
              {/* Timeline Dot */}
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-400 to-primary flex items-center justify-center text-white shadow-lg">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
              </div>

              {/* Grouped Card */}
              <div className="flex-1 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-purple-500/30 transition-all">
                <h4 className="text-lg text-primary mb-3">
                  {schoolGroup.institution}
                </h4>
                <ul className="space-y-3">
                  {schoolGroup.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-lg backdrop-blur-lg border border-white/20 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">
                          {item.level}
                        </span>
                        <span className="text-gray-300">{item.year}</span>
                      </div>
                      <p
                        style={{ fontFamily: "'Esteban'" }}
                        className="text-sm text-gray-300 mt-1"
                      >
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Education;

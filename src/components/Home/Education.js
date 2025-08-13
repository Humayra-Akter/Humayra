
import { Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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

  const capAnim = {
    animate: {
      y: [0, -5, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div
      className="lg:my-28 my-20 px-6 lg:px-20"
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
    >
      <h3 className="text-3xl font-semibold text-center text-primary dark:text-secondary mb-10 flex items-center justify-center gap-3">
        <FontAwesomeIcon
          icon={faGraduationCap}
          className="text-primary dark:text-secondary text-3xl"
        />
        Education
      </h3>

      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-5">
        {/* Bachelor's Card */}
        <Slide direction="up" triggerOnce>
          <div className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-purple-200 dark:border-slate-700 p-6 shadow-lg hover:shadow-accent/30 transition-all bg-white dark:bg-slate-900">
            {/* Animated Icon */}
            <motion.div
              className="w-20 h-20 rounded-full border-4 border-accent flex items-center justify-center bg-purple-50 dark:bg-slate-800"
              {...capAnim}
            >
              <FontAwesomeIcon
                className="text-primary dark:text-secondary text-3xl"
                icon={faGraduationCap}
              />
            </motion.div>

            {/* Info */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-primary dark:text-secondary">
                {bachelors.institution}
              </h4>
              <p className="text-black dark:text-white mt-1">
                {bachelors.degree}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {bachelors.year}
              </p>
            </div>
          </div>
        </Slide>

        {/* School Group Card */}
        <Slide direction="up" delay={100} triggerOnce>
          <div className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-purple-200 dark:border-slate-700 p-6 shadow-lg hover:shadow-accent/30 transition-all bg-white dark:bg-slate-900">
            {/* Animated Icon */}
            <motion.div
              className="w-20 h-20 rounded-full border-4 border-accent flex items-center justify-center bg-purple-50 dark:bg-slate-800"
              {...capAnim}
            >
              <FontAwesomeIcon
                className="text-primary dark:text-secondary text-3xl"
                icon={faGraduationCap}
              />
            </motion.div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-lg font-semibold text-primary dark:text-secondary">
                {schoolGroup.institution}
              </h4>
              <ul className="mt-2 space-y-2">
                {schoolGroup.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-lg border border-purple-100 dark:border-slate-700 bg-purple-50/50 dark:bg-slate-800/50"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-black dark:text-white">
                        {item.level}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
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
  );
};

export default Education;
<style jsx>{
  `@keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }`
}</style>;
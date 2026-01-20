import React from "react";
import me from "../../images/humayra.png";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <h2 className="text-3xl lg:mt-7 mb-8 text-primary">About Me</h2>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-50"
        >
          <div className="blur-[106px] lg:h-56 h-44 bg-gradient-to-br from-primary to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-white"></div>
        </div>
      </div>
      <div className="lg:flex lg:mx-32 gap-8">
        <svg
          className="absolute pt-10 lg:w-auto lg:h-96 h-64 text-primary"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M44.3,-34.3C60.4,-15.2,78.4,3.4,75.1,17C71.9,30.6,47.4,39.1,26.6,45.3C5.8,51.6,-11.4,55.4,-29.7,50.8C-48.1,46.1,-67.6,33,-71.2,16.5C-74.8,-0.1,-62.5,-20,-48,-38.8C-33.4,-57.6,-16.7,-75.2,-1.3,-74.1C14.1,-73.1,28.3,-53.5,44.3,-34.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <img
          src={me}
          alt="Humayra"
          className="relative lg:h-96 h-auto max-w-full lg:w-auto pl-10"
        />

        <Slide cascade damping={0.5}>
          {/* <div
            style={{
              fontFamily: "'Esteban'",
            }}
            className="text-wrap font-thin text-justify w-full lg:w-auto text-white"
          >
            <p className="mb-4">
              Hi, I'm Humayra Akter, a passionate and dedicated junior software
              developer with a strong interest in web development and software
              engineering. I hold a degree in Computer Science from Military
              Institute of Science and Technology, where I honed my skills in
              various programming languages and software development
              methodologies.
            </p>
            <p className="mb-4">
              Over the past few years, I have gained hands-on experience working
              on several projects, both academic and personal. My technical
              skills include proficiency in JavaScript, React, Node.js, and C,
              C++. I am also familiar with databases such as MySQL and MongoDB,
              and have experience with version control systems like Git.
            </p>
            <p className="mb-4">
              I am always eager to learn new technologies and take on
              challenging projects. My goal is to continuously grow as a
              developer and contribute to impactful projects that make a
              difference. In addition to my technical skills, I have strong
              problem-solving abilities, excellent communication skills, and a
              collaborative mindset that allows me to work effectively in team
              environments.
            </p>
            <p className="mb-4">
              Outside of coding, I enjoy time with my cat and also do crafting,
              which helps me stay balanced and inspired. Feel free to download
              my CV below to learn more about my background, skills, and
              experience. I look forward to connecting with you!
            </p>
          </div> */}
          <div
            style={{ fontFamily: "'Esteban'" }}
            className="relative z-10 text-justify text-gray-200 leading-relaxed w-full lg:w-auto"
          >
            <p className="mb-4">
              I am{" "}
              <span className="text-primary font-semibold">Humayra Akter</span>,
              a Computer Science graduate from the Military Institute of Science
              and Technology (MIST), with a strong focus on{" "}
              <span className="text-primary">
                machine learning, data-driven systems, and applied analytics
              </span>
              .
            </p>

            <p className="mb-4">
              My work spans{" "}
              <span className="text-primary">
                predictive modeling, ensemble learning, explainable AI, and
                deployment-oriented ML systems
              </span>
              . I have conducted large-scale empirical studies using real-world
              datasets and developed end-to-end pipelines—from feature
              engineering and model evaluation to reproducible deployment.
            </p>

            <p className="mb-4">
              I have authored and co-authored{" "}
              <span className="text-primary">
                peer-reviewed conference publications
              </span>{" "}
              and am currently preparing a journal manuscript targeting a
              Springer venue. My research interests include{" "}
              <span className="text-primary">
                robust machine learning, data leakage mitigation, human-centered
                analytics, and interpretable models
              </span>
              .
            </p>

            <p className="mb-4">
              Alongside research, I have experience building{" "}
              <span className="text-primary">
                full-stack and mobile applications
              </span>{" "}
              using React, React Native, Node.js, and modern data-driven
              architectures, with an emphasis on usability and real-world
              impact.
            </p>

            <p>
              I am motivated by problems that lie at the intersection of{" "}
              <span className="text-primary">
                machine learning, systems, and societal relevance
              </span>
              , and I am actively preparing for research-oriented roles and
              doctoral studies.
            </p>
          </div>
        </Slide>
      </div>
      <div className="mt-10">
        <a
          href="/Humayra_Akter_CV.pdf"
          download
          className="bg-gradient-to-r from-primary to-cyan-400 text-slate-900 rounded-full
              hover:bg-primary shadow-lg hover:scale-105 transition hover:text-secondary px-6 py-2 bg-secondary border-2 hover:border-secondary"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default About;

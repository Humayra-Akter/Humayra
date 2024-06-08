import React from "react";
import humayra from "../../images/humayra.png";

const Banner = () => {
  return (
    <div className="pt-36 mx-20 lg:grid grid-cols-3">
      <div className="text-left sm:text-center sm:pt-10 lg:mt-32">
        <h1
          className="text-6xl font-bold bg-clip-text text-primary dark:text-secondary"
          style={{
            fontFamily: "'Poetsen One', sans-serif",
          }}
        >
          Humayra
        </h1>
        <h2
          className="text-6xl font-bold bg-clip-text text-primary dark:text-secondary"
          style={{
            fontFamily: "'Poetsen One', sans-serif",
          }}
        >
          Akter
        </h2>
      </div>

      <div className="sm:mt-10 flex justify-center items-center">
        <svg
          className="absolute pt-10 w-auto h-96 text-primary"
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
          src={humayra}
          alt="Humayra"
          className="relative w-auto pl-10"
          style={{ zIndex: 10 }}
        />
      </div>
      <div>
        <div className="text-justify sm:mt-10 lg:mt-32">
          <h3
            className="text-2xl font-semibold text-primary dark:text-secondary"
            style={{
              fontFamily: "'Poetsen One', sans-serif",
            }}
          >
            About Me
          </h3>
          <p
            className="text-base text-primary dark:text-secondary mt-2"
            style={{
              fontFamily: "'Poetsen One', sans-serif",
            }}
          >
            Dedicated and innovative computer science undergraduate with a
            passion for programming and problem-solving. Committed to leveraging
            skills in C, CPP, and JavaScript, Typescript along with a keen
            interest in environmental conservation, to contribute effectively to
            challenging roles and organizational success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

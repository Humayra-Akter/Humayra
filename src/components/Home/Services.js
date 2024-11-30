import React from "react";
import { Slide } from "react-awesome-reveal";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and high-performance websites.",
    icon: "🌐",
  },
  {
    title: "App Development",
    description: "Creating mobile applications for Android and iOS platforms.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces and experiences.",
    icon: "🎨",
  },
];

const Services = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8 py-16"
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
    >
      <h3 className="text-3xl font-semibold text-center text-primary mb-10 dark:text-secondary">
        My Services
      </h3>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-gray-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-white"></div>
        </div>
      </div>
      <Slide cascade damping={0.5} direction="down">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg border-x-4 hover:shadow-md hover:shadow-accent border-purple-200 border-y-0 dark:border-slate-700 p-4 rounded-lg transform transition-all duration-500 hover:scale-105"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute top-0 shadow-md shadow-accent hover:shadow-lg left-0 w-full h-full bg-gradient-to-l from-primary via-purple-700 to-fuchsia-500 dark:bg-gradient-to-t dark:from-green-700 dark:via-emerald-600 dark:to-teal-500  rounded-lg opacity-25 pointer-events-none transform transition duration-500 hover:opacity-50"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h4 className="text-2xl mb-2 text-primary dark:text-secondary">
                  {service.title}
                </h4>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default Services;

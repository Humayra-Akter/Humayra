import React, { useState } from "react";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <div
      className="container mx-auto p-8 
      dark:bg-gray-900 bg-white"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      {" "}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-gray-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-white"></div>
        </div>
      </div>
      <h3 className="text-2xl mt-20 mb-10 font-semibold text-primary text-center dark:text-secondary">
        Projects
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 rounded-lg shadow-md 
              dark:bg-gray-800 dark:text-white bg-red-50 
            hover:shadow-xl hover:scale-100 border dark:border-primary border-rose-100 transition duration-300 ease-in-out"
          >
            <div className="mb-4">
              {/* Carousel for screenshots */}
              {project.screenshots.length > 1 ? (
                <div className="flex overflow-x-auto space-x-4">
                  {project.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="h-40 w-full object-cover rounded-lg border border-rose-100 dark:border-secondary shadow-xl hover:scale-95"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={project.screenshots[0]}
                  alt={project?.name}
                  className=" mb-4 border border-rose-100 dark:border-secondary shadow-xl hover:scale-95 rounded-lg h-40 w-full object-cover"
                />
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {project?.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary hover:scale-105 hover:font-bold text-secondary px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              {project?.liveDemo && (
                <a
                  href={project.liveDemo}
                  className="text-blue-400 hover:text-blue-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                className="text-accent hover:font-bold font-semibold text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>{" "}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-gray-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

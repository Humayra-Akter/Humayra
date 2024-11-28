import React from "react";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={project?.screenshots[0]}
              alt={project.name}
              className="rounded mb-4 h-40"
            />
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary text-secondary px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              {project?.liveDemo ? (
                <a
                  href={project?.liveDemo}
                  className="text-blue-400 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              ) : (
                <span></span>
              )}

              <a
                href={project?.github}
                className="text-blue-400 hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

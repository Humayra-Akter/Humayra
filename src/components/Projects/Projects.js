import React, { useState, useEffect } from "react";
import projects from "../../data/projects.json";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      className="container mx-auto p-8"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-200 to-sky-100"></div>
        </div>
      </div>
      <h3 className="text-2xl mt-20 mb-10 font-semibold text-primary text-center dark:text-secondary">
        Projects
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project, index) => (
          <div
            key={project.id}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="p-4 rounded-lg shadow-md hover:shadow-lg dark:bg-black shadow-purple-400 dark:shadow-green-300 dark:text-white hover:shadow-accent  border-2 dark:border-primary border-rose-200"
          >
            <div className="mb-4">
              {project.screenshots.length > 1 ? (
                <div className="flex overflow-x-auto space-x-4">
                  {project.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="h-40 w-full object-cover rounded-lg border border-rose-100 dark:border-secondary shadow-xl hover:scale-95 cursor-pointer"
                      onClick={() => openModal(screenshot)}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={project.screenshots[0]}
                  alt={project?.name}
                  className="mb-4 border border-rose-100 dark:border-secondary shadow-xl hover:scale-95 rounded-lg h-40 w-full object-cover cursor-pointer"
                  onClick={() => openModal(project.screenshots[0])}
                />
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>{" "}
            <p className="text-sm font-medium text-accent dark:text-accent mb-2">
              <span>Category: </span>
              {project.category}
            </p>
            <p className="text-sm font-thin mb-4">
              {expandedDescriptions[project.id]
                ? project.description
                : `${project.description.slice(0, 100)}... `}
              {project.description.length > 100 && (
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => toggleDescription(project.id)}
                >
                  {expandedDescriptions[project.id] ? "Read Less" : "Read More"}
                </button>
              )}
            </p>
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
            <div className="flex justify-end gap-3 mt-4">
              <a
                href={project.github}
                className="flex items-center justify-center w-10 h-10 animate-spin-slow hover:scale-105 bg-slate-600 hover:bg-blue-700 rounded-full text-secondary"
                target="_blank"
                // rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              {project?.liveDemo && (
                <a
                  href={project?.liveDemo}
                  className="flex items-center justify-center w-10 h-10 animate-spin-slow hover:scale-105 bg-slate-600 hover:bg-blue-700 rounded-full text-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <i className="fas fa-link"></i>
                </a>
              )}
              {project?.video && (
                <a
                  href={project?.video}
                  className="flex items-center justify-center w-10 h-10 animate-spin-slow hover:scale-105 bg-slate-600 hover:bg-blue-700 rounded-full text-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Video Link"
                >
                  <i className="fas fa-video"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Modal for Image Preview */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative p-4 dark:bg-black bg-white rounded-lg shadow-lg max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Selected Project Screenshot"
              className="rounded-lg max-h-[80vh] max-w-full"
            />
          </div>
        </div>
      )}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

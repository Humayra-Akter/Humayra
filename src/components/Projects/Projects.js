import React, { useState, useEffect } from "react";
import projects from "../../data/projects.json";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../Shared/ScrollToTop";

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

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

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
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-50"
        >
          <div className="blur-[106px] lg:h-56 h-44 bg-gradient-to-br to-purple-400 from-primary"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-white"></div>
        </div>
      </div>
      <h3 className="text-3xl mb-10 text-primary text-center">Projects</h3>
      <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
        {projects?.map((project, index) => (
          <div
            key={project.id}
            className="p-4 rounded-lg shadow-sm hover:shadow-md bg-black glass shadow-purple-200 text-white hover:shadow-accent border border-primary"
          >
            <div className="mb-4">
              {project.screenshots.length > 1 ? (
                <div className="flex overflow-x-auto space-x-4">
                  {project.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="h-40 w-full object-cover rounded-lg border border-rose-100 shadow-xl hover:scale-95 cursor-pointer"
                      onClick={() => openModal(screenshot)}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={project.screenshots[0]}
                  alt={project?.name}
                  className="mb-4 border border-rose-100 shadow-xl hover:scale-95 rounded-lg h-40 w-full object-cover cursor-pointer"
                  onClick={() => openModal(project.screenshots[0])}
                />
              )}
            </div>
            <h3 className="text-xl mb-2">{project.name}</h3>{" "}
            <p className="text-md text-slate-300 text-accent mb-2">
              <span>Category: </span>
              {project.category}
            </p>
            <p className="text-sm font-sans font-thin mb-4">
              {expandedDescriptions[project.id]
                ? project.description
                : `${project.description.slice(0, 100)}... `}
              {project.description.length > 100 && (
                <button
                  className="text-blue-300 hover:underline"
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
                  className="text-primary hover:scale-105 hover:font-bold bg-secondary px-2 py-1 rounded text-sm border"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <a
                href={project.github}
                className="flex items-center justify-center border w-10 h-10 animate-spin-slow hover:scale-105 hover:bg-blue-300 hover:text-black rounded-full bg-secondary"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                tooltip="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              {project?.liveDemo && (
                <a
                  href={project?.liveDemo}
                  className="flex items-center justify-center border w-10 h-10 animate-spin-slow hover:scale-105 hover:bg-blue-300 hover:text-black rounded-full bg-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                  tooltip="Live Demo"
                >
                  <i className="fas fa-link"></i>
                </a>
              )}
              {project?.video && (
                <a
                  href={project?.video}
                  className="flex items-center justify-center border w-10 h-10 animate-spin-slow hover:scale-105 hover:bg-blue-300 hover:text-black rounded-full bg-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Video Link"
                  tooltip="Video Link"
                >
                  <i className="fas fa-video"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 overflow-hidden"
          onClick={closeModal}
        >
          <div
            className="relative p-4 bg-white dark:bg-black rounded-lg shadow-lg max-w-full sm:max-w-3xl w-[90%] max-h-[90vh] overflow-auto"
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
              className="rounded-lg max-h-[80vh] w-full object-contain"
            />
          </div>
        </div>
      )}

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-50"
        >
          <div className="blur-[106px] lg:h-56 h-44 bg-gradient-to-br from-primary to-purple-400 dark:from-slate-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r  to-sky-300 from-cyan-400 dark:to-white"></div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Projects;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const homeProjects = [
  {
    id: 3,
    name: "PC Builder",
    description:
      "Create a PC Builder app using Next.js with SSG for product/category detail pages and SSR for the PC Builder page.",
    technologies: [
      "NEXTJS",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "NextAuth",
      "Node.js/Express ",
    ],
    screenshots: [
      "/project/pc-builder1.png",
      "/project/pc-builder2.png",
      "/project/pc-builder3.png",
      "/project/pc-builder4.png",
    ],
    video:
      "https://drive.google.com/file/d/1jWTzOmadK1whnSSFishYFu-hySMrcugK/view?usp=drive_link",
    liveDemo: "https://pc-builder-sage-pi.vercel.app",
    github: "https://github.com/Humayra-Akter/pc-builder",
    category: "Productivity Tool",
  },
  {
    id: 4,
    name: "Laundry Mate",
    description:
      "Laundry mate is a mobile app that transforms traditional laundry service management. Users can choose convenient time slots, Clear pricing structures, efficient Service Delivery.",
    technologies: [
      "React native expo",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "Firebase",
      "Node.js/Express ",
    ],
    screenshots: [
      "/project/laundry-mate1.png",
      "/project/laundry-mate2.png",
      "/project/laundry-mate3.png",
      "/project/laundry-mate4.png",
      "/project/laundry-mate5.png",
    ],
    video:
      "https://drive.google.com/file/d/14HGTF1TmVMq3SuOrOL01NFURsnQFCk2G/view?usp=drive_link",
    liveDemo:
      "https://drive.google.com/file/d/1nJpN_Z8nNqN0dFGOD3T6sb6ioSBKvY2L/view?usp=drive_link",
    github: "https://github.com/Humayra-Akter/laundry-mate-app",
    category: "Service-Based Mobile Application",
  },
  {
    id: 1,
    name: "Book Catalog",
    description:
      "This project is a full-stack Event Book Application where users can add book, search book with many criteria using redux. User can add book to wish =list and read later.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Firebase"],
    screenshots: [
      "/project/book-catalog1.png",
      "/project/book-catalog2.png",
      "/project/book-catalog3.png",
    ],
    video:
      "https://drive.google.com/file/d/1YtdSmiL8VVPTytpBx5KmsDu-C-4gf0JT/view?usp=drive_link",
    liveDemo: "https://comforting-swan-178107.netlify.app/",
    github: "https://github.com/Humayra-Akter/book-catalog",
    category: "Full-Stack Web Application",
  },
];

const HomeProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      style={{
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <h3 className="text-3xl mt-10 mb-8 text-primary text-center">
        Featured Projects
      </h3>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {homeProjects?.map((project, index) => (
          <div
            key={project.id}
            // data-aos="fade-right"
            className="p-4 rounded-lg shadow-sm hover:shadow-md bg-transparent shadow-purple-200 text-white hover:shadow-accent border border-primary"
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
                // rel="noopener noreferrer"
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
                  tooltip="Video Link"
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

      <div className="text-center mt-6 mb-16">
        <Link
          to="/projects"
          className="hover:bg-primary hover:text-secondary py-2 px-6 rounded-md bg-secondary text-primary border-2  hover:border-secondary transition-colors mt-4 inline-block"
        >
          See All
        </Link>
      </div>

      <hr />
    </div>
  );
};

export default HomeProjects;

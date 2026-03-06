import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "../Shared/ScrollToTop";
import { client } from "../../sanityClient";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 🌀 Initialize AOS + fetch data
  useEffect(() => {
    Aos.init({ duration: 1000 });
    fetchProjects();
  }, []);

  // 🔍 Fetch projects from Sanity
  const fetchProjects = async () => {
    const query = `*[_type == "project"] | order(_createdAt desc) {
      name,
      description,
      technologies,
      "screenshots": screenshots[].asset->url,
      video,
      liveDemo,
      github,
      category,
      type
    }`;
    try {
      const data = await client.fetch(query);
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // 🧩 Toggle modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // 🧠 Expand/collapse description
  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 🎛️ Unique filter values
  const categories = [
    "All",
    ...new Set(projects.map((p) => p.category).filter(Boolean)),
  ];
  const techStacks = [
    "All",
    ...new Set(projects.flatMap((p) => p.technologies || []).filter(Boolean)),
  ];

  // 🧩 Filter logic
  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.description?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesTech =
      selectedTech === "All" || (p.technologies || []).includes(selectedTech);
    return matchesSearch && matchesCategory && matchesTech;
  });

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative"
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 grid grid-cols-2 -space-x-52 opacity-40">
        <div className="blur-[106px] bg-gradient-to-br from-slate-200 to-purple-400"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-white"></div>
      </div>

      <h3 className="text-4xl mt-10 mb-8 text-primary text-center">Projects</h3>

      {/* 🧱 Projects Grid */}
      <div
        className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
      >
        {filteredProjects?.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="p-4 rounded-lg bg-white/5 backdrop-blur-md border border-slate-600/40 text-white shadow-lg hover:shadow-primary/30 transition-all"
          >
            <div className="mb-4">
              {project.screenshots?.length > 0 ? (
                <img
                  src={project.screenshots[0]}
                  alt={project.name}
                  onClick={() => openModal(project.screenshots[0])}
                  className="rounded-lg h-48 w-full object-cover cursor-pointer hover:scale-105 transition-transform border border-slate-700/30"
                />
              ) : (
                <div className="h-48 flex items-center justify-center text-slate-400 border border-dashed rounded-lg">
                  No Image
                </div>
              )}
            </div>

            <h3 className="text-xl mb-1">{project.name}</h3>
            <p className="text-sm text-slate-400 mb-2">
              <strong>Category:</strong> {project.category}
            </p>

            <p
              className="text-sm text-slate-300 mb-3"
              style={{ fontFamily: "'Esteban'" }}
            >
              {expandedDescriptions[project._id]
                ? project.description
                : `${project.description?.slice(0, 100)}... `}
              {project.description?.length > 100 && (
                <button
                  className="text-cyan-300 hover:underline"
                  onClick={() => toggleDescription(project._id)}
                >
                  {expandedDescriptions[project._id]
                    ? "Read Less"
                    : "Read More"}
                </button>
              )}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project?.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full border border-cyan-400 text-cyan-300 bg-cyan-400/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              {project?.github && (
                <a
                  href={project.github}
                  className="w-9 h-9 flex items-center justify-center border rounded-full hover:bg-cyan-400 hover:text-black transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              )}
              {project?.liveDemo && (
                <a
                  href={project.liveDemo}
                  className="w-9 h-9 flex items-center justify-center border rounded-full hover:bg-cyan-400 hover:text-black transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-link"></i>
                </a>
              )}

              {project?.video && (
                <a
                  href={project?.video}
                  className="flex items-center justify-center border w-10 h-10 animate-spin-slow hover:scale-105 hover:bg-blue-300 hover:text-black rounded-full glass"
                  tooltip="Video Link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Video Link"
                >
                  <i className="fas fa-video"></i>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🧩 Floating Filter Button */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col items-center">
        <motion.button
          onClick={() => setIsFilterOpen((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-gradient-to-r from-primary to-green-800 rounded-full shadow-md text-black backdrop-blur-md hover:shadow-primary transition-all"
        >
          <i className="fas fa-sliders-h text-xl"></i>
        </motion.button>

        {/* ⚙️ Filter Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              className="absolute right-14 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-5 w-64 mt-2"
            >
              {/* Search */}
              <div className="mb-4">
                <label
                  className="block text-slate-300 text-sm mb-1"
                  style={{ fontFamily: "'Esteban'" }}
                >
                  Search
                </label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Type to search..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-white focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Category */}
              <div className="mb-4">
                <label
                  className="block text-slate-300 text-sm mb-1"
                  style={{ fontFamily: "'Esteban'" }}
                >
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-white focus:ring-2 focus:ring-primary"
                >
                  {categories.map((cat, i) => (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Technology */}
              <div>
                <label
                  className="block text-slate-300 text-sm mb-1"
                  style={{ fontFamily: "'Esteban'" }}
                >
                  Technology
                </label>
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-white focus:ring-2 focus:ring-primary"
                >
                  {techStacks.map((tech, i) => (
                    <option key={i} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 🪟 Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-[60]"
          onClick={closeModal}
        >
          <div
            className="relative p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg max-w-4xl w-[90%] max-h-[90vh] overflow-auto"
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
              alt="Selected Screenshot"
              className="rounded-lg max-h-[80vh] w-full object-contain"
            />
          </div>
        </div>
      )}

      <ScrollToTop />
    </div>
  );
};

export default Projects;

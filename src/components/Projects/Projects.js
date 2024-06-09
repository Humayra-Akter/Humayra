import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import icon from "../../images/link.png";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = process.env.REACT_APP_GITTOKEN;

      if (!token) {
        throw new Error("GitHub token is not defined");
      }

      try {
        const response = await fetch(
          "https://api.github.com/users/Humayra-Akter/repos",
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setProjects(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "'Poetsen One', sans-serif",
      }}
    >
      <h2 className="text-2xl font-semibold text-primary dark:text-secondary mt-20 mb-8">
        My Projects
      </h2>
      <div className="grid lg:grid-cols-3 gap-8 mx-32">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="relative overflow-hidden bg-primary border-primary dark:border-secondary rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg opacity-25 pointer-events-none transform transition duration-500 hover:opacity-50"></div>
            <div className="p-6 z-10 relative">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-200">{project.description}</p>
              <div className="flex items-center justify-center">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-blue-100 transition-colors duration-300 flex gap-3"
                >
                  <img src={icon} className="w-5 h-5" alt="GitHub link" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

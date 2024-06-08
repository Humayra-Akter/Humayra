import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Humayra-Akter/repos"
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
      <h2 className="text-2xl font-semibold text-primary dark:text-se mt-20 mb-8">
        My Projects
      </h2>
      <div className="grid lg:grid-cols-3 gap-8 mx-32">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden bg-primary hover:bg-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-xl rounded-lg shadow-md"
            style={{
              transition: "transform 0.3s ease",
              transformOrigin: "center",
            }}
          >
            {" "}
            <div className="p-6 z-10 relative">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-200">{project.description}</p>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-blue-100 transition-colors duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

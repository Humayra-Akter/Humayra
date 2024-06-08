

import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="h-screen bg-white dark:bg-black flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center font-bold underline text-black dark:text-white">
          Hello world!
        </h1>
        <button
          onClick={toggleDarkMode}
          className="mt-4 px-4 py-2 bg-primary text-secondary rounded"
        >
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;

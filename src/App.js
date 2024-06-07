import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="h-screen dark:bg-black flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center font-bold underline text-black dark:text-white">
          Hello world!
        </h1>
        <button
          onClick={toggleDarkMode}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {darkMode ? "light" : "dark"}
        </button>
      </div>
    </div>
  );
}

export default App;

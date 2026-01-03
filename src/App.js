import { useState, useEffect } from "react";
import sun from "../src/images/sun.png";
import moon from "../src/images/moon.png";
import Navbar from "./components/Shared/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Shared/Error";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Certificate from "./components/Certificate/Certificate";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Publications from "./components/Publications/Publications";

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
    // <div className={`min-h-screen ${darkMode && "dark"}`}>
    <div>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        {/* <button
          onClick={toggleDarkMode}
          className="p-2 bg-primary text-secondary fixed bottom-5 left-5 rounded-full"
        >
          {darkMode ? (
            <img className="w-10 h-10" src={sun} alt="Light Mode" />
          ) : (
            <img className="w-10 h-10" src={moon} alt="Dark Mode" />
          )} 
        </button> */}
      </div>
    </div>
  );
}

export default App;

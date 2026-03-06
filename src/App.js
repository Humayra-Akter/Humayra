import Navbar from "./components/Shared/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Error from "./components/Shared/Error";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Certificate from "./components/Certificate/Certificate";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Publications from "./components/Publications/Publications";

function App() {
  return (
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
      </div>
    </div>
  );
}

export default App;

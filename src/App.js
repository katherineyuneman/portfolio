import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
      </Routes>
      <Routes>
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;

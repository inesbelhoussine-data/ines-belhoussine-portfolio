import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbarr.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Watch from "./components/Watch.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";

import ProjectDetail from "./pages/ProjectDetail.jsx";

import "./App.css";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Watch />
      <Journey />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projets/:slug"
          element={<ProjectDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbarr.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";

import ProjectDetail from "./pages/ProjectDetail.jsx";

import "./App.css";

// Gère le défilement lors des changements de page
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let frameId;
    let attempts = 0;

    function scrollToSection() {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      } else if (attempts < 20) {
        attempts += 1;
        frameId = requestAnimationFrame(scrollToSection);
      }
    }

    frameId = requestAnimationFrame(scrollToSection);

    return () => cancelAnimationFrame(frameId);
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />

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

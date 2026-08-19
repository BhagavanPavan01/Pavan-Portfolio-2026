import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import ProjectDetails from './components/ProjectDetails';
import ExperienceDetails from './components/ExperienceDetails';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // Determine if this is the very first time the app is loading (like a page reload)
    if (window.__isFirstAppLoad) {
      // Skip manual scrolling on initial reload so the browser can natively restore the user's scroll position!
      // The flag is disabled shortly after by the App component below.
      return;
    }

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Silently remove the hash from the URL without triggering a React Router re-render.
          // This ensures that if the user manually reloads the page later, the browser doesn't force a jump back to this old hash.
          setTimeout(() => {
            if (window.location.hash === hash) {
              window.history.replaceState(null, '', window.location.pathname + window.location.search);
            }
          }, 1000);
        }
      }, 100);
    } else {
      // Only force scroll to top if we navigate to Home internally without a hash.
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
};

// Global variable to track fresh page reloads
window.__isFirstAppLoad = true;

function App() {
  const location = useLocation();

  // Flag clears immediately after the initial app mount
  useEffect(() => {
    window.__isFirstAppLoad = false;
  }, []);

  // Dynamic SEO Page Titles
  useEffect(() => {
    const path = location.pathname;

    const pageTitle = "Bhagavan Pavan";
    let metaDesc = "Bhagavan Pavan is a Full Stack Developer specializing in React.js, Node.js, MongoDB, JavaScript, Python and modern web development.";

    if (path.startsWith('/project')) {
      metaDesc = "View the innovative full-stack projects built by Bhagavan Pavan using React, Node.js, and modern web technologies.";
    } else if (path.startsWith('/experience')) {
      metaDesc = "Explore the professional experience and technical workflow of Bhagavan Pavan, a MERN stack developer.";
    }

    document.title = pageTitle;

    // Apply the dynamic meta description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", metaDesc);
    }
  }, [location]);

  // Removed JS based pointer device detection to fix custom cursor rendering failures

  return (
    <div className="bg-transparent min-h-screen text-gray-100 font-sans selection:bg-purple-500/30 relative flex flex-col">
      <BackgroundEffects />
      <CustomCursor />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/experience/:id" element={<ExperienceDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

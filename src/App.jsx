import React from 'react';
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

function App() {
  // We only want the custom cursor on devices that support a fine pointer
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  return (
    <div className="bg-transparent min-h-screen text-gray-100 font-sans selection:bg-purple-500/30 relative">
      <BackgroundEffects />
      {isDesktop && <CustomCursor />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

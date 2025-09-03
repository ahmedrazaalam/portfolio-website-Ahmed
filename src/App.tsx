import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
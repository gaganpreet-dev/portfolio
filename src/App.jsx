import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="section-padding">
          <About />
        </section>
        <section id="skills" className="section-padding">
          <Skills />
        </section>
        <section id="projects" className="section-padding">
          <Projects />
        </section>
        <section id="contact" className="section-padding">
          <Contact />
        </section>
      </main>
      <footer className="footer" style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Gaganpreet Singh. Built with React & Cloud Focus.</p>
      </footer>
    </div >
  );
}

export default App;

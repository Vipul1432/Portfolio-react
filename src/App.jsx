import { useRef } from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSnap } from './hooks/useScrollSnap';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import './App.css';

const navItems = [
  { path: 'home', label: 'Home' },
  { path: 'about', label: 'About' },
  { path: 'skills', label: 'Skills' },
  { path: 'experience', label: 'Experience' },
  { path: 'education', label: 'Education' },
  { path: 'projects', label: 'Projects' },
  { path: 'contact', label: 'Contact' },
];

function App() {
  const mainContentRef = useRef(null);
  const { isDarkMode, toggleTheme } = useTheme();
  const { activeSection, scrollToSection } = useScrollSnap(mainContentRef);

  return (
    <div className="App">
      <Header
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <main ref={mainContentRef} className="pt-0">
        <div className="sections-container">
          <section id="home" className="section min-h-screen">
            <Home />
          </section>
          <section id="about" className="section min-h-screen">
            <About />
          </section>
          <section id="skills" className="section min-h-screen">
            <Skills />
          </section>
          <section id="experience" className="section min-h-screen">
            <Experience />
          </section>
          <section id="education" className="section min-h-screen">
            <Education />
          </section>
          <section id="projects" className="section min-h-screen">
            <Projects />
          </section>
          <section id="contact" className="section min-h-screen">
            <Contact />
          </section>
        </div>
      </main>

      <Chatbot />
    </div>
  );
}

export default App;

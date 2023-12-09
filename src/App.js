import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Resume from "./components/resume";
import Slideshow from "./components/Slideshow";
import Transitions from "./components/Transitions";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <br />
      <Certifications />
      <Slideshow />
      <Contact />
      <Transitions />
    </main>
  );
} 



                                         
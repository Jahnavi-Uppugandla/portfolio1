import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Assuming sections have IDs corresponding to links
      let currentActive = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjust this value as needed
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          currentActive = section.id; 
        }
      });

      setActivePage(currentActive);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set activePage initially
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Read me
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-red-300	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className={activePage === "projects" ? "nav-link active" : "nav-link"}>
            Past Work
          </a>
          <a href="#skills" className={activePage === "skills" ? "nav-link active" : "nav-link"}>
          Skills
          </a>
          <a href="#resume" className={activePage === "resume" ? "nav-link active" : "nav-link"}>
            Resume
          </a>
          <a href="#certifications" className={activePage === "certifications" ? "nav-link active" : "nav-link"}>
            Certifications
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
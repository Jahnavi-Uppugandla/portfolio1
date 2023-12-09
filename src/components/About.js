import React from "react";
import home_page from "../assets/home_page.jpg"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hello, I'm Jahnavi Uppugandla.
            {/* <br className="hidden lg:inline-block" />I love to build amazing
            apps. */}
          </h1>                         
          <p className="mb-8 leading-relaxed"> 
           I'm currently on an exhilarating journey, pursuing my masters in computer science, and 
          I'm passionate about applying my skills to tackle real-world challenges with innovative solutions.
          My enthusiasm for learning extends to embracing new technologies, and I'm on the lookout for 
           opportunities to further expand my knowledge.
          </p>
          <div className="flex justify-center">
            <a 
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact 
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={home_page}
          />
        </div>
      </div>
    </section>
  );
}
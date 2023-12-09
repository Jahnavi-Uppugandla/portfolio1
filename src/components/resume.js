import React from "react";
import { DocumentTextIcon } from "@heroicons/react/solid";
import { resume } from "../data"; // Replace this with your resume data

export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto text-center bg-gray-400 fade-enter">
        <DocumentTextIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Resume
        </h1>
        <div className="flex flex-wrap -m-4">
          {/* Example: Displaying work experiences */}
          <div className="p-4 md:w-1/2 w-full">
            <h2 className="text-black text-lg font-medium title-font mb-4">
              Intership Experience     
            </h2>
            {resume.workExperience.map((work) => (
              <div key={work.company} className="mb-4">
                <h3 className="text-red-900">{work.company}</h3>
                <p className="text-blue-600">
                  {work.title} | {work.duration}
                </p>
                <p className="text-black">{work.description}</p>
              </div>
            ))}
          </div>
          <div className="p-4 md:w-1/2 w-full">
            <h2 className="text-black text-lg font-medium title-font mb-4">
              Education
            </h2>
            {resume.education.map((edu) => (
              <div key={edu.institution} className="mb-4">
                <h3 className="text-blue-600">{edu.institution}</h3>
                <p className="text-black">
                  {edu.degree} | {edu.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

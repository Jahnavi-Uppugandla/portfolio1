// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
// import React from "react";
// import { skills } from "../data";

// export default function Skills() {
//   return (
//     <section id="skills">
//       <div className="container px-5 py-10 mx-auto">
//         <div className="text-center mb-20">
//           <ChipIcon className="w-10 inline-block mb-4" />
//           <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//             Skills &amp; Technologies
//           </h1>
//           <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
//             ipsa delectus eum quo voluptas aspernatur accusantium distinctio
//             possimus est.
//           </p>
//         </div>
//         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
//           {skills.map((skill) => (
//             <div key={skill} className="p-2 sm:w-1/2 w-full">
//               <div className="bg-gray-800 rounded flex p-4 h-full items-center">
//                 <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
//                 <span className="title-font font-medium text-white">
//                   {skill}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  // Define progress values for each skill (adjust these values as needed)
  const skillProgress = {
    JavaScript: 90,
    Python: 80,
    "Machine Learning": 70,
    C:70
  };

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-600 rounded p-4 h-full flex flex-col items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mb-4" />
                <span className="title-font font-medium text-white mb-2">
                  {skill}
                </span>
                {/* Progress bar */}
                <div className="w-full bg-gray-700 rounded">
                  <div
                    className="bg-green-500 text-xs leading-none py-1 text-center text-white rounded"
                    style={{ width: `${skillProgress[skill]}%` }}
                  >
                    {skillProgress[skill]}%
                  </div> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

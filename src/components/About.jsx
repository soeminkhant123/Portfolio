import {
  faBootstrap,
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function About() {
  return (
    <div id="about" className="w-[100%]">
      <div className="about mx-auto flex justify-between items-center gap-10">
        <div className="left">
          <img
            src="src/assets/—Pngtree—standing posture cartoon cartoon cartoon_3921518.png"
            alt=" "
          />
        </div>
        <div className="right flex flex-col justify-center items-center">
          <div className="text w-[100%]">
            <h1 className="text-2xl sm:text-4xl font-bold text-color">
              About Me
            </h1>
            <h1 className="pb-4 text-md sm:text-2xl">
              I'm a Designer and Developer with 1 years of experience.
            </h1>
            <p className="text-sm sm-text-md">
              My designs are not just aesthetically pleasing but also
              purposeful, aiming to evoke emotions and enhance user experiences.
            </p>
          </div>
          <div className="services w-[100%] py-4">
            <h2 className="text-sm sm:txt-md">Services i offer: </h2>
            <div className="text-xl sm:text-3xl flex flex-wrap items-center gap-2 py-2">
              <FontAwesomeIcon
                icon={faHtml5}
                className="text-orange-600 cursor-pointer transition all ease-in duration-200 hover:scale-[1.2]"
              />
              <FontAwesomeIcon
                icon={faCss3}
                className="text-blue-500 cursor-pointer transition all ease-in duration-200 hover:scale-[1.2]"
              />
              <img
                src="src/assets/tailwindcss_1.png"
                alt=" "
                className="w-[30px] sm:w-[35px] cursor-pointer transition all ease-in duration-200 hover:scale-[1.2]"
              />
              <FontAwesomeIcon
                icon={faBootstrap}
                className="text-purple-700 cursor-pointer transition all ease-in duration-200 hover:scale-[1.2]"
              />
              <FontAwesomeIcon
                icon={faSquareJs}
                className="text-yellow-500 cursor-pointer transition all ease-in duration-200 hover:scale-[1.2]"
              />
              <FontAwesomeIcon
                icon={faReact}
                className="text-blue-400 cursor-pointer transition all ease-in duration-200 hover:scale-[1.2]"
              />
              <FontAwesomeIcon
                icon={faGit}
                className="text-orange-600 cursor-pointer transition all ease-in duration-200 hover:scale-[1.2]"
              />
              <FontAwesomeIcon
                icon={faGithub}
                className="cursor-pointer transition all ease-in duration-200 hover:scale-[1.2]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

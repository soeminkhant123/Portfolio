import {
  faFacebook,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Banner() {
  return (
    <div id="banner" className="banner-container">
      <div className="banner scale flex justify-between h-[100%] mx-auto gap-10">
        <div className="left flex flex-col justify-center items-center w-[50%]">
          <div className="text">
            <h1 className="text-color text-2xl sm:text-4xl font-bold">
              Soe Min Khant
            </h1>
            <h2 className="text-xl sm:text-3xl">I am a Frontend Developer</h2>
            <p className="py-3 text-sm sm:text-md">
              Hello, I'm Soe Min Khant, a 17-year-old frontend developer with a
              passion for transforming lines of code into captivating digital
              experiences.
            </p>
          </div>
          <div className="buttons py-2 w-[100%] flex items-center gap-6">
            <a href="#contact">
              <button className="btn">Contact me</button>
            </a>
            <a href="#projects">
              <button className="transition all ease-in duration-200 border border-solid border-teal-600 rounded-full px-4 py-1 hover:bg-teal-600">
                My projects
              </button>
            </a>
          </div>
          <div className="icons w-[100%] flex gap-4 mt-4">
            <a href="https://github.com/soeminkhant123">
              <FontAwesomeIcon
                icon={faGithub}
                className="cursor-pointer transition all ease-in duration-200 hover:scale-[1.5]"
              />
            </a>
            <a href="https://www.tiktok.com/@soeminkhant421">
              <FontAwesomeIcon
                icon={faTiktok}
                className="cursor-pointer transition all ease-in duration-200 hover:scale-[1.5]"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61553176546468">
              <FontAwesomeIcon
                icon={faFacebook}
                className="cursor-pointer transition all ease-in duration-200 hover:scale-[1.5]"
              />
            </a>
          </div>
        </div>
        <div className="img-container flex justify-end items-center w-[50%]">
          <img
            src="src/assets/PngItem_3705866.png"
            alt=" "
            className="w-[400px] h-[50%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

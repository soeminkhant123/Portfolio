import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  // light dark mode
  function lightMode(light) {
    const sun = document.querySelector(".sun");
    const moon = document.querySelector(".moon");
    const inputs = document.querySelectorAll(".contact input");
    const textArea = document.querySelector(".text-area");
    const contactRight = document.querySelector(".contact .right");
    const footer = document.querySelector("#footer");

    if (light) {
      document.body.classList.remove("bg-gray-800");
      document.body.classList.add("bg-white");
      document.body.style.color = "black";
      textArea.style.borderColor = "black";
      contactRight.style.borderColor = "black";
      footer.style.color = "white";

      inputs.forEach((i) => {
        i.style.borderColor = "black";
      });

      sun.style.display = "none";
      moon.style.display = "inline-block";
    } else {
      document.body.classList.remove("bg-white");
      document.body.classList.add("bg-gray-800");
      document.body.style.color = "white";
      textArea.style.borderColor = "white";
      contactRight.style.borderColor = "white";
      footer.style.color = "white";

      inputs.forEach((i) => {
        i.style.borderColor = "white";
      });

      sun.style.display = "inline-block";
      moon.style.display = "none";
    }
  }
  return (
    <div id="header" className="fade py-4 w-[100%] absolute top-0 left-0">
      <div className="header mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl logo">SMK</h1>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <FontAwesomeIcon
              icon={faSun}
              className="sun text-xl cursor-pointer"
              onClick={() => {
                lightMode(true);
              }}
            />
            <FontAwesomeIcon
              icon={faMoon}
              className="moon text-xl cursor-pointer hidden"
              onClick={() => {
                lightMode(false);
              }}
            />
          </div>
          <a href="#contact">
            <button className="btn">Work with me</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

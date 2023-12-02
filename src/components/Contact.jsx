import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function toolBox() {
    const toolBox = document.querySelector(".tool-box");
    toolBox.style.bottom = "40px";

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      toolBox.style.bottom = "-40px";
    }, 3000);
  }

  return (
    <div id="contact" className="w-[100%]">
      <div className="contact pt-[100px] pb-[150px] mx-auto flex justify-between items-center">
        <div className="w-[50%] left">
          <h1 className="text-xs">Get in touch</h1>
          <h1 className="text-2xl sm:text-4xl lets-work font-bold text-color">
            Let's work together
          </h1>
        </div>
        <div className="right w-[50%] right flex flex-col gap-2 rounded-md px-2 py-4 border border-solid border-white">
          <input
            type="text"
            placeholder="Your name"
            className="bg-transparent border-b border-solid border-white py-1 px-2 outline-none"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <input
            type="text"
            placeholder="Your email"
            className="bg-transparent border-b border-solid border-white py-1 px-2 outline-none"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <textarea
            cols="30"
            rows="5"
            className="text-area bg-transparent border-b border-solid border-white py-1 px-2 outline-none"
            placeholder="Your message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          ></textarea>
          <button
            className="btn"
            onClick={() => {
              toolBox();
            }}
          >
            Send message
          </button>
        </div>
      </div>
      <div className="fixed bottom-[-40px] tool-box w-[100%] transition-all ease duration-1000">
        <h1 className="flex shadow-md items-center justify-center gap-2 rounded-md mx-auto w-[200px] text-white bg-teal-600 p-2">
          Message Send <FontAwesomeIcon icon={faPaperPlane} />
        </h1>
      </div>
    </div>
  );
}

export default Contact;

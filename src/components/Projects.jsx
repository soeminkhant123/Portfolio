import React from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      img: "src/assets/Screenshot (2).png",
      link: "https://github.com/soeminkhant123/Pizza-Shop",
    },
    {
      id: 2,
      img: "src/assets/Screenshot (3).png",
      link: "https://github.com/soeminkhant123/World-News",
    },
  ];

  return (
    <div id="projects" className="w-[100%] pb-[100px]">
      <div className="w-[70%] projects mx-auto flex flex-col justify-start items-start">
        <div className="py-4 flex flex-wrap justify-center items-center w-[100%] gap-4">
          <div className="left">
            <h1 className="text-color what-do font-bold">What i do</h1>
            <h2 className="freelance-text">
              I'm a Freelance Front-end Developer with over 1 years
            </h2>
            <a href="https://github.com/soeminkhant123">
              <button className="btn my-6">See my projects</button>
            </a>
          </div>
          {projects.map((p) => {
            return (
              <a href={p.link} key={p.id}>
                <img
                  className="transition all ease duration-300 transform hover:scale-90 w-[400px] h-[200px] border border-solid border-white object-cover rounded-md"
                  src={p.img}
                  alt=" "
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import react from "../iconos/react.svg";
import spring from "../iconos/spring.svg";
import docker from "../iconos/docker.svg";
import tailwind from "../iconos/tailwindcss.svg";

const Tecnologias = () => {
  return (
    <div
        id="Tecnologias"
        className="flex justify-center flex-col mx-auto mt-32"
      >
        <h2 className="font-bold text-lg mx-auto">Tecnologías</h2>

        <div id="Logos" className="flex flex-row gap-10 ">
          <div id="react" className="flex justify-center items-center flex-col">
            <img
              src={react}
              alt="React imagen"
              className="duration-300 transition-all h-16 w-16 delay-75 hover:scale-110 border-2 border-blue-700 rounded-full"
            />
            <p>React</p>
          </div>

          <div
            id="spring"
            className="flex justify-center items-center flex-col p-3"
          >
            <img
              src={spring}
              alt="Spring imagen"
              className="duration-300 transition-all h-16 w-16 delay-75 hover:scale-110 border-2 border-blue-700 rounded-full"
            />
            <p>Spring</p>
          </div>

          <div
            id="docker"
            className="flex justify-center items-center flex-col p-3"
          >
            <img
              src={docker}
              alt="docker imagen"
              className="duration-300 transition-all h-16 w-16 delay-75 hover:scale-110 border-2 border-blue-700 rounded-full"
            />
            <p>Docker</p>
          </div>

          <div
            id="tailwind"
            className="flex justify-center items-center flex-col p-3"
          >
            <img
              src={tailwind}
              alt="tailwind imagen"
              className="duration-300 transition-all h-16 w-16 delay-75 hover:scale-110 border-2 border-blue-700 rounded-full"
            />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
  )
}

export default Tecnologias;
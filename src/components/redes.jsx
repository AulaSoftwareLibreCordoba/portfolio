import React from "react";
import linkedin from "../iconos/linkedin.svg";
import XClaro from "../iconos/X.svg";
import instagram from "../iconos/instagram.svg";

const Redes = () => {
  return(
    <div id="redes" className="flex flex-row gap-10">
          <a href="https://www.example.com">
            <img
              src={linkedin}
              alt="Imagen"
              className="h-10 w-10 mt-10 duration-300 transition-all hover:scale-110"
            />
          </a>
          <a href="https://www.example.com">
            <img
              src={XClaro}
              alt="Imagen"
              className="h-10 w-10 mt-10 duration-300 transition-all hover:scale-110 "
            />
          </a>
          <a href="https://www.example.com">
            <img
              src={instagram}
              alt="Imagen"
              className="h-10 w-10 mt-10 duration-300 transition-all hover:scale-110"
            />
          </a>
        </div>
  )
}

export default Redes;
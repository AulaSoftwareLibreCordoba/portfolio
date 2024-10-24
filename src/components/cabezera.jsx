import React from "react";
import Redes from "./redes";
import imagenTuya from "../iconos/aulaImagen.png";

const Header = () => {
  return(
    <div
        id="ImagenYNombre"
        className="flex flex-col sm:flex-col items-center mx-auto"
      >
        <img
          src={imagenTuya}
          alt="Imagen"
          className="rounded-full w-40 h-40 hover:shadow-2xl transition-all"
        />
        <h1 className="ml-5 font-bold text-6xl">Aula de software libre</h1>
        <Redes/>
      </div>
  )
}

export default Header;
import React from "react";
import Redes from "./redes";
import imagenTuya from "../iconos/aulaImagen.png";

const Header = () => {
  return (
    <div
      id="ImagenYNombre"
      className="flex flex-col sm:flex-col items-center mx-auto "
    >
      <img
        src={imagenTuya}
        alt="Imagen"
        className="rounded-full w-40 h-40 hover:shadow-2xl transition-all"
      />
      <h1 className="ml-5 font-bold text-6xl">Aula de software libre</h1>
      <Redes />
      <a href="/download/cv.pdf" download="cv.pdf">
        <button className="mt-10 border-2 border-black rounded-full bg-black">
          <p className="ml-6 mr-6 mt-1 mb-1 font-bold text-lg text-white">
            Descargar CV
          </p>
        </button>
      </a>
    </div>
  );
};

export default Header;

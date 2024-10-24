import React from "react";
import github from "../iconos/github-light.svg";
import netliFy from "../iconos/netlify.svg";

const Card = ({
  urlImagen = "#",
  titulo = "titulo",
  texto = "Este es el texto",
  urlGithub = "https://www.example.com",
  despliegue = "https://www.example.com",
}) => {
  return (
    <div id="projectos" className="flex flex-col justify-center mx-auto">
      <h3 className="mx-auto font-bold text-xl">{titulo}</h3>
      <img src={urlImagen} alt="imagen del proyecto" className="" />
      <p className="mx-auto">{texto}</p>

      <a href={urlGithub}>
        <img src={github} alt="Imagen" className="h-10 w-10 mt-10 mx-auto" />
      </a>
      <a href={despliegue}>
        <img src={netliFy} alt="Imagen" className="h-10 w-10 mt-10 mx-auto" />
      </a>
    </div>
  );
};

export default Card;

import React from "react";
import Card from "./cards";
import imagenWebAula from "../iconos/webAula.png";

const Proyectos = () => {
  return (
    <div
      id="proyectos"
      className="flex flex-row justify-center mx-auto mt-32 gap-24 mb-32"
    >
      <Card
        titulo="Web"
        texto="Web del aula"
        urlImagen={imagenWebAula}
        despliegue="https://aulasoftwarelibrecordoba.netlify.app"
      />
      <Card urlImagen={imagenWebAula} />
      <Card urlImagen={imagenWebAula} />
    </div>
  );
};

export default Proyectos;

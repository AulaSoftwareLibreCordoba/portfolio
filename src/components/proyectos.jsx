import React from "react";
import Card from "./cards";

const Proyectos = () => {
  return (
    <div
        id="proyectos"
        className="flex flex-row justify-center mx-auto mt-32 gap-10 mb-32"
      >
        <Card />
        <Card />
        <Card />
      </div>
  )
}

export default Proyectos;
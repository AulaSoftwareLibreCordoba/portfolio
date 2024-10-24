import "./App.css";
import imagenTuya from "./iconos/aulaImagen.png";
import react from "./iconos/react.svg";
import spring from "./iconos/spring.svg";
import docker from "./iconos/docker.svg";
import tailwind from "./iconos/tailwindcss.svg";
import linkedin from "./iconos/linkedin.svg";
import XClaro from "./iconos/X.svg";
import instagram from "./iconos/instagram.svg";
import Card from "./components/cards";

function App() {
  return (
    <div
      id="General"
      className="flex flex-col justify-center mt-5 max-w-4xl mx-auto"
    >
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
      </div>

      <div id="QuienSoy" className="flex justify-center flex-col mx-auto mt-32">
        <h2 className="font-bold text-lg mx-auto">Quien soy</h2>
        <p class="mt-5 mb-5 text-center">
          Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore
          Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore
          Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore
          Ipsum Lore Ipsum Lore Ipsum
        </p>
      </div>

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

      <div
        id="proyectos"
        className="flex flex-row justify-center mx-auto mt-32 gap-10"
      >
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;

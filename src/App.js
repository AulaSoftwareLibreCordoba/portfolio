import "./App.css";
import imagenTuya from "./iconos/aulaImagen.png";
import react from "./iconos/react.svg";
import spring from "./iconos/spring.svg";

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
          className="rounded-full w-40 h-40 duration-100 delay-75 hover:scale-x-110 hover:scale-y-110 hover:shadow-2xl transition-all"
        />
        <h1 className="ml-5 font-bold text-6xl">Aula de software libre</h1>
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
          <div className="flex justify-center items-center flex-col border-2 border-blue-700 rounded-full">
            <img
              src={react}
              alt="Imagen"
              className="duration-300 transition-all h-16 w-28 delay-75 hover:scale-110"
            />
            <p>React</p>
          </div>

          <div className="flex justify-center items-center flex-col p-3">
            <img
              src={spring}
              alt="Imagen"
              className="duration-300 transition-all h-16 w-16 delay-75 hover:scale-110 border-2 border-blue-700 rounded-full"
            />
            <p>Spring</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

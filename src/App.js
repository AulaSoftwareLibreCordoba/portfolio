import "./App.css";
import imagenTuya from "./iconos/aulaImagen.png";
import react from "./iconos/react.png";
import spring from "./iconos/spring.png";

function App() {
  return (
    <div id="General" className="flex flex-col justify-center mt-5 bc-">
      <div
        id="ImagenYNombre"
        className="flex flex-col sm:flex-col items-center mx-auto"
      >
        <img
          src={imagenTuya}
          alt="Imagen"
          className="rounded-full w-40 h-40 duration-100 delay-75 hover:scale-x-110 hover:scale-y-110"
        />
        <h1 className="ml-5 font-bold text-6xl">Aula de software libre</h1>
      </div>

      <div
        id="QuienSoy"
        className="flex justify-center flex-col mx-auto mt-32 mr-[30%] ml-[30%]"
      >
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
        className="flex justify-center flex-col mx-auto mt-32 mr-[30%] ml-[30%]"
      >
        <h2 className="font-bold text-lg mx-auto">Tecnologías</h2>

        <div id="Logos" className="flex flex-row">
          <img
            src={react}
            alt="Imagen"
            className="duration-100 h-32 w-56 delay-75 hover:scale-x-110 hover:scale-y-110"
          />
          <img
            src={spring}
            alt="Imagen"
            className="duration-100 h-20 w-20 delay-75 hover:scale-x-110 hover:scale-y-110"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

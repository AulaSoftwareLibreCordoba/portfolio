import "./App.css";
import imagen from "./aulaImagen.png";

function App() {
  return (
    <div className="flex flex-col justify-center mt-5 ">
      <div className="flex flex-col sm:flex-row items-center mx-auto">
        <img
          src={imagen}
          alt="Imagen del aula"
          className="rounded-full w-40 h-40 duration-100 delay-75 hover:scale-x-110 hover:scale-y-110"
        />
        <h1 className="ml-5 font-bold text-2xl">Aula de software libre</h1>
      </div>

      <div className="flex flex-col justify-center mt-20">
        <h2 className="font-bold text-lg ">Quienes somos</h2>
        <p className="mt-5 mb-5">
          En el Aula de Software Libre de la FP de Córdoba, nos dedicamos a
          fomentar el uso y desarrollo de herramientas tecnológicas basadas en
          software libre y de código abierto. Nuestro objetivo es proporcionar
          una formación práctica y accesible en tecnologías que permiten la
          colaboración y la innovación sin las restricciones de licencias
          privativas.
        </p>
        <p className="mt-5 mb-5">
          A través de proyectos colaborativos, aprendemos a utilizar sistemas,
          tecnologías y aplicaciones libres para el desarrollo de software, la
          gestión de servidores, y el diseño de soluciones tecnológicas. También
          promovemos una filosofía de aprendizaje colectivo, donde el
          intercambio de conocimientos y la contribución a la comunidad son
          esenciales.
        </p>
        <p className="mt-5 mb-5">
          Fomentamos el espíritu emprendedor y la autonomía técnica, capacitando
          a los estudiantes para resolver problemas tecnológicos con soluciones
          abiertas y escalables, siempre respetando los principios de libertad,
          privacidad y cooperación que definen al software libre.
        </p>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/cabezera";
import QuienSoy from "./components/quienSoy";
import Proyectos from "./components/proyectos";
import Tecnologias from "./components/tecnologias";
import { useState } from "react";
import Contacto from "./components/contacto";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const changeMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div
      id="General"
      className="flex flex-col justify-center mt-5 max-w-4xl mx-auto font-serif dark:text-white"
    >
      <div>
        <button onClick={changeMode}>{darkMode ? "oscuro" : "claro"}</button>
      </div>
      <Header />

      <QuienSoy />

      <Tecnologias />

      <Proyectos />

      <Contacto />
    </div>
  );
}

export default App;

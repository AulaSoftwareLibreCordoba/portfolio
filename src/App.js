import "./App.css";
import Header from "./components/cabezera";
import QuienSoy from "./components/quienSoy";
import Proyectos from "./components/proyectos";
import Tecnologias from "./components/tecnologias";

function App() {
  return (
    <div
      id="General"
      className="flex flex-col justify-center mt-5 max-w-4xl mx-auto font-serif"
    >
      
      <Header/>

      <QuienSoy/>

      <Tecnologias/>

      <Proyectos/>
      
    </div>
  );
}

export default App;

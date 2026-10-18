import "./App.css";
import HeaderClase from "./components/HeaderClase";
import ObjetivosCard from "./components/ObjetivosCard";
import ActividadItem from "./components/ActividadItem";

function App() {
  return (
    <>
      <HeaderClase
        tituloTema="Las Capas de la Tierra"
        nombreDocente="César Augusto Díaz Ramírez"
        horario="Sábado 8:00 AM"
      />

      <ObjetivosCard
        competencia="Identificar las principales capas internas de la Tierra."
        indicadorLogro="Describe las características de la corteza, manto y núcleo."
      />

      <ActividadItem actividad="Investigar la Corteza Terrestre" />

      <ActividadItem actividad="Analizar el Manto Terrestre" />

      <ActividadItem actividad="Estudiar el Núcleo de la Tierra" />
    </>
  );
}

export default App;
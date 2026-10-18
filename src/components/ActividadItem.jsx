import { useState } from "react";

function ActividadItem({ actividad }) {
  const [completada, setCompletada] = useState(false);

  return (
    <div className="actividad">
      <h3>{actividad}</h3>

      <p>
        Estado:
        {completada ? " ✅ Completada" : " ⏳ Pendiente"}
      </p>

      <button onClick={() => setCompletada(!completada)}>
        Cambiar estado
      </button>
    </div>
  );
}

export default ActividadItem;
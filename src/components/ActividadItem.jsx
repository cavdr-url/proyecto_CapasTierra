import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ActividadItem() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);

  // .env
  const NOCODB_URL = import.meta.env.VITE_NOCODB_URL;
  const API_TOKEN = import.meta.env.VITE_NOCODB_API_KEY;

  useEffect(() => {
    const cargarActividades = async () => {
      try {
        const res = await fetch(NOCODB_URL, {
          method: "GET",
          headers: {
            "xc-token": API_TOKEN,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error(`Error al cargar actividades: ${res.status}`);
        }

        const datos = await res.json();
        setActividades(datos.records || []);
      } catch (error) {
        console.error(error);
      } finally {
        setCargando(false);
      }
    };

    cargarActividades();
  }, []);

  if (cargando) {
    return <p>Cargando actividades...</p>;
  }

  return (
    <>
      {actividades.map((item, index) => {
        const campos = item.fields || item;

        return (
          <motion.div
            key={index}
            className="actividad"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3>{campos.Actividad}</h3>

            <p>
              Estado:
              {campos.Estado === "Completada"
                ? " ✅ Completada"
                : " ⏳ Pendiente"}
            </p>
          </motion.div>
        );
      })}
    </>
  );
}

export default ActividadItem;
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ActividadItem() {
  const [actividades, setActividades] = useState([]);
  const [cargando, setCargando] = useState(true);

  const NOCODB_URL =
    "https://app.nocodb.com/api/v3/data/pqx60qbgr3kkp2j/m27d22l2k00nhz7/records";

  const API_TOKEN =
    "nc_pat_Ph7DlnLFYRsRn0bpN47ytXfhMmAHlX6hW3xFviU4";

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
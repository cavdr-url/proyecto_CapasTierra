import { motion } from "framer-motion";

function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <motion.header
      className="header"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h1>{tituloTema}</h1>

      <p>
        <strong>Docente:</strong> {nombreDocente}
      </p>

      <p>
        <strong>Horario:</strong> {horario}
      </p>
    </motion.header>
  );
}

export default HeaderClase;
import { motion } from "framer-motion";

function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <motion.div
      className="card"
      whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.2 }}
    >
      <h2>Competencia</h2>
      <p>{competencia}</p>

      <h3>Indicador de logro</h3>
      <p>{indicadorLogro}</p>
    </motion.div>
  );
}

export default ObjetivosCard;
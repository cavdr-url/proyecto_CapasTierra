function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <div className="card">
      <h2>Competencia</h2>
      <p>{competencia}</p>

      <h3>Indicador de logro</h3>
      <p>{indicadorLogro}</p>
    </div>
  );
}

export default ObjetivosCard;
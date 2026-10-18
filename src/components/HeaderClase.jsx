function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <header className="header">
      <h1>{tituloTema}</h1>

      <p>
        <strong>Docente:</strong> {nombreDocente}
      </p>

      <p>
        <strong>Horario:</strong> {horario}
      </p>
    </header>
  );
}

export default HeaderClase;
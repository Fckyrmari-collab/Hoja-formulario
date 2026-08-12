function VistaPrevia({ datos, academico, experiencia, anterior }) {
  const campo = (etiqueta, valor) => (
    <p><strong>{etiqueta}:</strong> {valor || "No registrado"}</p>
  );

  // Normalizar datos de cursos (puede venir en datos.cursos o academico.cursos)
  const listaCursos = datos?.cursos || academico?.cursos || [];

  // Normalizar datos de experiencias (puede venir en datos.experiencias o en props)
  const listaExperiencias =
    datos?.experiencias ||
    (Array.isArray(experiencia) ? experiencia : experiencia?.empresa ? [experiencia] : []);

  return (
    <div className="formulario vista-previa">
      <h2>Vista Previa de la Hoja de Vida</h2>

      {/* DATOS PERSONALES */}
      <div className="preview-seccion">
        <h3>Datos personales</h3>
        {campo("Nombre", datos?.nombre)}
        {campo("Edad", datos?.edad)}
        {campo("Ciudad", datos?.ciudad)}
        {campo("Correo", datos?.correo)}
        {campo("Programa", datos?.programa)}
        {campo("Ficha", datos?.ficha)}
        {campo("Jornada", datos?.jornada)}
      </div>

      {/* INFORMACIÓN ACADÉMICA Y CURSOS */}
      <div className="preview-seccion">
        <h3>Información académica</h3>
        {academico?.nivel && campo("Nivel", academico.nivel)}
        {academico?.titulo && campo("Título", academico.titulo)}
        {academico?.institucion && campo("Institución", academico.institucion)}
        {academico?.graduacion && campo("Año de graduación", academico.graduacion)}

        <h4>Cursos Realizados</h4>
        {listaCursos.length === 0 ? (
          <p>No se registraron cursos.</p>
        ) : typeof listaCursos === "string" ? (
          <p>{listaCursos}</p>
        ) : (
          <ul>
            {listaCursos.map((curso, indice) => (
              <li key={indice}>{curso}</li>
            ))}
          </ul>
        )}
      </div>

      {/* EXPERIENCIA LABORAL */}
      <div className="preview-seccion">
        <h3>Experiencia Laboral</h3>
        {listaExperiencias.length === 0 ? (
          <p>No se registró experiencia laboral.</p>
        ) : (
          listaExperiencias.map((exp, indice) => (
            <div className="experiencia-preview" key={indice}>
              <h4>{exp.cargo || "Cargo no registrado"} - {exp.empresa || "Empresa no registrada"}</h4>
              {campo("Tiempo de experiencia", exp.tiempo || exp.experiencia)}
              {campo("Funciones", exp.funciones)}
              {campo("Habilidades", exp.habilidades)}
            </div>
          ))
        )}
      </div>

      <div className="botones">
        <button type="button" onClick={anterior}>
          Anterior
        </button>
        <button type="button" onClick={() => alert("¡Registro guardado con éxito!")}>
          Confirmar Registro
        </button>
      </div>
    </div>
  );
}

export default VistaPrevia;
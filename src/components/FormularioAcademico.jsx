import { useState } from "react";

function FormularioAcademico({ datos, setDatos, anterior, siguiente }) {
  // Estado local solo para capturar el texto del nuevo curso a agregar
  const [nuevoCurso, setNuevoCurso] = useState("");

  // Función para actualizar campos sencillos de datos académicos (nivel, título, institucion, etc.)
  const actualizar = (campo, valor) => {
    setDatos((prev) => ({
      ...prev,
      [campo]: valor
    }));
  };

  // Función para agregar un curso al arreglo dinámico
  const agregarCurso = () => {
    if (nuevoCurso.trim() === "") {
      alert("Por favor ingrese el nombre del curso.");
      return;
    }

    setDatos((prev) => ({
      ...prev,
      cursos: [...(prev.cursos || []), nuevoCurso.trim()]
    }));

    setNuevoCurso("");
  };

  // Función para eliminar un curso del arreglo por su índice
  const eliminarCurso = (indice) => {
    setDatos((prev) => ({
      ...prev,
      cursos: (prev.cursos || []).filter((_, i) => i !== indice)
    }));
  };

  const continuar = (e) => {
    e.preventDefault();
   
    if (
        datos.nivel.trim() === "" ||
        datos.titulo.trim() === "" ||
        datos.institucion.trim() === "" ||
        datos.graduacion.trim() === ""
    ) {
        alert("Por favor, complete todos los campos académicos antes de continuar.");
        return;
    }
     
    if (datos.cursos.length === 0) {

        alert("Debe agregar al menos un curso.");
        return;

    }


    if (datos.experiencias.length === 0) {

        alert("Debe agregar al menos una experiencia laboral.");
        return;

    }


    siguiente();
};

  return (
    <div className="formulario">
      <h2>Información Académica</h2>

      <form onSubmit={continuar}>
        <div className="grupo">
          <label>Nivel Educativo</label>
          <input
            type="text"
            placeholder="Ejemplo: Tecnólogo, Profesional..."
            value={datos.nivel || ""}
            onChange={(e) => actualizar("nivel", e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Título Obtenido / En Curso</label>
          <input
            type="text"
            placeholder="Ejemplo: Analista y Desarrollador de Software"
            value={datos.titulo || ""}
            onChange={(e) => actualizar("titulo", e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Institución</label>
          <input
            type="text"
            placeholder="Nombre de la institución"
            value={datos.institucion || ""}
            onChange={(e) => actualizar("institucion", e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Año de Graduación</label>
          <input
            type="text"
            placeholder="Ejemplo: 2025"
            value={datos.graduacion || ""}
            onChange={(e) => actualizar("graduacion", e.target.value)}
          />
        </div>

        {/* SECCIÓN DINÁMICA DE CURSOS */}
        <div className="grupo completo">
          <label>Cursos Realizados</label>
          <div className="curso-agregar">
            <input
              type="text"
              placeholder="Nombre del curso"
              value={nuevoCurso}
              onChange={(e) => setNuevoCurso(e.target.value)}
            />
            <button type="button" onClick={agregarCurso}>
              + Agregar Curso
            </button>
          </div>
        </div>

        {/* LISTADO DE CURSOS AGREGADOS */}
        <div className="lista-cursos">
          {datos.cursos && datos.cursos.length > 0 ? (
            datos.cursos.map((curso, indice) => (
              <div className="curso-item" key={indice}>
                <span>✓ {curso}</span>
                <button
                  type="button"
                  onClick={() => eliminarCurso(indice)}
                >
                  Eliminar
                </button>
              </div>
            ))
          ) : (
            <p className="sin-cursos">No has agregado cursos aún.</p>
          )}
        </div>

        <div className="botones">
          <button type="button" onClick={anterior}>
            Anterior
          </button>
          <button type="submit">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioAcademico;
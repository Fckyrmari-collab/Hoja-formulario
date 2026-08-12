import { useState } from "react";

function FormularioExperiencia({ datos, setDatos, anterior, siguiente }) {
  // Estados temporales para los campos del formulario
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [funciones, setFunciones] = useState("");
  const [habilidades, setHabilidades] = useState("");

  // Agregar una nueva experiencia a la lista compartida
  const agregarExperiencia = () => {
    if (
      empresa.trim() === "" ||
      cargo.trim() === "" ||
      tiempo.trim() === "" ||
      funciones.trim() === "" ||
      habilidades.trim() === ""
    ) {
      alert("Por favor complete todos los campos de la experiencia.");
      return;
    }

    const nuevaExperiencia = {
      empresa: empresa.trim(),
      cargo: cargo.trim(),
      tiempo: tiempo.trim(),
      funciones: funciones.trim(),
      habilidades: habilidades.trim()
    };

    setDatos((prev) => ({
      ...prev,
      experiencias: [...(prev.experiencias || []), nuevaExperiencia]
    }));

    // Limpiar inputs
    setEmpresa("");
    setCargo("");
    setTiempo("");
    setFunciones("");
    setHabilidades("");
  };

  // Eliminar una experiencia seleccionada de la lista
  const eliminarExperiencia = (indice) => {
    const nuevasExperiencias = datos.experiencias.filter((_, i) => i !== indice);
    setDatos((prev) => ({
      ...prev,
      experiencias: nuevasExperiencias
    }));
  };

  const continuar = (e) => {
    e.preventDefault();
    siguiente();
  };

  return (
    <div className="formulario">
      <h2>Experiencia Laboral</h2>

      <form onSubmit={continuar}>
        <div className="grupo">
          <label>Empresa</label>
          <input
            type="text"
            placeholder="Ingrese la empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Cargo</label>
          <input
            type="text"
            placeholder="Ingrese el cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Tiempo de Experiencia</label>
          <input
            type="text"
            placeholder="Ejemplo: 1 año"
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Funciones Desempeñadas</label>
          <textarea
            placeholder="Escriba las funciones desempeñadas"
            value={funciones}
            onChange={(e) => setFunciones(e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Habilidades Técnicas</label>
          <input
            type="text"
            placeholder="Ejemplo: HTML, CSS, JavaScript, React..."
            value={habilidades}
            onChange={(e) => setHabilidades(e.target.value)}
          />
        </div>

        <button type="button" onClick={agregarExperiencia}>
          + Agregar Experiencia
        </button>

        {/* Lista de experiencias guardadas */}
        <div className="lista-experiencias">
          <h3>Experiencias Registradas</h3>
          {!datos.experiencias || datos.experiencias.length === 0 ? (
            <p className="sin-experiencias">No hay experiencias registradas.</p>
          ) : (
            datos.experiencias.map((exp, indice) => (
              <div className="experiencia-item" key={indice}>
                <div>
                  <h4>{exp.cargo} - {exp.empresa}</h4>
                  <p><strong>Tiempo:</strong> {exp.tiempo}</p>
                  <p><strong>Funciones:</strong> {exp.funciones}</p>
                  <p><strong>Habilidades:</strong> {exp.habilidades}</p>
                </div>
                <button
                  type="button"
                  onClick={() => eliminarExperiencia(indice)}
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>

        <div className="botones">
          <button type="button" onClick={anterior}>
            Anterior
          </button>
          <button type="submit">
            Vista Previa
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioExperiencia;
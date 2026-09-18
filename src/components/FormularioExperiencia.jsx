import { useState } from "react";

function FormularioExperiencia({
    datos,
    setDatos,
    anterior,
    siguiente
}) {

    

    const [empresa, setEmpresa] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [cargo, setCargo] = useState("");

    

    const [nuevaHabilidad, setNuevaHabilidad] = useState("");

    

    const [habilidades, setHabilidades] = useState([]);

  

    const [nuevaFuncion, setNuevaFuncion] = useState("");

    

    const [funciones, setFunciones] = useState([]);


   

    const agregarHabilidad = () => {

        if (nuevaHabilidad.trim() === "") {
            return;
        }

        setHabilidades([
            ...habilidades,
            nuevaHabilidad
        ]);

        setNuevaHabilidad("");
    };


   

    const eliminarHabilidad = (indice) => {

        setHabilidades(
            habilidades.filter(
                (_, i) => i !== indice
            )
        );
    };


    // AGREGAR FUNCIÓN

    const agregarFuncion = () => {

        if (nuevaFuncion.trim() === "") {
            return;
        }

        setFunciones([
            ...funciones,
            nuevaFuncion
        ]);

        setNuevaFuncion("");
    };


    // ELIMINAR FUNCIÓN

    const eliminarFuncion = (indice) => {

        setFunciones(
            funciones.filter(
                (_, i) => i !== indice
            )
        );
    };


    // AGREGAR EXPERIENCIA COMPLETA

    const agregarExperiencia = () => {

        if (
            empresa.trim() === "" ||
            cargo.trim() === ""
        ) {
            alert("Ingrese la empresa y el cargo");
            return;
        }

        const nuevaExperiencia = {

            empresa: empresa,

            cargo: cargo,

            tiempo: experiencia,

            habilidades: habilidades,

            funciones: funciones

        };


        setDatos({

            ...datos,

            experiencias: [

                ...datos.experiencias,

                nuevaExperiencia

            ]

        });


        // Limpiar todo para una nueva experiencia

        setEmpresa("");

        setExperiencia("");

        setCargo("");

        setHabilidades([]);

        setFunciones([]);

    };


    // ELIMINAR EXPERIENCIA COMPLETA

    const eliminarExperiencia = (indice) => {

        setDatos({

            ...datos,

            experiencias: datos.experiencias.filter(
                (_, i) => i !== indice
            )

        });

    };


    return (

        <div className="formulario">

            <h2>Experiencia Laboral</h2>


            

            <div className="grupo">

                <label>Empresa</label>

                <input
                    type="text"
                    placeholder="Ingrese la empresa"
                    value={empresa}
                    onChange={(e) =>
                        setEmpresa(e.target.value)
                    }
                />

            </div>


        

            <div className="grupo">

                <label>Tiempo de Experiencia</label>

                <input
                    type="text"
                    placeholder="Ejemplo: 1 año"
                    value={experiencia}
                    onChange={(e) =>
                        setExperiencia(e.target.value)
                    }
                />

            </div>


            

            <div className="grupo">

                <label>Cargo</label>

                <input
                    type="text"
                    placeholder="Ingrese el cargo"
                    value={cargo}
                    onChange={(e) =>
                        setCargo(e.target.value)
                    }
                />

            </div>


            
            <div className="grupo">

                <label>Habilidades Técnicas</label>

                <div className="curso-agregar">

                    <input
                        type="text"
                        placeholder="Ejemplo: React"
                        value={nuevaHabilidad}
                        onChange={(e) =>
                            setNuevaHabilidad(e.target.value)
                        }
                    />

                    <button
                        type="button"
                        onClick={agregarHabilidad}
                    >
                        + Agregar
                    </button>

                </div>


                <div className="lista-cursos">

                    {habilidades.map(
                        (habilidad, indice) => (

                            <div
                                className="curso-item"
                                key={indice}
                            >

                                <span>
                                    {habilidad}
                                </span>

                                <button
                                    type="button"
                                    onClick={() =>
                                        eliminarHabilidad(indice)
                                    }
                                >
                                    Eliminar
                                </button>

                            </div>

                        )
                    )}

                </div>

            </div>


            

            <div className="grupo">

                <label>Funciones Desempeñadas</label>

                <div className="curso-agregar">

                    <input
                        type="text"
                        placeholder="Ejemplo: Desarrollo de páginas web"
                        value={nuevaFuncion}
                        onChange={(e) =>
                            setNuevaFuncion(e.target.value)
                        }
                    />

                    <button
                        type="button"
                        onClick={agregarFuncion}
                    >
                        + Agregar
                    </button>

                </div>


                <div className="lista-cursos">

                    {funciones.map(
                        (funcion, indice) => (

                            <div
                                className="curso-item"
                                key={indice}
                            >

                                <span>
                                    {funcion}
                                </span>

                                <button
                                    type="button"
                                    onClick={() =>
                                        eliminarFuncion(indice)
                                    }
                                >
                                    Eliminar
                                </button>

                            </div>

                        )
                    )}

                </div>

            </div>


           

            <div className="botones">

                <button
                    type="button"
                    onClick={agregarExperiencia}
                >
                    + Agregar experiencia
                </button>

            </div>


           

            <div className="lista-experiencias">

                <h3>Experiencias Registradas</h3>


                {datos.experiencias.length === 0 ? (

                    <p>
                        No hay experiencias registradas.
                    </p>

                ) : (

                    datos.experiencias.map(
                        (exp, indice) => (

                            <div
                                className="experiencia-item"
                                key={indice}
                            >

                                <h4>
                                    {exp.cargo}
                                </h4>

                                <p>
                                    <strong>
                                        Empresa:
                                    </strong>{" "}
                                    {exp.empresa}
                                </p>

                                <p>
                                    <strong>
                                        Tiempo:
                                    </strong>{" "}
                                    {exp.tiempo}
                                </p>


                                <p>
                                    <strong>
                                        Habilidades:
                                    </strong>
                                </p>

                                <ul>

                                    {exp.habilidades.map(
                                        (habilidad, i) => (
                                            <li key={i}>
                                                {habilidad}
                                            </li>
                                        )
                                    )}

                                </ul>


                                <p>
                                    <strong>
                                        Funciones:
                                    </strong>
                                </p>

                                <ul>

                                    {exp.funciones.map(
                                        (funcion, i) => (
                                            <li key={i}>
                                                {funcion}
                                            </li>
                                        )
                                    )}

                                </ul>
                        

                                <button
                                    type="button"
                                    onClick={() =>
                                        eliminarExperiencia(indice)
                                    }
                                >
                                    Eliminar experiencia
                                </button>

                            </div>

                        )
                    )

                )}

            </div>


            

            <div className="botones">

                <button
                    type="button"
                    onClick={anterior}
                >
                    Anterior
                </button>

                <button
                    type="button"
                    onClick={siguiente}
                >
                    Vista Previa
                </button>

            </div>

        </div>

    );
}

export default FormularioExperiencia;
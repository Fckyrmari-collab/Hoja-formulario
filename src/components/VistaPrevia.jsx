function VistaPrevia({ datos, academico, experiencia, anterior,guardarhojavida }) {

    const campo = (etiqueta, valor) => (
        <p>
            <strong>{etiqueta}:</strong>{" "}
            {valor || "No registrado"}
        </p>
    );


    // Normalizar datos de cursos
    const listaCursos =
        datos?.cursos || academico?.cursos || [];


    // Normalizar datos de experiencias
    const listaExperiencias =
        datos?.experiencias ||
        (
            Array.isArray(experiencia)
                ? experiencia
                : experiencia?.empresa
                    ? [experiencia]
                    : []
        );


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


          
            {/* INFORMACIÓN ACADÉMICA */}
            
            <div className="preview-seccion">

                <h3>Información académica</h3>

                {academico?.nivel &&
                    campo("Nivel", academico.nivel)
                }

                {academico?.titulo &&
                    campo("Título", academico.titulo)
                }

                {academico?.institucion &&
                    campo("Institución", academico.institucion)
                }

                {academico?.graduacion &&
                    campo(
                        "Año de graduación",
                        academico.graduacion
                    )
                }


                {/* CURSOS */}

                <h4>Cursos Realizados</h4>

                {listaCursos.length === 0 ? (

                    <p>
                        No se registraron cursos.
                    </p>

                ) : typeof listaCursos === "string" ? (

                    <p>
                        {listaCursos}
                    </p>

                ) : (

                    <ul>

                        {listaCursos.map(
                            (curso, indice) => (

                                <li key={indice}>
                                    {curso}
                                </li>

                            )
                        )}

                    </ul>

                )}

            </div>


            {/* EXPERIENCIA LABORAL */}
           

            <div className="preview-seccion">

                <h3>Experiencia Laboral</h3>


                {listaExperiencias.length === 0 ? (

                    <p>
                        No se registró experiencia laboral.
                    </p>

                ) : (

                    listaExperiencias.map(
                        (exp, indice) => (

                            <div
                                className="experiencia-preview"
                                key={indice}
                            >

                                {/* CARGO Y EMPRESA */}

                                <h4>
                                    {exp.cargo ||
                                        "Cargo no registrado"}

                                    {" - "}

                                    {exp.empresa ||
                                        "Empresa no registrada"}
                                </h4>


                                {/* TIEMPO */}

                                {campo(
                                    "Tiempo de experiencia",
                                    exp.tiempo ||
                                    exp.experiencia
                                )}


                                {/* HABILIDADES */}

                                <p>
                                    <strong>
                                        Habilidades Técnicas:
                                    </strong>
                                </p>


                                {Array.isArray(
                                    exp.habilidades
                                ) ? (

                                    exp.habilidades.length === 0 ? (

                                        <p>
                                            No se registraron
                                            habilidades.
                                        </p>

                                    ) : (

                                        <ul>

                                            {exp.habilidades.map(
                                                (
                                                    habilidad,
                                                    i
                                                ) => (

                                                    <li key={i}>
                                                        {habilidad}
                                                    </li>

                                                )
                                            )}

                                        </ul>

                                    )

                                ) : (

                                    campo(
                                        "Habilidades",
                                        exp.habilidades
                                    )

                                )}


                                {/* FUNCIONES */}

                                <p>
                                    <strong>
                                        Funciones Desempeñadas:
                                    </strong>
                                </p>


                                {Array.isArray(
                                    exp.funciones
                                ) ? (

                                    exp.funciones.length === 0 ? (

                                        <p>
                                            No se registraron
                                            funciones.
                                        </p>

                                    ) : (

                                        <ul>

                                            {exp.funciones.map(
                                                (
                                                    funcion,
                                                    i
                                                ) => (

                                                    <li key={i}>
                                                        {funcion}
                                                    </li>

                                                )
                                            )}

                                        </ul>

                                    )

                                ) : (

                                    campo(
                                        "Funciones",
                                        exp.funciones
                                    )

                                )}

                            </div>

                        )
                    )

                )}

            </div>


            {/* BOTONES */}
         

            <div className="botones">

                <button
                    type="button"
                    onClick={anterior}
                >
                    Anterior
                </button>


                <button
                    type="button"
                    onClick={guardarhojavida}
                >
                    Confirmar Registro
                </button>

            </div>

        </div>

    );
}


export default VistaPrevia;
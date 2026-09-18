import { useState } from "react";
import Header from "./components/Header.jsx";
import FormularioDatos from "./components/FormularioDatos.jsx";
import Footer from "./components/Footer.jsx";
import FormularioAcademico from "./components/FormularioAcademico.jsx";
import FormularioExperiencia from "./components/FormularioExperiencia.jsx";
import VistaPrevia from "./components/VistaPrevia.jsx";
import "./App.css";


function App() {
  const [paso, setPaso] = useState(1);

  const [datos, setDatos] = useState({
    foto: null,
    nombre: "",
    edad: "",
    ciudad: "",
    correo: "",
    programa: "",
    ficha: "",
    jornada: "Mañana",
    cursos: [],
    experiencias: []
  });

  //conecta react con flask
  const guardarhojavida = async () => {

    try {

      const datosapi = {
        nombre: datos.nombre,
        edad: datos.edad,
        ciudad: datos.ciudad,
        correo: datos.correo,
        foto: datos.foto,
        programa: datos.programa,
        ficha: datos.ficha,
        jornada: datos.jornada
      };

      const respuesta = await fetch(
        "http://127.0.0.1:5000/api/registrohv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(datosapi)
        }
      );

      const resultado = await respuesta.json();

      console.log("respuesta realizada", resultado);

    } catch (error) {
      console.error("error al conectar con flask", error);
    }

  };

  return (
    <div className="contenedor">
      <Header />

      {paso === 1 && (
        <FormularioDatos
          datos={datos}
          setDatos={setDatos}
          siguiente={() => setPaso(2)}
        />
      )}

      {paso === 2 && (
        <FormularioAcademico
          datos={datos}
          setDatos={setDatos}
          siguiente={() => setPaso(3)}
          anterior={() => setPaso(1)}
        />
      )}

      {paso === 3 && (
        <FormularioExperiencia
          datos={datos}
          setDatos={setDatos}
          anterior={() => setPaso(2)}
          siguiente={() => setPaso(4)}
        />
      )}

      {paso === 4 && (
        <VistaPrevia
          datos={datos}
          academico={datos}
          experiencia={datos.experiencias}
          anterior={() => setPaso(3)}
          guardarhojavida={guardarhojavida}
        />
      )}

      <Footer />
    </div>
  );
}

export default App 
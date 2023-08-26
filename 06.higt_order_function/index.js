const express = require("express");
const cursos = require("./cursos.js");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Bienvenidos al servidor web con sutas dinámicas");
  console.log(cursos);
});

app.get("/cursos/:categoria", (req, res) => {
  let parametro = req.params.categoria.trim().toLowerCase();
  let resultado = [];
  if (parametro) {
    resultado = cursos.filter(
      (curso) => curso.categoria.toLowerCase() === parametro
    );
  }
  resultado.length > 0
    ? res.json(resultado)
    : res.json([
        { id: "Error", descripcion: "No se encontraron coincidencias" },
      ]);
});

app.get("/cursos", (req, res) => {
  const queryParams = Object.keys(req.query);
  let resultado = [];
  if (queryParams.length) {
    console.log("llegan los parámetros");
    resultado = cursos.filter(
      (curso) =>
        curso.nombre.toLowerCase().includes(req.query.nombre.toLowerCase()) &&
        curso.categoria.toLowerCase().includes(req.query.categoria.toLowerCase())
    );
    if (resultado.length > 0) {
      res.json(resultado);
    } else {
      console.log("No llegan prámetros. Envío el set de datos");
      res.json({ id: "Error", descripcion: "no se recibieron parametros." });
    }
  }
});

app.get("/cursos/codigo/:id", (req, res) => {
  const codigo = parseInt(req.params.id);
  let resultado = [];
  if (typeof codigo === "number") {
    resultado = cursos.filter((curso) => curso.id === codigo);
  }
  resultado.length > 0
    ? res.json(resultado)
    : res.json([
        { id: "Error", descipcion: " No se encontraron coicidencias." },
      ]);
});

app.get("/cursos/nombre/:nombre", (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  let resultado = [];
  if (nombre) {
    resultado = cursos.filter((curso) =>
      curso.nombre.toLowerCase().includes(nombre)
    );
  }
  resultado.length > 0
    ? res.json(resultado)
    : res.json([
        { id: "Error", descipcion: " No se encontraron coicidencias." },
      ]);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto local ${PORT}`);
});

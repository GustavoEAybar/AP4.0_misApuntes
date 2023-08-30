const express = require("express");
const cursos = require("./cursos.js");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`Bienvenidos al servidor web con rutas dinámicas`);
});


app.get("/cursos/:categoria", (req, res) => {
    console.log(req.params.categoria.trim().toLowerCase());
    let parametro = req.params.categoria.trim().toLowerCase();
    if (parametro !== "") {
        let resultado = [];
        for (let curso of cursos) {
      if (curso.categoria.toLowerCase() === parametro) {
        resultado.push(curso);
    }
}
resultado.length > 0
? res.json(resultado)
: res.json([
          { id: `Error`, descripcion: `No se encontraron coincidencias.` },
        ]);
    }
});

app.get("/cursos", (req, res) => {
  let respuesta = [];
  for (let curso of cursos) {
    if (
      curso.nombre.toLowerCase() === req.query.nombre.toLowerCase() &&
      curso.categoria.toLowerCase() === req.query.categoria.toLowerCase()
    ) {
      respuesta.push(curso);
    }
  }
  respuesta.length === 0 ? res.json(cursos) : res.json(respuesta);
});

app.get("/cursos/codigo/:id", (req, res) => {
    let respuesta = [];
    let id = parseInt(req.params.id);
    if (typeof id === "number"){
        for (let curso of cursos){
            if(curso.id === id){
                respuesta.push(curso);
                break;
            };
        }
    }
    respuesta.length === 0
     ? res.json([{ id: `Error`, descripcion: `No se encontraron coincidencias.` },])
     : res.json(respuesta);
});

app.get("/cursos/nombre/:nombre", (req, res) => {
    let respuesta = [];
    let nombre = req.params.nombre.trim().toLowerCase();
    if (typeof nombre === "string"){
        for (let curso of cursos){
            if(curso.nombre.toLowerCase().includes(nombre)){
                respuesta.push(curso);
            };
        }
    }
    respuesta.length === 0
    ? res.json([{ id: `Error`, descripcion: `No se encontraron coincidencias.` },])
    : res.json(respuesta);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto local ${PORT}`);
});

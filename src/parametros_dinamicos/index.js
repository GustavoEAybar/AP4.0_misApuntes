const express = require ('express');
const cursos = require ('./cursos.js');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Bienvenidos al servidor web con rutas dinámicas`);
});

app.get('/cursos/:categoria', (req, res) => {
    let parametro =req.params.categoria.trim().toLowerCase();
    if (parametros !== ""){
        let resultado = [];
        for (let curso of cursos){
            if (curso.categoria.toLowerCase() === parametro){
                resultado.push(curso);
            }
        }
        resultado.length>0 ? resultado.json(resultado) : res.json([{id: `Error`, descripcion: `No se encontraron coincidencias.`},]);
    }
});

app.get('/cursos', (req, res) => {
    let respuesta = [];
    for (let curso of cursos){
        if(
            curso.nombre.toLowerCase() === req.query.nombre.toLowerCase() && 
            curso.categoria.toLowerCase() === req.query.categoria.toLowerCase()
        ){
            respuesta.push(curso);
        }
    }
    respuesta.length === 0 ? res.json(cursos) : res.json(respuesta);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto local ${PORT}`);
});
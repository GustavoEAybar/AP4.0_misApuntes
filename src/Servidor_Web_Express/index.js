const express = require('express');
const PORT = 3050;
const app = express();

app.get("/", (req,res) => {
    res.status(200).send("<h1>Bienvenidos a nuestra WEB</h1>");
});

app.get("/cursos", (req,res) => {
    res.status(200).send("<h1>Bienvenidos a nuestros cursos</h1>");
});

app.get("/contactos", (req,res) => {
    res.status(200).send("<h1>Bienvenidos a nuestros contactos</h1>");
});

// app.get("*", (req,res) => {
//     res.status(404).send("<h1>Error: 404 - No se encuentra la ruta o recurso solicitado</h1>");
// });

// app.use((req,res) => {
//     res.status(404).send(`{"Error": "404", "description": "No se encuentra la ruta o recurso solicitado"}`);
// });

app.use((req,res) => {
    res.status(404).json(`{"Error": "404", "description": "No se encuentra la ruta o recurso solicitado"}`);
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})
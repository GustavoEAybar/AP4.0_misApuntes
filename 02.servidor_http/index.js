const http = require ("http");

const PORT = 3008;

const server = http.createServer((req, res) => {
    // response.statusCode = 200;
    // response.setHeader("Content-Type", "text/plain");
    // response.end(`Hola mundo!`)

    switch (req.url){
        case "/":
            res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            res.end(`<h1>Biemvenidos a Nuestra WEB</h1>`);
            break;
        case "/cursos":
            res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            res.end(`<h1>Biemvenidos a nuestra sección de cursos</h1>`);
            break;
        case "/contactos":
            res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            res.end(`<h1>Biemvenidos a nuestra seccion de contacto</h1>`);
            break;
        default:
            res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
            res.end(`<h1>Ruta Inexistente</h1>`);
            break;
    }
});

server.listen (PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});
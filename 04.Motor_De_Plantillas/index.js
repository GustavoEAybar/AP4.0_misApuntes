const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const computerProducts = [
    {name:'Notebook Lenobo', price: 50000},
    {name: 'Notebook Asus', price: 30000},
    {name: 'Notebook HP', price: 20000}
];

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
    const data = {
        title: 'Bienvenidos a nuestra web',
        message: 'Nuestro primer servicio HTML, desde el motor de plantilals EJS',
        titleCard1: 'Motores de plantilla',
        messageCard1: 'Los motores...',
        titleCard2: 'EJS',
        messageCard2: 'EJS es una...'
    };
    res.render('index', data);
});

app.get('/productos', (req, res) => {
    const data = {
        title: 'Mi sitio web con EJS',
        message: 'Bienvenido a mi sitio web generado a partir de un morot de plantillas.',
        products: computerProducts
    };
    res.render('products', data);
});

app.get('/*', (req, res) => {
    res.status(404);
    const data = {
        title: 'Error 404',
        message: 'La ruta solicita no existe.',
        suggestSolution: 'Verifique que la ruta sea correcta e intente de nuevo'
    };
    res.render('error', data);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
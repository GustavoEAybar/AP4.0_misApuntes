const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const computerProducts = [
    {name:'Notebook Lenobo', precio: 50000},
    {name: 'Notebook Asus',precio: 30000},
    {name: 'Notebook HP',precio: 20000}
];

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
    const data = {
        title: 'Mi sitio web con EJS',
        message: 'Bienvenido a mi sitio web generado a partir de un morot de plantillas.'
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

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
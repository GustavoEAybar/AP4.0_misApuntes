const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.send(200);
});

app.get('/productos', (req, res) => {
    res.send(200);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
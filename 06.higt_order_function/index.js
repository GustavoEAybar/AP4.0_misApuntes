const productos = [
    {id:1, nombre:"Notebook 14 fhd", importe: 115000, categoria:"Portatil"},
    {id:2, nombre:"Tablet Pad 9,7", importe: 195000, categoria:"Tablet"},
    {id:3, nombre:"Macbook Air", importe: 745000, categoria:"Portatil"},
    {id:4, nombre:"Tablet Droid 10.1", importe: 165000, categoria:"Tablet"},
    {id:5, nombre:"Smartwatch 1.8 black", importe: 22500, categoria:"Reloj"},
    {id:6, nombre:"Smartwatch 2 red", importe: 24200, categoria:"Reloj"},
];

productos.forEach(producto => {
    console.table(producto);
});

const resultado = productos.find(producto => producto.id === 5)
if (resultado !== undefined){
    console.table(resultado);
}else{
    console.log(`No hay productos con el ID 5`);
}

const resultado2 = productos.filter (producto2 => producto2.categoria === 'Tablet');
resultado2 !== [] ? console.table(resultado2)
: console.log(`No hay categorias similares a Tablet`)

const resultado3 = productos.filter(producto3 => producto3.nombre.includes('book'));
resultado3 !== [] ? console.table(resultado3)
    :  console.log(`No hay categorias similares a Tablet`)
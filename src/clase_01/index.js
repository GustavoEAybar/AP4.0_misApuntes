//declaracion de un Array
let hobbies = [
  "programacion",
  "desarrollo web",
  "inteligencia artificial",
  "ciberseguridad",
];
console.table(hobbies);
//accediendo a un elemento del array

console.log(hobbies[1]);

//modificando un elemento del array
hobbies[1] = "seguridad informática";
console.table(hobbies);

//Creando un objeto literal:
let celular = {
  precio: 39.99,
  camara: 32,
  nombre: "Motorola",
};

let persona = {
  nombre: "Mario Cesar Aybar",
  edad: 30,
  direccion: {
    pais: "Argentina",
    ciudad: "Tucuman",
    calle: "Padre Garizio",
    altura: 400,
  },
  hobbies: ["Barman", "Tiro al blanco"],
  esEstudiante: false,
  saludar: function () {
    console.log("Hola, mi nombre es ", this.nombre);
  },
};

//se puede acceder a los valores del objeto literal con:
console.log(persona.nombre);
console.log(persona.direccion.ciudad);
console.log(persona["hobbies"][0]);

//arrays de objetos literales

let productosInformaticos = [
  {
    nombre: "Portatil Lenovo ThinkPad X1 Carbon",
    precio: 1399,
    sistemaOperativo: "Windows 10 Pro",
    pantalla: "14 pulgadas",
    memoria: "16 GB",
    almacenamiento: "512 GB SSD",
  },
  {
    nombre: "Monitor Dell UltraSharp u3415w",
    precio: 699,
    resolucion: "3440 x 1440",
    tamaño: "34 pulgadas",
    tipo: "IPS",
    conectividad: "HDMI, DisplayPort, USB 3.0",
  },
  {
    nombre: "Teclado mecánico Corsair",
    precio: 199,
    tipo: "Mecanico",
    retroiluminación: "RGB",
    switches: "cherry MX Brown",
    macros: true,
  },
];

//se puede acceder a sus propiedades con:
console.log(productosInformaticos[0].precio);

//se puede modificar un componente:
productosInformaticos[0].precio = 749;
console.log(productosInformaticos[0].precio);

//LOS METODOS .stringify y .parse

//.stringify
let json = JSON.stringify(productosInformaticos);
console.log(json);

//.parse
let objeto = JSON.parse(json);
console.log(objeto);

//retorno implicito
function suma(a, b) {
  a + b;
}
console.log(suma(5, 3));

function suma(a, b) {
  return a + b;
}
console.log(suma(2, 3));

//funciones anonimas
const obtenerMaximo2 = function () {
  console.log(Math.max(1, 4, 19));
};
obtenerMaximo2();

const obtenerMaximo3 = function (num1, num2, num3) {
  console.log(Math.max(num1, num2, num3));
};
obtenerMaximo3(4, 6, 11);

const obtenerMaximo4 = function (num1, num2, num3) {
  return Math.max(num1, num2, num3);
};
console.log(obtenerMaximo4(5, 8, 20));

//funciones flecha
const obtenerMaximo5 = function (num1, num2, num3) {
  console.log(Math.max(num1, num2, num3));
};
obtenerMaximo5(3, 5, 10);

const arrayNumeros = [2, 4, 6, 7, 13, 545, 777];
const obtenerMaximo6 = (array) => {
  console.log(Math.max(...array));
};
obtenerMaximo6(arrayNumeros);

const arrayNumeros2 = [1, 2, 5, 3, 7, 4, 5, 45, 23, 765];
const obtenerMaximo7 = (array) => {
  return Math.max(...array);
};
console.log("resultado: ", obtenerMaximo7(arrayNumeros2));

const arrayNumeros3 = [3, 5, 7, 9, 23, 56, 89, 123];
const obtenerMaximo8 = (array) => Math.max(...array);
console.log("Resultado 2: ", obtenerMaximo8(arrayNumeros3));

//OPERADOR TERNARIO
const nombreCompleto = "Daniel Cesar Aybar";
const grupo = "admin";
if (nombreCompleto !== "" && grupo === "admin")
  console.log("Bienvenido ", nombreCompleto);
else console.error("No se reconoce el usuario o el usuario está vacío.");

const nombreCompleto1 = "Erika Yanet Aybar";
nombreCompleto1 !== ""
  ? console.log("Bienvenida ", nombreCompleto1)
  : console.error("No se reconoce el usuario");

const nombreCompleto2 = "Cindy Vanesa Aybar";
const resultado = nombreCompleto2 !== "" ? true : false;
console.log(resultado);

//OPERADOR AND && Y OR ||
let color = "Rojo";
if (color === "Rojo") {
  console.log("El color elegido es el correcto");
}

//se puede utilizar && para resumir una estructura if simple
color === "Rojo" && console.log("El color elegido es el correcto");

//el operador or se puede utilizar para detectar un posible corto.
function obtenerCarritoConProductos() {}

const carrito = obtenerCarritoConProductos() || [];
console.log(carrito);

//NULLISH COALESCING
let carrito1;
const resultado1 = carrito1 ?? [];
console.log(resultado);

let productos = null;
const resultado2 = productos ?? { error: "Error" };
console.log(resultado1);

//DESESTRUCTURACIÓN
let producto = {
  id: 123,
  nombre: "Mouse Bluetooth",
  importe: 1940.0,
  stock: 55,
};
function mostrarProductoyPrecio(prod) {
  console.log(prod.nombre);
  console.log(prod.importe);
}
mostrarProductoyPrecio(producto);

let producto2 = {
  id: 125,
  nombre: "Teclado Bluetooth",
  importe: 1599.0,
  stock: 12,
};
function mostrarProductoyPrecio2({ nombre, importe }) {
  console.log(nombre);
  console.log(importe);
}
mostrarProductoyPrecio2(producto2);

let producto3 = {
  id: 150,
  nombre: "Parlante Bluetooth",
  importe: 3940.0,
  stock: 59,
};
function mostrarProductoyPrecio3(prod) {
  const { nombre, importe } = prod;
  console.log(nombre);
  console.log(importe);
}
mostrarProductoyPrecio3(producto3);

//ALIAS EN ARRAY DE OBJETOS
const item = {
  item_id: 123,
  product_name: "Teclado",
  price_per_unit: 100,
  active_stock: 76,
};
console.table(item);

const {
  item_id: id,
  product_name: nombre,
  price_per_unit: importe,
  active_stock: stock,
} = item;
console.table(item);

//SPREAD OPERATORS
const arrya1 = [1, 3, 5];
const arrya2 = [6, 8, 9];
const arrya3 = [...arrya1, ...arrya2];
console.log(arrya3);

const array4 = [2, 3, 5];
const array5 = [...array4];
console.log(array5);

const arrya6 = [1, 3, 5];
const arrya7 = [6, 8, 9];
arrya6.push(...arrya7);
console.log(arrya6);

//ACCESO CONDICIONAL
let producto4 = {
  id: 2234,
  nombre: "Gabinete Zigma",
  importe: 34224.88,
  stock: 33,
};
console.log(producto4.nombre);
console.log(producto4.categoria);
console.log(producto4?.categoria);

//desde la consola vamos a ingresar el comando
/*
node --version

sirve para ver la version que instalamos de Node js
*/

//COMANDOS PARA CONSOLA
/*
$ md 
crea una carpeta en el directorio o direccion en la que estamos posicionados

$ ls
muestra el contenido de la carpeta en donde nos encontramos

$ cd "nombre de carpeta"
nos permite acceder o ingresar a la carpeta nombrada

$ cd ..
nos permite retroceder o salir de la carpeta o direccion en donde estamos

$ clear
limpia el contenido de la pantalla de la terminal
*/

//VARIABLES

/*la "declaracion" de variables se realiza a través de la "plabra reservada": let, sumado a esto el "nombre" de dicha variable finalizando con ";"*/
let nombre;

/*para asignar un valor a nuestra variable se utiliza el simbolo "=" seguido del valor que se le desea agregar finalizando nuevamente con un ";"*/
nombre = "Gustavo";

/*BUENAS PRACTICAS: se recomienda inicializar y asignar el valor en una misma linea*/
let apellido = "Aybar";

/*las constantes tambien son un tipo de variables, pero estas no se pueden modificar. se las declara con la palabra reservada "const"*/
const frutas = "banana, manzana";

//TIPOS DE VALORES

/*podemos mencionar los siguientes:*/
let numero = 1; //todos los tipos de numeros: enteros, desimales, negativos...
let booleano = true; //estos pueden representar dos valoores: "true" o "false"
const string = "letras o palabras"; //estos siempre se colocan dentro de: "", ''.
//etc...

//MATRICES O ARRAYS

/*estas se escriben entre "[]" y sus elementos se separan mediante "," por ejemplo:*/
const verduras = ["cebolla", "ajo", "pimiento", "lechuga", "tomate"];
/*
los indices de una matris tienen base "0" es decir:
cebolla se encuentra en la posicion 0
*/

//para mostrar algo en consola nos valemos de la linea:
console.log("Hola, mi nombre es ", nombre); //asi es como podemos integrar las variables y mostrar la informacion de las mismas.
console.log(`Hola, mi nombre es ${nombre} y mi apellido es ${apellido}`); //usamos comillas francesas para poder utilizar las variables dentro del string a mostrar, esta seria la opacion ideal

//o en caso de ser un array
console.table(verduras); //estructura la informacin del array en una tabla

/*
nos haceguramos de estar en la carpeta "01.repaso.js"
luego ingresamos en la consola el comando:

$ node index.js

podemos notar que este comando nos permitira ejecutar el archivo (y solo archivos) y que a la hora de nombrar el archivo es necesario colocarlo con su extencion
*/

//otros metodos posibles que nos ayudaran seran:
console.warn("Este es un mensaje de advertencia");
console.error("Este es un mensaje de error");

/*
estos dos ultimos podemos apreciarlos mejor desde la consola del navegador
*/

//FUNCION SIMPLE

//cuerpo de la funcion
/*
para declarar una funcion se utilizar la palabra reservada:

"function" "nombre de la funcion (){
    accion a realizar;
}

*/

function mostrarMiNombre() {
  console.log(nombre);
}

//llamado de la funcion

mostrarMiNombre();

//FUNCION CON PARAMETROS
/*lo que se puede destacar de esta, es que, los parametros son nuevas variables que solo funcionaran dentro de esta funcion, que, adquieren el valor que se envia mediante el llamado, respetando el orden en el cual se colocan*/
function mostrarNombreCompleto(primerDato, segundoDato) {
  console.log(`mi nombre completo es ${primerDato} ${segundoDato}`);
}

mostrarNombreCompleto(nombre, apellido);

//FUNCIONES CON RETORNO
/*este tipo de funciones retorna o devuelve un valor, puede ser almacenado en una variable o utilizado en un comando. */
function obtenerMaximo(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(obtenerMaximo(50, 25, 300));

//CONDICIONALES
/*nos permiten ejecutar codigo en base al resultado del análisis de una expresión*/

//IF
/*
utiliza una "condicion" para determinar cual sera el curso de la ejecucion
si esta es true se ejecutara lo que se encuentra dentro de sus llaves
si esta es false saltara a la siguiente linea de codigo
*/
if (nombre !== "") {
  console.log(`Bienvenido ${nombre}`);
}

//ELSE
/*
esta opcion se utiliza apra determinar una accion puntual en el caso de que la condicion propuesta sea falsa
*/
let segundoNombre;

if (segundoNombre !== "") {
  console.log(`Bienvenido ${segundoNombre}`);
} else {
  console.log("No se reconoce el usuario...");
}

//OPERADOR TERNARIO
/*
es una forma abreviada de aplicar condicionales, solo puede utilizarce conado si o si tenemos dos opciones simples. esta no admite solo if, tampoco admite anidacion
*/
segundoNombre !== ""
  ? console.log(`Bienvenido ${segundoNombre}`)
  : console.log("No se reconoce el usuario...");

//ANIDACION
/*
hay varias formas de anidar condicionales, pongo como ejemplo la mas comun
*/
let edad = 32;

if (edad < 18){
    console.log("es menor de edad, no puede manejar");
}else if(edad > 65){
    console.log("tiene que pasar los controles medicos");
}else{
    console.log("puede hacer el curso de manejo");
}

//OPERADORES LOGICOS
/*
estos se utilizan dentro del analisis de una o mas expresiones
*/

// AND(&&)
/*
para el caso de &&: para que el resultado sea true ambas expresiones deben devolver true
*/

const login = false;
if (nombre !== '' && login === true){
    console.log('El usuario ya esta conectado en otro dispositivo');
}else{
    console.log(`Bienvenido: ${nombre}`);
}

//OR(||)
/*
para el caso de ||: para que el resultado sea false ambas tiene que ser false
*/

let usuario = "aybargustavo@gmail.com";
let clave;

if (usuario !== '' || (nombre !== '' && clave !== '')){
    console.log(`Bienvenido: ${apellido}`);
}else{
    console.log('No se reconoce el usuario');
}

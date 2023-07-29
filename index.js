// abrir una terminal nueva desde la parte superior en la seccion "Terminal" hacemos click en la opcion "New terminal"
// y desde la terminal ingresar la linea de codigo
// node --version

//vamos a crear un archivo haciendo click en el margen izquierdo de VSC, presisamente en el icono "Explirer"
//luego dentro del explorador clickeamos en "new file" y le colocamos de nombre "index.js"
//dentro del archivo escribimos el comando:

console.log("hola mundo!");

//luego en la consola escribiremos:
//node "index.js"

//El objeto console:

console.log("Este es un mensaje común");
console.warn("Este es un mensaje de advertencia");
console.error("Este es un mensaje de error!");

//Variables
let nombreCompleto="Gustavo Aybar";
let ocupacion="Founder";
let empresas="McMillian Security";

//Constantes
const empresa = "CARDIFF COMPUTERS";
console.log(empresa);

//Ejemplo de tabla:
const frutas=['banana','manzana','pera'];
console.table(frutas);

//FUNCIONES

//Funcion comun

//declaracion de variable
let nombreCompleto1="Jose Nuñez";

//Funcion en si
function mostrarMiNombre(){
    console.log("2-me llamo: ", nombreCompleto1);
};

//llamado de la funcion
mostrarMiNombre();

//Funcion con envio y recepcion de parametros

//declaracion de variable
let nombreCompleto2="Rene Nuñez";

//en la funcion preparamos una variable entre los parentesis la cual recibira el valor enviado por el llamado
function mostrarMiNombre2(nombre){
    console.log("3- Me Llamo: ", nombre);
}

//en el llamado integramos la variable dentro de sus parentesis
mostrarMiNombre2(nombreCompleto2);

//FUNCION CON RETORNO Y/O PARAMETROS

function obtenerMaximo(num1, num2, num3){
    return Math.max(num1, num2, num3);
}

console.log(obtenerMaximo(2, 5, 10));

//CONDICIONALES

//retorno por if

const nombreCompleto3="Virginia Nuñez";
if (nombreCompleto3!==''){
    console.log('Bienvenida: ', nombreCompleto3);
}else{
    console.error('No se reconoce el usuario, o el usuario está vacio');
};

//retorno por else

const nombreCompleto4=" ";
if (nombreCompleto4!==' '){
    console.log('Bienvenida: ', nombreCompleto4);
}else{
    console.error('No se reconoce el usuario, o el usuario está vacio');
};

//OPERADORES LOGICOS

//AND && IF
const nombreCompleto5='Lito Nuñez';
const login = false;

if (nombreCompleto5 !== '' && login === false){
    console.log('Bievenido ', nombreCompleto5);
} else {
    console.error('No se reconoce el usuario o el usuario esta vacio');
};

//AND && ELSE
const nombreCompleto6='Alicia Nuñez';
const login1 = true;

if (nombreCompleto6 !== '' && login1 === false){
    console.log('Bievenido ', nombreCompleto6);
} else {
    console.error('No se reconoce el usuario o el usuario esta vacio');
};

//OR || IF
const nombreCompleto7='Chacho Nuñez';
const login2 = false;

if (nombreCompleto7 !== '' || login2 === false){
    console.log('Bievenido ', nombreCompleto7);
} else {
    console.error('No se reconoce el usuario o el usuario esta vacio');
};

//OR || ELSE
const nombreCompleto8='Gladys Nuñez';
const login3 = true;

if (nombreCompleto8 !== '' || login3 === false){
    console.log('Bievenido ', nombreCompleto8);
} else {
    console.error('No se reconoce el usuario o el usuario esta vacio');
};

//IF Y ELSE SIMPLIFICADO
const nombreCompleto9 ='Negro Nuñez';
const grupo = 'admin';

if(nombreCompleto9 !== '' && grupo === 'admin')
    console.log('Bienvenido ', nombreCompleto9);
    else
    console.error('Nose reconoce el usuario o el usuario esta vacio.');

//CICLO DE ITERACIÓN

//ciclo por conteo
const paisesLatinos = ['Argentina', 'Bolivia', 'Chile', 'Uruguay', 'Paraguay'];

for (let i=0; i<paisesLatinos.length; i++){
    console.log(paisesLatinos[i]);
};

//no aplica este ciclo devido a que no finalizara. loop infinito.
//let ejecutar=ture;
// while(ejecutar){
//     console.log('Itero mediante el ciclo while');
// }

//este ciclo no se ejetura por que "la condicion no se cumple"
let ejecutar=false;
while(ejecutar){
    console.log('Itero mediante el ciclo while');
};

//try - catch - finally

try{
    console.log('Intento hacer algo...');
}
catch (error){
    console.log('Ocurrió un error inesperado.', error);
}
finally{
    console.log('Este mensaje se vera si o si...!');
};

//muchas gracias por tu esfuerzo! vos podes!
/*console.log("hola");
console.error("hola de nuevo!");
console.warn("hola de nuevo 2!");
console.log([1, 2, 3, 4]);
console.table([1, 2, 3, 4]);

let nombre = "Juan";

nombre = "Gustavo";

console.log(nombre);

const apellido = "Perez";

console.log(nombre, apellido);

const numeros = [10, 20];
numeros.push(30);
numeros.shift();
console.log(numeros);

function sumar (numeroA, numeroB){
    console.log(numeroA + numeroB);
}

sumar(10,20);

let nombre2="Gustavo";
let edad = 17;

if (edad>=18){
    console.log(`${nombre2} es mayor de edad`);
}else {
    console.log(`${nombre2} es menor de edad`);
};


if (nombre!=null){
    if(edad>=18){
        console.log(`${nombre} es mayor de edad`);
    }else {
        console.log(`${nombre2} es menor de edad`);
    };
}

const numeros2= [10, 20, 30, 100];
for (let i = 0; i<numeros2.length; i++){
    console.log(numeros2[i]);
};

let aux = 0;
while (aux < numeros2.length){
    console.log(numeros2[aux]);
    aux++;
}


do{
    console.log(numeros2[aux]);
} while(aux < numeros2.length);
*/

let numeroA = 10;
let numeroB = 0;

console.log(numeroA / numeroB);

try {
  sumar(numeroA, numeroB);
} catch (error) {
  console.log(error.message);
}

console.log("me sigo ejecutando");

let dividendo = 100;
let divisor = 0;

try {
  if (divisor !== 0) {
    console.log(dividendo / divisor);
  } else {
    throw new Error("No se puede dividir por 0");
  }
} catch (error) {
  console.log(error.message);
} finally {
  console.log("siempre me voy a ejecutar");
}

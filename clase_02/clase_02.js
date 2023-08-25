//FUNCION NECESARIA PARA ID
function crearID(){
    return Math.floor(Math.random()*(1000-1)+ 1);
}

//FUNCIONES CONSTRUCTORAS
function Producto1 (nombre,importe){
    this.id = crearID()
    this.nombre=nombre
    this.importe=importe
    this.importeconIVA = function(){
        const IVA=1.21
        return this.importe *IVA
    }
}

//CREACION DE PRODUCTO
const producto1 = new Producto1("Teclado Bluetooth", 1500.00);
const producto2 = new Producto1("Mouse Bluetooth", 1550.00);
const producto3 = new Producto1("Headset Bluetooth", 3000.00);

//LLAMADO DE PROPIEDAD DEL PRODUCTO CREADO
console.log(producto1.importeconIVA());
console.log(producto2.importeconIVA());
console.log(producto3.importeconIVA());
console.log(producto1.id);
console.log(producto3.id);
console.log(producto2.id);

//CLASES JS
class Producto2 {
    constructor(nombre, importe){
        this.id=crearID();
        this.nombre=nombre;
        this.importe=importe;
    }
    importeconIVA(){
        const IVA=0.21;
        return this.importe*IVA;
    };
};

const producto4 = new Producto2("Teclado", 900.00);
const producto5 = new Producto2("Mouse", 1100.00);
const producto6 = new Producto2("Headset", 2000.00);

console.log(producto4.importeconIVA());
console.log(producto5.importeconIVA());
console.log(producto6.importeconIVA());
console.log(producto4.id);
console.log(producto5.id);
console.log(producto6.id);

//MIEMBROS ESTATICOS QUE NO SON HEREDADOS - COPYRIGHT
class Producto3 {
    static acercaDe(){
        console.log("Copytight 2023 - GustavoEAybar.")
    }
    constructor(nombre, importe){
        this.id=crearID();
        this.nombre=nombre;
        this.importe=importe;
    }
    importeconIVA(){
        const IVA=0.21;
        return this.importe*IVA;
    };
};
const producto7 = new Producto3("Joystick", 2900.00);
console.table(producto7);


//GETTERS
class Producto4{
    static acercaDe(){
        console.log("Copytight 2023 - GustavoEAybar.")
    }
    constructor(nombre, importe){
        this.id=crearID();
        this.nombre=nombre;
        this.importe=importe;
    }
    importeconIVA(){
        const IVA=0.21;
        return this.importe*IVA;
    };
    getNombre(){
        return this.nombre.toUpperCase()||"";
    }
    getImporte(){
        return this.importe||0.00;
    }
};
const producto8 = new Producto4("Memoria Ram", 8900.00);
console.table(producto8);

//SETTERS
class Producto5{
    static acercaDe(){
        console.log("Copytight 2023 - GustavoEAybar.")
    }
    constructor(nombre, importe){
        this.id=crearID();
        this.nombre=nombre;
        this.importe=importe;
    }
    importeconIVA(){
        const IVA=0.21;
        return this.importe*IVA;
    };
    setNombre(nombreProducto){
        if(!nombreProducto){
            console.error("Se esperaba un nombre válido");
        } else {
        this.nombre=nombreProducto.toUpperCase();
        };
    };

};
const producto9 = new Producto5("Memoria SSD", 18900.00);
console.table(producto9);

/*
A partir de aqui, ya podriamos trabajar con la consola del navegador:
1 - abrir google chrome
2 - precionar f12
3 - hacer click en "Console"
4 - precionar las teclas "Ctrl" + "L" al mismo tiempo

a partir de aqui no seria necesario los "console.log" a estos los reemplazariamos por los llamados en estado puro.
*/

//PROMESAS JS
/* este codigo solo funciona a modo ilustracion. mas adelante cobrara sentido y tendra su correcto funcionamiento
objeto.onComplete=()=>{
    console.log("Tarea que se ejecuta al ocurrir el evento Complete");
}
objeto.onError=(err)=>{
    console.error("Si ocurre un error, se ejecuta este otro.", err);
};

return new Promise((resolve, reject)=>{
    //controla estados de la promesa y, resolverla o rechazarla
});
*/

//ESTADOS DE PROMESAS
const promesa=new Promise((resolve, reject)=>{
    const numeroAleatorio=Math.random();
});

console.log(promesa);

//RESULTADO DE UNA PROMESA
const promesa2= new Promise((resolve, reject)=>{
    const numeroAleatorio=Math.random();
    if (numeroAleatorio<0.5){
        resolve(numeroAleatorio);
    }else{
        reject(new Error('El número random es mayor o igual a 0.5'));
    };
});
console.log(promesa2);

/*
.them(resultado=> console.log('La promesa se resolvió con éxito: ', resultado));
.catch(error=>console.error('La promesa se rechazó debido a un error: ', error));
.finally(()=>console.warn('Mensaje alternativo que se muestra siempre'));

//EJEMPLO FUNCIONAL
fetch('https://miservidorremoto.com/api/clientes')
    .then(response=>response.json())
    .then(json=>cargarTablaClientes(json))
    .catch(err=>console.error('se ha producido un error.'.err))
    .finally(clientes=>console.log('Finalizó la petición'))
*/
//FUNCIONES ASINCRONICAS

function tareaAsincrona(callback){
    setTimeout(function(){
        callback('resultado de la tarea asincrona 1');
    }, 1000);
};

console.log('inicio');

tareaAsincrona(function(resultado){
    console.log(resultado);
});

console.log('fin');

//ASYNC - AWAIT
/*
async function tareaAsincrona(){
    try{
        const resultado=await obteniendoDatos();
        console.table(JSON.parse(resultado));

    } catch (error){
    console.error("Se ha producido un error", error);
    };
};
*/

//UTILIZANDO FETCH
/*
async function tareaAsincrona() {
    try {
        const resultado=await fetch(URL);
        const data=await resultado.json();
        console.table(data);
    }catch(error){
        console.error("Se ha producido un error", error);
    }
};
*/

//TEMPORIZADORES EN JS
//SetTimeOut()
/*
setTimeout(función, timepo);
*/

/* setTimeout(function() {
    console.log("Han pasado 2 segundos");
}, 2000);

const timeout=setTimeout(()=>{
    console.log("Han pasado 2 segundos");
},2000);
 
const timeout2=setTimeout(()=>{
    console.log("han pasado 2 segundos");
},2000);

clearTimeout(timeout2);
*/

//SETINTERVAL
/*
setInterval(function() {
    console.log("Este mensaje se mostrará cada 2 segundo");
},2000);

const cancelInterval = setInterval(function() {
    console.log("Este mensaje se mostrará cada 2 segundo");
},2000);
clearInterval(cancelInterval);
*/
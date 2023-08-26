const fs = require("fs");

const crearArchivo = (nombreDelArchivo) => {
  let existe = fs.existsSync(nombreDelArchivo);
  if (!existe) {
    fs.writeFile(
      nombreDelArchivo,
      "otro Archivo Creado con FS",
      (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log("El archivo se creo correctamente");
        }
      }
    );
  }
  console.log("El Archivo ya existe");
};

crearArchivo("primerArchivo.txt");

fs.readFile('primerArchivo.txt', 'utf8', (err, data) => {
    if(err){
        console.log("Error: " + err);
    }else{
        console.log(data);
    }
});

fs.appendFile("otroArchivo.txt", " contenido Agregado", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Se agrego el contenido correctamente");
  }
});

fs.unlink('otroArchivo.txt', (error) => {
    if(error) {
        console.error(error);
    }else {
        console.log('El archivo se elimino correctamente')
    }
});

fs.unlink('primerArchivo.txt', (error) => {
    if(error) {
        console.error(error);
    }else {
        console.log('El archivo se elimino correctamente')
    }
});

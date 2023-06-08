const fs = require('fs');

fs.writeFileSync('./ejemplo.txt', "Hola, estoy creando un archivo nuevo");

if(fs.existsSync('./ejemplo.txt')){
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido);

    fs.appendFileSync('./ejemplo.txt', '\nIncorporo más contenido');
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);

    fs.unlinkSync('./ejemplo.txt');
};
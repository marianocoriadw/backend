const fs = require ('fs');
const operacionesArchivosAsincrona = async () =>{
    try{
        await fs.promises.writeFile('./promesas.txt', 'Salvado por promesas');
        let resultado = await fs.promises.readFile('./promesas.txt', 'utf-8')
        console.log(resultado);

        await fs.promises.appendFile('./promesas.txt', '\nMás contenido')
        resultado = await fs.promises.readFile('./promesas.txt', 'utf-8');
        console.log(resultado);
        
        await fs.promises.unlink('./promesas.txt')
    } catch (error) {
        console.log(error);
    }
}

operacionesArchivosAsincrona();
const dividir = (dividendo, divisor) =>{
    return new Promise ((resolve,reject) =>{
        if (divisor === 0){
            reject ('No se puede dividir por cero');
        } else {
            resolve (dividendo/divisor);
        }
    });
};

// (dividir(3,0))

//   .then(resultado => {
//     console.log (resultado)
// }) .catch(error => {
//     console.log("error");
// });

const funcionAsincrona = async () => {
    try{
        const resultado = await dividir(10,0);
        console.log(resultado);
    } catch (error){
        console.log(error);
    }
}

funcionAsincrona();
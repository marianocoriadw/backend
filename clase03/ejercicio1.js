const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;

const realizarOperacion = (numero1, numero2, callback) =>{
    const resultado = callback (numero1, numero2);
    console.log(resultado); 
}

realizarOperacion( 15,20, sumar);
realizarOperacion ( 7,2, restar);
realizarOperacion (2,5, multiplicar);
realizarOperacion (10,23, dividir);
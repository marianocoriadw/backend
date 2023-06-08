// console.log("tarea 1");
// console.log("tarea 2");
// console.log("tarea 3");
// console.log("tarea 4");


const temporizador = (callback) =>{
    setTimeout(()=>{
        callback();
    }, 5000)
};

const operacion = () => console.log("Realizando Operación");

console.log("Inicio de tareas");

temporizador(operacion);
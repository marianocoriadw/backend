// El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.

let string = 'el perro negro'
let resultado = (/perro/)
let valor = resultado.test(string )
console.log(valor)

//Para distinguir entre mayusculas o minisculas usarmos /i por ejemplo
let strings = 'el Perro negro'
let resultados = (/perro/i)
let valores = resultados.test(strings)
console.log(valores)


// El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
//Aquí matchvolvería ["Repeat"].
// Para buscar o extraer un patrón más de una vez, puede usar el indicador de búsqueda global: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

// Y aquí matchdevuelve el valor.["Repeat", "Repeat", "Repeat"]

//puede tener varias banderas ejemplo let repeatRegex = /Repeat/gi;(g para traer todos , i para distinguir entre minisculas y mayusculas)
// String
const name = 'John Doe';

// Number
const integer1 = 1; // 2, 3, 10, 1000, 89239872368792346
const floatcincomil = 3.14 // 2.13, 5.8
const negative = -10 // integer o float ---> -3.14, -5.8

Boolean
const verdadero1 = true;
const falso = false;

// Undefined
const indefinido = undefined;

// Null
const nulo = null;

// Object
//key: value
// objeto se escribe con corchetes, llave, dos puntos, valor, coma, llave, dos puntos, valor.  
// que valores puede tener un objeto? ---> cualquier tipo de dato de js!
const objetoProfe = {
    name: 'Nacho',
    lastname: 'Codina',
    age: undefined,
    height: 1.8,
    deceased: false,
    subObj: {
        subLlave: 'valor de la subllave'
    },
    arreglo: ['bla', 'hola', 'chao'],
    addNumbers: (number1, number2) => {
        return number1 + number2
    }
}

console.log(objetoProfe)

// Array
// Es una lista ordenada
// Un grupo de datos
// un arreglo se escribe con corchete recto, dato, coma, dato, dato, dato..........., corchete recto
// que datos puede tener un arreglo en js? ---> cualquier tipo de dato de js!
const arreglo = ['manzana' ,'naranja', 'avion', 5, null, undefined, {llave: 'valor'}, [9, 10, 5, 'hola']]
            //      0           1           2   3   4       5           6                   7

console.log('En la posicion:', 5 , 'el valor del arreglo es: ', arreglo[5])

console.log('El arreglo es: ', arreglo)


// VARIABLES
// termino(let,var,const) identificador/nombre de la variable = valor(tipo de dato)

let puedoCambiarSuValor = 5; // Number

console.log('puedoCambiarSuValor: ', puedoCambiarSuValor)

puedoCambiarSuValor = 10; // Number

console.log('puedoCambiarSuValor', puedoCambiarSuValor)

puedoCambiarSuValor = 'Hola'; // String

console.log('puedoCambiarSuValor', puedoCambiarSuValor)






// tipos de operadores

// ARITMETICOS
const suma = 10 + 10;
console.log('suma: ', suma)
const resta = 10 - 10;
console.log('resta: ', resta)
const multiplicacion = 10*10;
console.log('multiplicacion: ', multiplicacion)
const division = 10/10
console.log('division: ', division)
const modulo = 10%3
console.log('modulo: ', modulo)

// ASIGNACION
let asignacionSimple = 10;
// asignacion suma addition assignment
asignacionSimple += 10

console.log('asignacionSimple suma: ', asignacionSimple)

// asignacion resta subtraction assignment
asignacionSimple -= 10

console.log('asignacionSimple resta: ', asignacionSimple)

// *=, /=, %=

// COMPARACION/EQUIVALENCIA
// igualdad ==, ===
const valor1 = 'Hola';
const valor2 = 'holadasdasd';
const result = (valor1 === valor2)
console.log('igualdad ' ,result)

// diferencia

const resultDif = valor1 !== valor2
console.log('diferencia ',resultDif)

// greater than --> mayor que
const mayorQue = 10 >= 9;
console.log('mayrorque', mayorQue)

// less than ---> menor que
const menorQue = 10 <= 10
console.log('menorQue', menorQue)


// OPERADORES LOGICOS
// && AND
// basta un falso para que sea falso
// para que sea verdadero, todos tienen que ser verdaderos
const loQueSalga = true && true && true && false
console.log(loQueSalga)

// || OR
// basta que con que sea true, para que sea true
// para que sea falso, todos tienen que ser falso
const operadorOr = true || false || false || false || false
console.log(operadorOr)

// ! NOT
const notOperator = false
console.log(notOperator)

const ejercicio = (( 8 > 5) || false) && !true;
            //    (( true ||  false )) &&  false
            //     (true) && false
            //     false
console.log(ejercicio)
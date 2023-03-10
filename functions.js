const variableGlobal = 'Soy una variable global, debido a que no hay corchetes alrededor de mi';

// un bloque es aquello que está entre {} a excepcion de un objecto
// const y let solo definen la variable dentro del bloque.
// var define a la variable para ser accedida fuera del bloque.

// incia el bloque
if (true) {
    const variableBloque = 'Soy valida solo en el bloque, ya que me definieron con const o let, por tanto soy una variable local';
    var variableBloqueValida = 'Soy valida incluso fuera del bloque';
    // bloque 2
    if (true) {
        const variableBloque2 = 'Soy valida solo en el bloque, ya que me definieron con const o let, por tanto soy una variable local';
    }
    // fin bloque 2
}
// termina el bloque


// FUNCIONES

//syntax ----> function nomnbreDeLaFuncion(parametro1, parametro2....) { return }
// Para que sirve? Ahorrar codigo, Codigo reutilizable, Mejor legibilidad.

//defino la funcion
function addNumbers(num1, num2) {
    const sum = num1 + num2;
    console.log(sum, '<------SUM')
    return sum;
}

const restNumbers = (num1, num2) => {
    const sum = num1 - num2
    return sum;
}

function prints() {
    console.log('Hoola, yo solo imprimo informacion')
}

function asignoValoresAleatorios() {
    return Math.random()*100
}

prints()
const random = asignoValoresAleatorios()
console.log(random)
//llamo la funcion
addNumbers(100, 50)
//              12          *       20
const x = addNumbers(10, 2) * addNumbers(10, 10)          
const y = addNumbers(7, 8)                //7 + 8

console.log(x, '<----X')

console.log(y, '<-----Y')





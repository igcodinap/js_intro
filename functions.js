// const variableGlobal = 'Soy una variable global, debido a que no hay corchetes alrededor de mi';

// // un bloque es aquello que está entre {} a excepcion de un objecto
// // const y let solo definen la variable dentro del bloque.
// // var define a la variable para ser accedida fuera del bloque.

// // incia el bloque
// if (true) {
//     const variableBloque = 'Soy valida solo en el bloque, ya que me definieron con const o let, por tanto soy una variable local';
//     var variableBloqueValida = 'Soy valida incluso fuera del bloque';
//     // bloque 2
//     if (true) {
//         const variableBloque2 = 'Soy valida solo en el bloque, ya que me definieron con const o let, por tanto soy una variable local';
//     }
//     // fin bloque 2
// }
// // termina el bloque


// // FUNCIONES

// //syntax ----> function nomnbreDeLaFuncion(parametro1, parametro2....) { return }
// // Para que sirve? Ahorrar codigo, Codigo reutilizable, Mejor legibilidad.

// //defino la funcion
// function addNumbers(num1, num2) {
//     const sum = num1 + num2;
//     console.log(sum, '<------SUM')
//     return sum;
// }

// const restNumbers = (num1, num2) => {
//     const sum = num1 - num2
//     return sum;
// }

// function prints() {
//     console.log('Hoola, yo solo imprimo informacion')
// }

// function asignoValoresAleatorios() {
//     return Math.random()*100
// }

// prints()
// const random = asignoValoresAleatorios()
// console.log(random)
// //llamo la funcion
// addNumbers(100, 50)
// //              12          *       20
// const x = addNumbers(10, 2) * addNumbers(10, 10)          
// const y = addNumbers(7, 8)                //7 + 8

// console.log(x, '<-----X')

// console.log(y, '<-----Y')






// function nombreDeLaFuncion(param1, param2) {
//     console.log(param1, 'estoy dentro de la funcion')

//     return param2;
// }




// const x1 = nombreDeLaFuncion(3, 4);

// console.log(x1, '<----valor de x1')


// const Matematica1 = {
//     random: (num1, num2) => {
//         num3 = num1 + num2 +10
//         return num3
//     },
//     ceil: (numX) => {
//         return new Boolean()
//     },
//     esEntero: (numero) => {
//         return Number.isInteger(numero)
//     },
//     suma: 'La suma es la adicion entre dos numeros'
// }

// console.log(Matematica1.esEntero('10'))
function getValueA() {
    console.log("Getting value A");
    return 3;
  }
  
  function getValueB() {
    setTimeout(() => {
      console.log("1 second");
    }, 1000);
    console.log("Getting value B");
    return 4;
  }
  
  function add(a, b) {
    //    3  +   4
    return a() + b();
  }
  
  console.log("Before calling add");
  const result = add(getValueA, getValueB); // 7
  console.log("After calling add");
  console.log("Result:", result);

















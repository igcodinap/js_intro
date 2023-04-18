
// function add(a, b) {
//   console.log("Adding numbers");
//   return a + b;
// }

// const result = add(3, 4);
// console.log(result);


// ////////////////////////

// function getValueA() {
//   console.log("Getting value A");
//   return 3;
// }

// function getValueB() {
//   setTimeout(() => {
//     console.log("1 second");
//   }, 1000);
//   console.log("Getting value B");
//   return 4;
// }

// function add(a, b) {
//   //    3  +   4
//   return a() + b();
// }

// console.log("Before calling add");
// const result = add(getValueA, getValueB); // 7
// console.log("After calling add");
// console.log("Result:", result);

// Getting value A, Getting value B, Before calling add, After calling add, Result     manu salazar, beverly
// Before calling add, Getting value A, Getting value B, After calling add, Result     beverly, manu perez, felix, denise, dani,

// ///////////////////////////////////////

// function syncFunction() {
//   console.log("First");
//   console.log("Second");
// }

// syncFunction();

// ////////////////////////

setTimeout(function a() {
  console.log("a");
}, 1000);

setTimeout(function b() {
  console.log("b");
}, 500);
// callback
setTimeout(function c() {
  console.log("c");
}, 0);

function d() {
  console.log("d");
}

d();
// c d b a  manu, nacho, beverly, jonathan, diego
// d c b a  felix, nacho, dani, manu salazar, diego, denise

/////////////////////

//
// FILA DE EJECUCION
// setTimeout => a() + 1
// setTimeout => b() + 0.5
// setTimeout => c() + 0
// d()

// Promesas:
// si pasa esto A, si pasa esto otro haz B
// ahora que llego la respuesta, veamos que pasa con la respuesta
// a veces tenemos codigo que depende del resultado de la promesa
// Es el resultado de la operacion y puede tener tres estados: Pendiente, Cumplido y Rechazado

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(myPromise)
//     reject("Error!");
//   }, 1000);
// });
// myPromise.then(() => {
//     console.log('console log dentro del then')
//     console.log(myPromise)
// })
// myPromise.catch(() => {
//     console.log(myPromise)
// })

//////////////////////////////////////////////

// const apiCall = fetch("https://jsonplaceholder.typicode.com/posts/1")
//   // lo que retorna la funcion lo estamos guardando en la variable data de abajo
//   .then((response) => {return response.json()})
//   // lo que retorna la funcion de arriba, lo estamos utilizando en la variable jsonData de abajo
//   .then((jsonData) => {
//     return console.log(jsonData);
//   })
//   .then(() => console.log('ya devolvimos el resultado de la promesa'))
//   .catch(() => {
//     return console.log("no funciono");
// });


async function asyncFunction(param) {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts/' + param
        const response = await fetch(url)
        const jsonData = await response.arrayBuffer()
        console.log(jsonData)
        console.log(response.status)
    } catch (error){
        console.log('houston tenemos un problema')
    }
}
 
asyncFunction('3')


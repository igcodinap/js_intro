// import
// require
const { calculadora } = require("./classes");

// IF
const x = null
console.log(x)

if (x) {
    console.log('me ejecuté')
}

if (10 < 5) {
    console.log('se ejecuta el segundo if')
}


const time = 10;

if (time < 12) {
    console.log("Buenos dias")
} else if (time < 18) {
    console.log("Buenas tardes")
} else {
    console.log("Buenas noches")
}

calculadora.sumar2(10,2)

const animal = {
    name: 'Perro',
    age: 5,
    color: 'Cafe',
    action: function() {
        console.log('El animal esta corriendo')
    }
}

const animal2 = {
    name: 'Gato',
    age: 3,
    color: 'Blanco'
}

const animal3 = {
    name: 'Pez',
    age: 1,
    color: 'Azul'
}

// encapsulamiento
// abstraccion
// class + nombre de la clase + {}
class Animal {
    // construir un objeto con los valores que yo instancie en la clase
    // constructor
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.randomSteps = Math.random()*100;
        this.standard = undefined;
    }
    //metodos
    action = function(param1) {
        console.log(`El animal ${this.name} esta corriendo ${param1}`)
        return
    }

    ladrar = function() {
        console.log('Inserte sonido de animal')
    }

    speak() {
        console.log('El animal habla')
    }

}
// instanciando una clase ----> la creacion de un objeto
const animalClass1 = new Animal('Puma',undefined, 'hola');

const animalClass2 = new Animal('Gato', 3, 'Blanco');

// console.log(animalClass1.ladrar())

// Herencia
class Perro extends Animal {
    constructor(name, age, color, raza) {
        // super es para llamar al constructor de la clase padre
        super(name, age, color)
        this.raza = raza;
    }
    ladrar = function() {
        console.log('Guau Guau')
    }
    // sobreescribir un metodo
    dogSpeak = super.speak();
}

const perro1 = new Perro('Perro', 5, 'Cafe', 'Pitbull')


class Calculadora {

    sumar2 = function(num1, num2) {
        console.log(num1 + num2);
    }   
}

// export
// export const calculadora = new Calculadora()
// export default
// module.export

module.exports = {
    calculadora: new Calculadora()
}
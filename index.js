let num1= parseFloat('dame un numero');
let num2= parseFloat('dame otro numero');

function sumar(num1, num2){ //parametros
    let suma = num1 + num2;
    return suma;
}

let resultado = sumar(num1, num2);

console.log(resultado);
console.log(sumar(num1, num2));

//funciones de flecha o arrow functions

//const imprimirFrase = nombre => 'Hola '+nombre;

//template string o interpolacion 
const imprimirFrase = nombre => `Hola ${nombre}`;

let nombre = 'Lilia';

console.log(imprimirFrase(nombre));

//objetos

const carro ={
    color: 'rojo',
    marca: 'toyota',
    funciones:{
        acelera: 160,
        frena: 0,
    }
}

//let color = carro.color
//console.log(color);
console.log(carro.marca);
console.log(carro.funciones);

//Destructuring object
const {color} =carro
console.log(color);



























fetch ('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
.then(res => res.json())
.then ( data, console.log(data.results))
.catch()





const persona = {
    nombre: '',
    id: '',
    edad: '',
    sexo: '',
    redes_sociales: {
        facebook: '',
        instagram: '',
        twitter: ''
    }
}
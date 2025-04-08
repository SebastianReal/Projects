'use strict'
var numero1 = parseInt(prompt("Escribe el numero 1 ",0));
var numero2 = parseInt(prompt("Escribe el numero 2 ",0));

while (numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Escribe el numero 1 ",0));
    numero2 = parseInt(prompt("Escribe el numero 2 ",0));
}

console.log(typeof numero1);
console.log("Numero 1 es: "+ numero1);
console.log("Numero 2 es: "+ numero2);

if (numero1>numero2) {
    console.log("El numero mayor es "+numero1);
    console.log("El numero menor es "+numero2);
} else if(numero1<numero2) {
    console.log("El numero mayor es "+numero2);
    console.log("El numero menor es "+numero1);
}else{
    console.log("Los numeros son iguales")
}
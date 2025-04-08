'use strict'

//condicional if
/*
var edad1 = 30;
var edad2= 12;

if(edad1>edad2){
    console.log("Edad uno es mayor que edad dos")
}else{
    console.log("Edad uno no es mayor que edad dos")
}*/

var edad = 12;
var nombre ="Pedro";

/*if (edad >= 18 ){
    if(edad >65){
        console.log("es de tercera edad")
    }else {
    console.log("mayor de edad")}
}else{
    console.log("es menor de edad")
}*/


if (edad >= 65){
    console.log(nombre+" eres de tercera edad");
}else if(edad >=18){
    console.log(nombre +" eres mayor de edad");
}else{
    console.log(nombre+" eres menor de edad");
}

//Switch
var imprime ="";

switch (edad) {
    case 18:
        imprime="Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime="Ya eres un adulto";
    break;
    case 40:
        imprime="Crisis de los 40";
    break;
    case 75:
        imprime="eres ya un anciano";
    break;
    default:
        imprime="Tu edad es neutra";
    break;
}
console.log(imprime);

//bucle for

var numero =100;

for (let i = 0; i <= numero; i++) {
    console.log("ITERACION # "+i);
    //debugger;
}

//bucle while

while (edad <18) {
    console.log("Aun eres menor de edad jaja tienes: "+edad);
    edad++
}
while (edad <=65) {
    console.log("Eres un adulto -_-s: "+edad);
    edad++

    if (edad==  60) {
        break
    }
}

console.log("----------------------------------------");

//bucle do while

do {
    console.log("Eres un adulto -_-s: "+edad);
    edad++
} while (edad <=65);

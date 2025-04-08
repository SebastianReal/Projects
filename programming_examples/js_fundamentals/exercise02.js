'use strict'

// VAR
console.log("var");
var numero= 40;
console.log(numero); //40

if(true){
    numero =50;
    console.log(numero);//50
}

console.log(numero);//50

//LET
console.log("let");
var numero2= 40;
console.log(numero2); //40

if(true){
    let numero2 =50;
    console.log(numero2);//50
}

console.log(numero2);//40

//CONSTANTE
var web ="google.com"
const ip ="192.168.0.1"

console.log(web, ip)

web ="facebook.com"
//ip ="192.168.0.100"
console.log(web, ip)

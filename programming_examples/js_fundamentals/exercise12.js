'use strict'

var n =parseInt(prompt("Ingresa un numero ",0));
var mul=0;
for (let i = 0; i < 12; i++) {

    mul=n*i;
    console.log(n+" x "+i+" = "+mul);
    document.write(n+" x "+i+" = "+(n*i)+"<br>");
    
}
'use strict'

var ingreso = parseInt(prompt("Ingresa un numero:",0));
var incremento=0;
var i= 1;
var media=0;
while(ingreso>=0){
    incremento=incremento+ingreso;
    media = incremento/i;
    i++;
    console.log(incremento+"\n");
    console.log("\t"+media+"\n");
    ingreso = parseInt(prompt("Ingresa un numero:",0));
}
console.log("La suma total es: "+incremento);
console.log("La media es: "+media);
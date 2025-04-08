'use strict'

var n= parseInt(prompt("Ingresa un numero",0));
var cont =0;

while (isNaN(n)) {
    alert("ingresa un numero");
    n= parseInt(prompt("Ingresa un numero",0));
}

for (let i = 1; i <= n; i++) {
    if (n%i==0) {
        console.log("Es divisible para: "+i);
        document.writeln(n+" es divisble para "+i+"<br>");
    }
    
}

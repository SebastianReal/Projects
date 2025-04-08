'use strict'

var n1 = parseInt(prompt("Ingrese un valor",0));
var n2 = parseInt(prompt("Ingrese un valor",0));

while (isNaN(n1) || isNaN(n2)) {
    alert("Ingrese un numero");
    n1 = parseInt(prompt("Ingrese un valor",0));
    n2 = parseInt(prompt("Ingrese un valor",0));
}

var r1 = "Suma= "+(n1+n2)+" \nResta= "+(n1-n2)+"\nMultiplicacion= "+(n1*n2)+"\nDivision= "+(n1/n2);
var r2 = ("Suma= "+(n1+n2)+" <br>Resta= "+(n1-n2)+"<br>Multiplicacion= "+(n1*n2)+"<br>Division= "+(n1/n2));

console.log(r1);
document.write(r2);
alert(r1);
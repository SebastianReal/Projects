'use strict'

var n1 = parseInt(prompt("Ingresa un numero:",0));
var n2 = parseInt(prompt("Ingresa un numero:",0));

if (isNaN(n1)==true | isNaN(n2)==true) {
    alert("debe ingreserar un numero");
    n1 = parseInt(prompt("Ingresa un numero:",0));
    n2 = parseInt(prompt("Ingresa un numero:",0)); 
}

document.write("<h3>Desde el numero "+n1+" al numero "+n2+"<br>");

while (n1!=n2) {
    if(n1%2 != 0){
        document.write("impar "+n1+"<br>");
        console.log(n1);
    }
    n1+=1;
}
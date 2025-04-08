'use strict'

var n1 = parseInt(prompt("Ingresa un numero:",0));
var n2 = parseInt(prompt("Ingresa un numero:",0));

if (isNaN(n1)==true | isNaN(n2)==true) {
    alert("debe ingreserar un numero");
    n1 = parseInt(prompt("Ingresa un numero:",0));
    n2 = parseInt(prompt("Ingresa un numero:",0)); 
}

document.write("<h3>Desde el numero "+n1+" al numero "+n2+"<br>");

if (n2>=n1) {
    for (let i = n1; i <= n2; i++) {
        document.write(i+"<br>");
    }
}else{
    for (let i = n1; i >= n2; i--) {

        document.write(i+"<br>");
    }
}

/*
    while (n2!=n1) {
        console.log("numero: "+n1);
        n1-=1;
    }
*/
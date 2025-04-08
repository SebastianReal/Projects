'use strict'

var n = parseInt(prompt("Ingresa un numero ",0));

while (isNaN(n)) {
    alert("Debes ingresar un numero: ");
    console.log(n);
    n = parseInt(prompt("Ingresa un numero ",0));
}
if (n%2==0) {
    console.log("Es par");
    
}else{
    console.log("Es impar")
}

/*

n       isNaN(n)    
a       noesNumero la a? true
d       noesNumero la d? true
5       noesNumero la 5? falso    

*/
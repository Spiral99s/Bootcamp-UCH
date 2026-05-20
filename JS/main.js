//comentario de una linea

/*
comentario
varias lineas
*/

/*
palabras reservadas
break, case, catch, continue, default, let, delete, do, else, finally, for, 
function, if, in, instanceof, new, return, switch, this, throw, try, typeof, 
var, void, while, with, y varias más...
*/

/*
tipo de variable: let const (unica declaracion y asignacion de valor) var (compatibilidad versiones mas antigua, mayor flexibilidad, mejor no utilizar)
tipo de valores: number, strings (cadenas caracteres), booleanos (true false), object (objetos), array (arreglos o listas de elementos), 
null (ausencia valor), undefined (variable que no se le asigno valor)
*/

/*

let numero;
console.log(numero);
numero = 3;
console.log(numero);

/*
const numero;
let numero;
var numero;
*/


//OPERACIONES con numeros

/*
let num1 = 2;
let num2 = 6;

let suma = num1 + num2;
console.log(suma)

let resta = num1 - num2;
console.log(resta)

let multiplicacion = num1 * num2;
console.log(multiplicacion)

let division = num1 / num2;
console.log(division)

let combi = ((num1 / num2) * num1) - num2;
console.log(combi)

//OPERACIONES con strings
let str1 = "Banco";
let str2 = "Chile";

let rta1 = str1 + str2;
console.log(rta1);

let rta2 = str1 + " de " + str2;
console.log(rta2);

let rta3 = str1 + 1;
console.log(rta3);

let rta4 = "1" - 1;
console.log(rta4);

let rta5 = "a" - 1;
console.log(rta5);

let rta6 = 1 + "1";
console.log(rta6);

/* CONDICIONALES */
// si condicion entonces accion

/*

if (true){
    console.log("soy un if con condicion TRUE")
}

if(false){
    console.log("soy un if con condicion FALSE")
}

/* COMPARACIONES

== -> es igual
=== -> es estrictamente igual
!=  -> es distinto
!==  -> es estrictamente distinto
<, >, <=, >= -> menor, mayor, menor igual, mayor igual

*/
/*
let nro =5;

if(nro == 5){
    console.log("es igual")
}

if(nro === 6){
    console.log("es igual")
}

if(nro == 4){
    console.log("es igual a 4")
    }else{
        console.log("no es igual a 4")
    }

let nro1 = 10;

if(nro1 == 4){
    console.log("es igual a 4")
}else if(nro1 < 4){
    console.log("es menor a 4")
}else if (nro1 > 4){
    console.log("es mayor a 4")
}else{
    console.log("no es un número")
}


let nro2 = 5;
let esMenorA10 = nro2 < 10;

if(esMenorA10){
    console.log("Es menor")
}

let nombre = "Jinjer";

if(nombre){
    console.log("Hola!")
}


/*OPERADORES LOGICOS
AND --> &&
OR --> ||
NOT --> !

tablas de verdad -> algebra de bool
*/

/*
console.log("AND: ");

console.log("- true AND true: ", true && true);
console.log("- true AND false: ", true && false);
console.log("- false AND true: ", false && true);
console.log("- false AND false: ", false && false);

console.log("OR: ");

console.log("- true OR true: ", true || true);
console.log("- true OR false: ", true || false);
console.log("- false OR true: ", false || true);
console.log("- false OR false: ", false || false);

console.log("NOT: ");

console.log("- NOT true: ", !true);
console.log("- NOT false: ", !false);

console.log("")

let nombre = "";
let nro =5;
let esMenorA10 = nro < 10;

if(nombre && esMenorA10 && nro == 5){
    console.log("Hola mundo 1")
}

if(nombre || esMenorA10 || nro == 5){
    console.log("Hola mundo 2")
}

if(nombre || (esMenorA10 || nro == 5)){
    console.log("Hola mundo 3")
}
*/

/* 
CICLOS

- por conteo -> FOR
- condicionales -> WHILE

*/

//FOR
// factorial -> 4! = 4*3*2*1

let nro = 4;
let factorial = 1;

for(let i = 1; i <= nro ; i++){
    factorial = factorial * i;
}
console.log(factorial)

//WHILE

let nro2 = 4;
let factorial2 = 1;
let i=1;

while(i <= nro2){
    factorial2 = factorial2 * i;
    i++;
}

console.log(factorial2)
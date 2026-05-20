//OBJETOS

// let persona = {
//     nombre: "Ciri",
//     apellido:"Marquez",
//     rut: "22560987-2",
// };

// console.log(persona)

// console.log(persona.nombre)

// console.log(persona["apellido"])

// persona.nombre = "Cirilla";
// console.log(persona)

// persona.colorFavorito = "rosado";
// console.log(persona)

//USO del This
/*
let persona = {
    nombre: "Ciri",
    apellido:"Marquez",
    rut: "22560987-2",
    mostrarDatos: function (){
        return this.nombre + " " + this.apellido
    },
    verObjeto: function(){
        return this;
    }
};

console.log(persona.mostrarDatos());
console.log(persona.verObjeto());

console.log("edad" in persona);
console.log("id" in persona)

if(!("edad" in persona)){
    persona.edad = 18;
}

console.log(persona)


for (let prop in persona){
    if(prop === "mostrarDatos" || prop === "verObjeto"){
        continue;
    }else{
        console.log(prop + " -> " + persona[prop])
    }
}

*/
/*
//ARRAYS de OBJETOS
let user1 = {nombre: "User 1", email: "user1@gmail.com", id:1234}
let user2 = {nombre: "User 2", email: "user2@gmail.com", id:2345}
let user3 = {nombre: "User 3", email: "user3@gmail.com", id:3456}

let users = [user1, user2, user3];



let newUser = {nombre: "New User", email:"newuser@gmail.com", id:3456}
users.push(newUser);
console.log(users)

//FOR ... OF

for(let user of users){
    console.log(user.nombre)
}
*/

//FUNCIONES
function suma(){
    let nro1 = 9;
    let nro2 = 5;
    let rta = nro1 + nro2;
    console.log(rta);
}

suma();

function sumaV2(nro1,nro2){
    let rta = nro1 + nro2;
    console.log(rta);
}

sumaV2(2, 5);
sumaV2(67,89);

function sumaV3(nro1, nro2){
    let rta = nro1 + nro2;
    return rta;
}

let resultado = sumaV3(4, 6);
console.log(resultado);

//FUNCIONES ANONIMAS Y FUNCIONES FLECHA
/*
let alto = 5;
let ancho = 9;

const calcularArea = function(alto, ancho){
    return alto * ancho;
}

console.log("El resultado es: "+ calcularArea(alto, ancho));

const calcularPerimetro = (alto, ancho) => {
    return (alto + ancho) * 2;
}

const calcularPerimetro = (alto, ancho) => (alto + ancho) * 2;


console.log("El resultado es: "+ calcularPerimetro(alto, ancho));
*/
//FUNCIONES DE ARRAYS
//Splice

let user1 = {nombre: "Ciri", email: "user1@gmail.com", id:1234}
let user2 = {nombre: "Jinjer", email: "user2@gmail.com", id:2345}
let user3 = {nombre: "Katya", email: "user3@gmail.com", id:3456}
let user4 = {nombre: "Nick", email: "user4@gmail.com", id:4567}

let users = [user1, user2, user3, user4];


let userEliminado = users.splice(2,1);

users.splice(2, 1);
console.log(users);
console.log(userEliminado)

//JOIN

let letras = ["a", "b", "c"]
let strLetras = letras.join(" - ");
console.log(strLetras)

//CONCAT

let letras2 =["d", "e", "f"];
let todasLasLetras = letras.concat(letras2);
console.log(todasLasLetras)

//Slice 
let primeros2 = letras.slice(0,2);
console.log(primeros2)

// indexOf

let indexB = letras.indexOf("b");
let indexZ = letras.indexOf("z");

console.log(indexB);
console.log(indexZ)

// INCLUDES
let rtaB = letras.includes("b");
let rtaZ = letras.includes("z");

console.log(rtaB);
console.log(rtaZ)

// reverse
letras.reverse();
console.log(letras)

//length
let tamano = letras.length;
console.log(tamano)

for(let i = 0; i < letras.length; i++){
    console.log(letras[i]);
}
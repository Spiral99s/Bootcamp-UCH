// DOM -> Document Objetct Model
/*
console.log(document);
console.log(document.body);
console.log(document.head);

console.dir(document);
console.dir(document.body);
console.dir(document.head);
*/
//Acceso al DOM

//getElementById()
/*
let itemXid = document.getElementById("item2");
console.log(itemXid);

//getEllementsByClassName()

let enlacesXclases = document.getElementsByClassName("enlaces");
console.log(enlacesXclases)

//FOR ... OF
for(let enlace of enlacesXclases){
    console.log(enlace);
}

//getElementsByTagName()
let itemsXtag = document.getElementsByTagName("li");
console.log(itemsXtag);

for(let item of itemsXtag){
    console.log(item);
}

//MODIFICAR ELEMENTOS

//innerText

console.log(itemXid.innerText);

itemXid.innerText = "Nuevo Item 2"

//innerHTML

console.log(itemXid.innerHTML)

itemXid.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Coding_Dojo.png" width="20%" />';

//className / id

let segundoEnlace = enlacesXclases[1];

console.log(segundoEnlace.className)
console.log(segundoEnlace.id)

segundoEnlace.className = "nuevaClase";

//segundoEnlace.className = segundoEnlace.className + " otraClase";
segundoEnlace.className += " otraClase";

segundoEnlace.id = "enlace2";

console.log(segundoEnlace)

//agregar ELEMENTOS

let lista = document.getElementById("lista");

let nuevoItem = document.createElement("li");

nuevoItem.innerText = "Item 4";

lista.append(nuevoItem);

//quitar ELEMENTOS

//se uso linea 15 selector capturo elemento
itemXid.remove();

//acceso DOM

//querySelector() (alternativa al get)
//seleccion por id
let listaXquery = document.querySelector("#lista");
console.log(listaXquery)
//seleccion por class
let enlaceXquery = document.querySelector(".enlaces");
console.log(enlaceXquery)
//seleccion por tag 
let tituloXquery = document.querySelector("h1");
console.log(tituloXquery)

//querySelectorAll()

let enlacesXqueryAll = document.querySelectorAll(".enlaces");
console.log(enlacesXqueryAll)

for(let enlace of enlacesXqueryAll){
    console.log(enlace)
}
*/
//EVENTO
//opcion 1: addEventListener()

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    console.log("Click de BTN1")
}
);

/*
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    console.log("click de BTN1")
}
);

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", respuestaClick);

function respuestaClick(){
    console.log("Click de BTN1")
}
*/
//opcion 2: propiedades de nodos (onNombreEvento)

let btn2 = document.getElementById("btn2");
btn2.onclick = () => {
    console.log("Click de BTN2")
}

//opcion 3: atributos HTML (onNombreEvento)

//evento del mouse

let input1 = document.querySelector("#texto1");

input1.onclick = () => {
    console.log("INPUT CLICK")
}

input1.onmousemove = () => {
    console.log("INPUT MOVE")
}

//evento del teclado

let input2 = document.querySelector("#numero1");

input2.onkeyup = () => {
    console.log("INPUT KEYUP")
}

input2.onkeydown = () => {
    console.log("INPUT KEYDOWN")
}

//EVENTO CHANGE/INPUT

let input3 = document.querySelector("#texto2");

input3.oninput = (e) => {
    console.log("EVENTO INPUT")
}



input3.onchange = (e) => {
    console.log("EVENTO CHANGE")
    console.log(e)
    console.dir(e.target)
    console.log(e.target.value)
}

//EVENTO SUBMIT

let form = document.querySelector("#formulario");

form.addEventListener("submit", enviarInformacion);

function enviarInformacion(e){

    e.preventDefault();

    let inputFormulario = e.target.children;
    
    console.log(inputFormulario[0].id + ":" + inputFormulario[0].value)
    console.log(inputFormulario[1].id + ":" + inputFormulario[1].value)
    console.log(inputFormulario[2].id + ":" + inputFormulario[2].value)
    console.log(inputFormulario[3].id + ":" + inputFormulario[3].value)

    let reset = document.getElementById("resetBtn");
    reset.click();
}

//console.dir(e.target);
//e.preventDefault(); no se recarga pagina

alert("Hola!")
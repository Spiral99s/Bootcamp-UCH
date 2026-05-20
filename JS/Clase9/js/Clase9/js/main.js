/*
partes de la REQUEST:
- URL -> https://api.ejemplo.com/datos
- Parámetros -> ?usuario=123
- Cuerpo -> POS (información privada / archivos)
- Método -> GET (SOLICITA info), POST, PUT (actualizar) y DELETE (Eliminar)
*/

/*
Partes de la RESPONSE:
- Codigo de status -> 200, 204, 500
- JSON -> JavaScript Object Notation
ej. "nombre": "Ciri"
*/

/*
AJAX -> Asynchronous JavaScript and XML
*/

async function getGatitos(cantidad){
    let response = await fetch("https://api.thecatapi.com/v1/images/search?limit="+ cantidad);
    let gatitos = await response.json();
    return (cantidad < 10) ? gatitos.splice(0, cantidad) : gatitos;
}





//console.log(getGatitos());

document.getElementById("form").onsubmit = async (event) => {
    event.preventDefault();
    let cantidad = event.target.children[1].value;

    let gatitos = [];

    if(cantidad) gatitos = await getGatitos(cantidad);
    else gatitos = await getGatitos(1);

    console.log(gatitos)

    
    let respuesta = document.querySelector("#respuesta");
    respuesta.innerHTML = "";

    for(let gatito of gatitos){
        respuesta.innerHTML += '<div class="card"><img src="' + gatito.url + '"></div>';
    }
}
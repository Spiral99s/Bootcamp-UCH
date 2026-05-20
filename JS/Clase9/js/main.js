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

function getGatitos(){
    let response = fetch("https://api.thecatapi.com/v1/images/search");
    return response;
}

console.log(getGatitos());
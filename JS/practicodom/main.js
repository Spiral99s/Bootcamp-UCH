// 1. SELECCIÓN DE ELEMENTOS BASADO EN TU HTML REAL
const contadorSolicitudes = document.getElementById("contadorSolicitudes");
const contadorConexiones = document.getElementById("contadorConexiones");
const bloqueAceptados = document.getElementById("conexiones"); // Ajustado a ID

// Captura segura de botones con IDs duplicados en el HTML
const botonesAceptar = document.querySelectorAll('button[id="aceptar"]');
const botonesRechazar = document.querySelectorAll('button[id="rechazar"]');

// 2. FUNCIÓN DE CONTEO DINÁMICO (Sin delays)
function actualizarTodosLosContadores() {
    // Cuenta solicitudes activas (que no estén en proceso de aceptación o rechazo)
    const solicitudesActivas = document.querySelectorAll("#solicitudes .avatar:not(.aceptada):not(.rechazada)").length;
    contadorSolicitudes.textContent = solicitudesActivas;

    // Cuenta cuántos elementos con la clase .avatar3 viven en el bloque de conexiones
    const totalConexiones = bloqueAceptados.querySelectorAll(".avatar3").length;
    contadorConexiones.textContent = totalConexiones;
}

// Ejecución inicial para mostrar (2) y (6) automáticamente al cargar la página
actualizarTodosLosContadores();

// 3. EVENTO PARA BOTÓN ACEPTAR
botonesAceptar.forEach(boton => {
    boton.addEventListener("click", function(e) {
        e.preventDefault();
        
        const avatar = e.currentTarget.closest(".avatar");
        const nombreAvatar = avatar.querySelector("h3").textContent;

        // Marcamos el estado y bajamos el contador superior de inmediato
        avatar.classList.add("aceptada");
        actualizarTodosLosContadores();
        
        // Ocultamos temporalmente los botones para evitar doble clic
        avatar.querySelectorAll("button").forEach(b => b.style.display = "none");

        // Creamos el mensaje de aceptación sin destruir la estructura interna (mantiene la foto viva)
        const mensaje = document.createElement("p");
        mensaje.className = "mensajeAceptar";
        mensaje.textContent = ` fue aceptado`;
        avatar.appendChild(mensaje);

        // Esperamos 2 segundos para mostrar el texto y luego transicionar
        setTimeout(() => {
            mensaje.remove(); // Quitamos el texto temporal
            
            // TRANSFORMAR LA TARJETA PARA QUE ENCAJE EN EL BLOQUE DE ABAJO (.avatar3)
            avatar.className = "avatar3"; // Cambiamos .avatar por .avatar3
            
            const recorte = avatar.querySelector(".recorte");
            if (recorte) recorte.className = "recorte2"; // Cambiamos el contenedor de la foto
            
            const h3 = avatar.querySelector("h3");
            if (h3) {
                const p = document.createElement("p");
                p.textContent = h3.textContent;
                h3.replaceWith(p); // Transformamos el <h3> en un <p> para heredar tu CSS de abajo
            }
            
            // Eliminamos los botones definitivamente del elemento
            avatar.querySelectorAll("button").forEach(b => b.remove());

            // Movemos físicamente la tarjeta al bloque de conexiones
            bloqueAceptados.appendChild(avatar); 
            
            // Actualizamos el contador de conexiones (subirá a 7, luego a 8, etc.)
            actualizarTodosLosContadores();
        }, 2000);
    });
});

// 4. EVENTO PARA BOTÓN RECHAZAR
botonesRechazar.forEach(boton => {
    boton.addEventListener("click", function(e) {
        e.preventDefault();
        
        const avatar = e.currentTarget.closest(".avatar");
        const nombreAvatar = avatar.querySelector("h3").textContent;
        
        // Marcamos estado y restamos del contador superior instantáneamente
        avatar.classList.add("rechazada");
        actualizarTodosLosContadores();
        
        // Ocultamos botones
        avatar.querySelectorAll("button").forEach(b => b.style.display = "none");

        // Agregamos mensaje de rechazo
        const mensaje = document.createElement("p");
        mensaje.className = "mensajeRechazar";
        mensaje.textContent = ` fue rechazado`;
        avatar.appendChild(mensaje);

        // Esperamos 2 segundos y lo eliminamos definitivamente del documento
        setTimeout(() => {
            avatar.remove();
        }, 2000);
    });
});
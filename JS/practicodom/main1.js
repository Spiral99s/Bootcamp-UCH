const contadorSolicitudes = document.getElementById("contadorSolicitudes");

function actualizarContador() {

    const totalAvatar = document.querySelectorAll(".avatar").length;

    contadorSolicitudes.textContent = totalAvatar;

}

actualizarContador();



const bloqueAceptados = document.getElementById(".conexiones");



const contadorConexiones = document.getElementById("contadorConexiones");

function actualizarContador1() {

    const totalAvatar3 = document.querySelectorAll(".avatar3").length;

    contadorConexiones.textContent = totalAvatar3;

}

actualizarContador1();



let botonAceptar = document.querySelectorAll("#aceptar");



botonAceptar.forEach(boton => {

    boton.addEventListener("click", function (e) {

        e.preventDefault();

        const avatar = e.currentTarget.closest(".avatar");

        const nombreAvatar = avatar.querySelector("h3").textContent;



        avatar.classList.add("aceptada");

        actualizarContador();



        avatar.classList.add("aceptada1");

        actualizarContador1();


        boton.remove();



        avatar.innerHTML = `<p class="mensajeAceptar"> ${nombreAvatar} aceptado </p>`;

        setTimeout(() => {

            avatar.remove();

            bloqueAceptados.appendChild(avatar);

        }, 2000);

    });

});



let botonRechazar = document.querySelectorAll("#rechazar");



botonRechazar.forEach(boton => {

    boton.addEventListener("click", function (e) {

        e.preventDefault();

        const avatar = e.currentTarget.closest(".avatar");

        const nombreAvatar = avatar.querySelector("h3").textContent;

        avatar.classList.add("rechazada");

        actualizarContador();

        avatar.innerHTML = `<p class="mensajeRechazar"> ${nombreAvatar} fue rechazado </p>`;

        setTimeout(() => {

            avatar.remove();

        }, 2000);

    });

});
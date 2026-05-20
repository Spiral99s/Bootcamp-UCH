let sesionCambiar = document.getElementById("sesionCambiar");

sesionCambiar.addEventListener("click", function() {
    this.innerText = "Cerrar Sesión";
});


let botonAgregar = document.getElementById("botonAgregar");

    botonAgregar.addEventListener("click", function() {
        this.remove();
    });



let meGustag = document.getElementById('meGustag');
let conteoMegustag =0

meGustag.addEventListener('click', (e) => {
    e.preventDefault();
    conteoMegustag++;
    meGustag.textContent = conteoMegustag + " me gusta";
    window.alert("Gato atigrado was liked");
});

let meGustap = document.getElementById('meGustap');
let conteoMegustap =0

meGustap.addEventListener('click', (e) => {
    e.preventDefault();
    conteoMegustap++;
    meGustap.textContent = conteoMegustap + " me gusta";
    window.alert("Golden Retriever was liked");
});


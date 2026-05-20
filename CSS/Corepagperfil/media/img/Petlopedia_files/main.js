let sesionCambiar = document.getElementById("sesionCambiar");

sesionCambiar.addEventListener("click", function() {
    this.innerText = "Cerrar Sesión";
});


let botonAgregar = document.getElementById("botonAgregar");

    botonAgregar.addEventListener("click", function() {
        this.remove();
    });



const meGusta = document.getElementById('meGusta');
const closeBtn = document.getElementById('closeBtn');
const popupOverlay = document.getElementById('popupOverlay')


meGusta.addEventListener('click', () => {
    popupOverlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    popupOverlay.classList.remove('active'); 
});

popupOverlay.addEventListener('click', (evento) => {
    if (evento.target === popupOverlay) {
        popupOverlay.classList.remove('active');
    }
});
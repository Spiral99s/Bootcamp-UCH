let meGusta1 = document.querySelector("#meGusta1");
let conteo1 = document.querySelector("#conteo1");
let conteoMegusta1 =0

meGusta1.addEventListener('click', (e) => {
    e.preventDefault();
    conteoMegusta1++;
    conteo1.textContent = conteoMegusta1 + " like(s)";
});
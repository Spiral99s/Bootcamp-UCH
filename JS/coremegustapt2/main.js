let meGusta1 = document.querySelector("#meGusta1");
let conteo1 = document.querySelector("#conteo1");
let conteoMegusta1 =0

meGusta1.addEventListener('click', (e) => {
    e.preventDefault();
    conteoMegusta1++;
    conteo1.textContent = conteoMegusta1 + " like(s)";
});

let meGusta2 = document.querySelector("#meGusta2");
let conteo2 = document.querySelector("#conteo2");
let conteoMegusta2 =0;

meGusta2.addEventListener('click', (e) => {
    e.preventDefault();
    conteoMegusta2++;
    conteo2.textContent = conteoMegusta2 + " like(s)";
});

let meGusta3 = document.querySelector("#meGusta3");
let conteo3 = document.querySelector("#conteo3");
let conteoMegusta3 =0

meGusta3.addEventListener('click', (e) => {
    e.preventDefault();
    conteoMegusta3++;
    conteo3.textContent = conteoMegusta3 + " like(s)";
});
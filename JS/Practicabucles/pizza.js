var pizzaOven = {
    corteza: "tradicional",
    salsa: "pomodoro",
    queso: "queso azul",
    extras: ["mechada", "pepperoni", "salame"]
};
    
console.log(pizzaOven);

function pizzaOven1 (corteza, salsa, queso, extras) {
    var pizzaOven = {};
    pizzaOven.corteza = corteza;
    pizzaOven.salsa = salsa;
    pizzaOven.queso = queso;
    pizzaOven.extras = extras;
    return pizzaOven;
}
    
var chicago = pizzaOven1 ("estilo Chicago", "tradicional", "mozarella", ["pepperoni", "salchicha"]);
console.log(chicago);

var especial = pizzaOven1 ("lanzada a mano", "marinara", ["mozarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(especial);

var japonesa = pizzaOven1 ("tradicional", "teriyaki", ["mozarella", "feta"], ["pollo", "cebolla", "palta"]);
console.log(japonesa);
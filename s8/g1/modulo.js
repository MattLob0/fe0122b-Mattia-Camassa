var giocatore1 = Math.floor((Math.random() * (100 - 1) + 1));
var giocatore2 = Math.floor((Math.random() * (100 - 1) + 1));
console.log("giocatore1" + " " + giocatore1);
console.log("giocatore2" + " " + giocatore2);
var numero = Math.floor((Math.random() * (100 - 1) + 1));
console.log(numero);
var differenza1 = Math.abs(numero - giocatore1);
var differenza2 = Math.abs(numero - giocatore2);
if (differenza1 > differenza2 && differenza2 != 0) {
    console.log("giocatore2 ci è andato vicino");
}
else if (differenza1 < differenza2 && differenza1 != 0) {
    console.log("giocatore1 ci è andato vicino");
}
else if (giocatore1 == giocatore2) {
    console.log("Pareggio");
}
else if (giocatore1 == numero) {
    console.log("giocatore1 ha vinto!");
}
else if (giocatore2 == numero) {
    console.log("giocatore2 ha vinto!");
}

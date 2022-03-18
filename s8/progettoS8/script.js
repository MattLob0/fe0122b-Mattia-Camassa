fetch("Abbigliamento.json")
    .then(function (response) { return response.json(); })
    .then(function (abbigliamento) {
    //console.log(abbigliamento);
    abbigliamento.forEach(function (element) {
        //console.log(element)
        new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
    });
});
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getSaldoCapo = function () {
        return (this.saldo * this.prezzoivainclusa) / 100;
    };
    Abbigliamento.prototype.getAcquistoCapo = function () {
        return (this.prezzoivainclusa - this.getSaldoCapo());
    };
    return Abbigliamento;
}());
var tShirt = new Abbigliamento(2, 4111, "estate", "t-shirt", 1251, 6, "Rosso", 5.50, 6.71, "magazzino", 30);
//console.log(tShirt);
var tShirt1 = new Abbigliamento(1, 2121, "primavera", "cardigan", 1231, 5, "Nero", 18.50, 22.57, "negozio", 45);
//console.log("Prezzo con Iva: " + tShirt1.prezzoivainclusa,"Quantità: " + tShirt1.quantita)
var tShirt2 = new Abbigliamento(3, 1181, "inverno", "felpa", 1229, 8, "beige", 17.50, 21.35, "negozio", 50);
//console.log("Codice prodotto: " + tShirt2.codprod, "Prezzo Iva esclusa:" + tShirt2.prezzoivaesclusa)
var acquisto = tShirt1.getSaldoCapo();
var finale = tShirt.getAcquistoCapo();
console.log(finale);
console.log(acquisto);

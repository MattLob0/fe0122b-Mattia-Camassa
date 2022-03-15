//son è la superclasse
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function () {
        var add = document.querySelector('#add');
        var versamento = Number(add.value);
        this.balanceInit += versamento;
        depoS.innerHTML = this.balanceInit;
    };
    SonAccount.prototype.oneWhitDraw = function () {
        var remove = document.querySelector('#remove');
        var prelievo = Number(remove.value);
        this.balanceInit -= prelievo;
        depoS.ineerHTML = this.balanceInit;
    };
    return SonAccount;
}());
var depoS = document.querySelector('#conto2');
var contoS = new SonAccount(0);
depoS.innerHTML = contoS.balanceInit;
document.querySelector('#versamento').addEventListener('click', function () {
    contoS.oneDeposit();
    var add = document.querySelector('#add');
    add.value = '';
});
document.querySelector('#prelievo1').addEventListener('click', function () {
    contoS.oneWhitDraw();
    var remove = document.querySelector('#remove');
    remove.value = '';
});

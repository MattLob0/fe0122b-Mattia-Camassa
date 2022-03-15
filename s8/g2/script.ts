//son è la superclasse
class SonAccount {
    public balanceInit: number
    constructor(balanceInit: number) {

        this.balanceInit = balanceInit;
    }

    oneDeposit() {
        var add: any = document.querySelector('#add');
        var versamento = Number(add.value)
        this.balanceInit += versamento;
        depoS.innerHTML = this.balanceInit;
    }

    oneWhitDraw(){
        var remove:any = document.querySelector('#remove');
        var prelievo = Number(remove.value);
        this.balanceInit -= prelievo;
        depoS.ineerHTML = this.balanceInit;
        
    }
}

var depoS: any = document.querySelector('#conto2');
var contoS = new SonAccount(0);

depoS.innerHTML = contoS.balanceInit;


document.querySelector('#versamento').addEventListener('click',function(){
    contoS.oneDeposit();
    var add:any = document.querySelector('#add');
    add.value = ''
})
document.querySelector('#prelievo1').addEventListener('click',function(){
    contoS.oneWhitDraw();
    var remove:any = document.querySelector('#remove');
    remove.value = ''
    
})






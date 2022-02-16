

function pensione(){
    var pensione = document.getElementById("età").value;

    if  (pensione < 65)
     {
        alert( "Vai a lavorare terun!!");
    }
    else  (pensione >= 65)
    {
        alert( "Sei libero di andare in pensione!!");
    }
}

 freccia = () => 'Hello World';
 alert(freccia());

 
//funzioni dentro funzioni
 function conteggio(){
    var cane = 3;
    var gatto = 4;
    var lumaca =5;

    function somma(){
        var cane = 3;
        var gatto = 4;
    }

    return somma()
 }

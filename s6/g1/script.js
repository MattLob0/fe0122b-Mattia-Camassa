// Quando il documento è pronto...
$(document).ready(() => {
    alert("Compila i campi per iscriverti!")
})

//gestisco il click sul pulsante Iscriviti
$('#iscr-news').click(() => {
    $(validate())

});
    




// inizializzo una variabile di controllo a true
function validate(){
    var nome = document.getElementById('nome')
    var email= document.getElementById('email-1', 'email-2')
    
    if(nome.value == ""){
       alert('compila i campi per proseguire')
        return false;
    }
    if(email.value == ""){
        alert('compila i campi per proseguire')
        
        return false;
   
    }
    return true;
    
    
}

// utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto

// nell'else uso next e text per impostare l'elemento span adiacente

// assegno a due variabili il valore dei due campi email

// ripeto la condizione nel nome anche per l'email


// nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

//invio del form se tutti i campi sono validi

//gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
//posizionare un asterisco per identificare il campo obbligatorio. 
class User {
    constructor(n, c, e, p) {
        this.nome = n;
        this.cognome = c;
        this.email = e;
        this.password = p;
    }
}


var bauMiao = document.getElementById('btn');


bauMiao.addEventListener('click', function (e) {

    e.preventDefault() //blocco per il reaload della pagina al click sul tasto submit



    //Fase 1 : Creazione variabili
    let nome = document.getElementById('nome').value
    let cognome = document.getElementById('cognome').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value

    let campi = document.querySelectorAll('input')
    let formValido = true;
    console.log(campi);

    //Fase 2: Verifica validità dei campi
    campi.forEach(element => {
        if (element.value == '') {
            formValido = false; //per validare il form
            element.nextElementSibling.textContent = 'Inserisci i dati'

        } else {
            element.nextElementSibling.textContent = ''
        }
    });
    if (formValido) {
        //FASE 3: creazione di un oggetto user tramire le variabili di cui sopra

        let utente = new User(nome, cognome, email, pass)
        console.log(utente)

        //FASE 4: salvataggio  dell oggetto di cui fase 3

        salva(utente);
        location.href = "pagina1.html"

    }
});





function salva(u) {

    let elementiSalvati = localStorage.getItem('utenti')
    console.log(elementiSalvati)
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
    console.log(db)
    db.push(u)

    localStorage.setItem('utenti', JSON.stringify(db))



}
//preleviamo la lista utenti nel localstorage e far mostrare nel broswer la lista utenti

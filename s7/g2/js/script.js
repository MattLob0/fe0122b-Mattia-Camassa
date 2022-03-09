class User {
    constructor(nome, cognome, email, password) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
    }
}


var bauMiao = document.getElementById('btn');


    bauMiao.addEventListener('click', function (e) {

        e.preventDefault() //blocco per il reaload della pagina al click sul tasto submit


        let nome = document.getElementById('nome').value
        let cognome = document.getElementById('cognome').value
        let email = document.getElementById('email').value
        let pass = document.getElementById('password').value


        if (nome == '') {
            document.querySelector('#nome ~ div ').innerHTML = 'Inserisci i dati'

        } else {
            document.querySelector('#nome ~ div ').innerHTML = ''
            localStorage.setItem('nome', JSON.stringify(nome))
        }
        if (cognome == '') {
            document.querySelector('#cognome ~ div ').innerHTML = 'Inserisci i dati'

        } else {
            document.querySelector('#cognome ~ div ').innerHTML = ''
            localStorage.setItem('cognome', JSON.stringify(cognome))
        }
        if (email == '') {
            document.querySelector('#email ~ div ').innerHTML = 'Inserisci i dati'

        } else {
            document.querySelector('#email ~ div ').innerHTML = ''
            localStorage.setItem('email', JSON.stringify(email))

        }
        if (password == '') {
            document.querySelector('#password ~ div ').innerHTML = 'Inserisci i dati'

        } else {
            document.querySelector('#password~ div ').innerHTML = ''
            localStorage.setItem('password', JSON.stringify(pass))
        }
    })




//esercizio 1 nel form se le validazini vanno a buon fine, utilizza la classe user appena creata per creare un utente con i dati presenti nel form
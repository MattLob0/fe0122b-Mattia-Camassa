var bauMiao = document.getElementById('btn');




bauMiao.addEventListener('click', function (e) {
    e.preventDefault()//blocco per il reaload della pagina al click sul tasto submit

    let nome = document.getElementById('nome').value
    let cognome = document.getElementById('cognome').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value

    if (nome == '') {
        document.querySelector('#nome ~ div ' ).innerHTML = 'Inserisci i dati'

    }else {
        document.querySelector('#nome ~ div ' ).innerHTML = ''
    }
    if (cognome == '') {
        document.querySelector('#cognome ~ div ' ).innerHTML = 'Inserisci i dati'

    }else {
        document.querySelector('#cognome ~ div ' ).innerHTML = ''
    }
    if (email == '') {
        document.querySelector('#email ~ div ' ).innerHTML = 'Inserisci i dati'

    }else {
        document.querySelector('#email ~ div ' ).innerHTML = ''

    }
    if (pass == '') {
        document.querySelector('#password ~ div ' ).innerHTML = 'Inserisci i dati'

    }else {
        document.querySelector('#password~ div ' ).innerHTML = ''
    }






})
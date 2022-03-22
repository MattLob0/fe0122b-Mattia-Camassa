fetch("regioni.json")
    .then(response => response.json())
    .then(risposta => {
        console.log(risposta);


        
        selectOption(risposta)
        let click: any = document.querySelector('#regioni')

        fetch('province.json')
            .then(response => response.json())
            .then(risposta1 => {
                console.log(risposta1)

                selectOption1(risposta1)
                

            })

    })




let selectRegioni: any = document.querySelector('#regioni')

function selectOption(p: any) {
    for (var i = 0; i < p.length; i++) {
        var option = document.createElement('option')
        option.setAttribute('value', p[i].prov_regione)
        option.innerText = `${p[i].prov_regione.toUpperCase()}`
        selectRegioni.append(option)
    }


}

let selectProv: any = document.querySelector('#province')

function selectOption1(e: any) {
    for (var i = 0; i < e.length; i++) {
        var option1 = document.createElement('option')
        option1.setAttribute('value', e[i].prov_nome)
        option1.innerText = `${e[i].prov_nome.toUpperCase()}`
        selectProv.append(option1)
    }
}
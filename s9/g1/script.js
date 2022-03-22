fetch("regioni.json")
    .then(function (response) { return response.json(); })
    .then(function (risposta) {
    console.log(risposta);
    selectOption(risposta);
    var click = document.querySelector('#regioni');
    fetch('province.json')
        .then(function (response) { return response.json(); })
        .then(function (risposta1) {
        console.log(risposta1);
        selectOption1(risposta1);
    });
});
var selectRegioni = document.querySelector('#regioni');
function selectOption(p) {
    for (var i = 0; i < p.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', p[i].prov_regione);
        option.innerText = "".concat(p[i].prov_regione.toUpperCase());
        selectRegioni.append(option);
    }
}
var selecProv = document.querySelector('#province');
function selectOption1(e) {
    for (var i = 0; i < e.length; i++) {
        var option1 = document.createElement('option');
        option1.setAttribute('value', e[i].prov_nome);
        option1.innerText = "".concat(e[i].prov_nome.toUpperCase());
        selecProv.append(option1);
    }
}

function miaFunzione(){
    document.getElementById('mioBasso').classList.toggle('show');

}
window.onclick = function(event) {
    if (!event.target.matches('.btn')){
        var basso = document.getElementsByClassName("miobasso-content");
        var i;
        for (i = 0; i < basso.length; i++){
            var apriBasso = basso [i];
            if (apriBasso.classList.contains('show')){
                apriBasso.classList.remove('show');
            }
        }
    }
}


let bold = document.querySelector('#bold')
let color= document.querySelector('#color')
let style = document.querySelector('#style')
let size = document.querySelector('#size')

bold.addEventListener('click', function(){
    let target = document.querySelector('#target')
    target.style.fontWeight = 'bold'
})

color.addEventListener('click',function(){
    let target = document.querySelector('#target')
    target.style.color = 'black'
    
})
style.addEventListener('click',function(){
    let target = document.querySelector('#target')
    target.style.fontFamily = 'arial'
    
})
size.addEventListener('click',function(){
    let target = document.querySelector('#target')
    target.style.fontSize = '100px'

})


document.querySelector('#add')
.addEventListener('click', function(){
    
    var valore = document.querySelector('#testo').value
    var target = document.querySelector('#lista')
    
    var div = document.createElement('div')//<div></div>
    div.innerText = valore
    div.classList.add('todo')
    
    div.addEventListener('click', function(){
        div.remove()
    })
    
    //target.prepend(div)     
    target.appendChild(div)    
    
    document.querySelector('#testo').value = ''
    
}) 
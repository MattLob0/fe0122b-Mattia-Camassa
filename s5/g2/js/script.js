function calcolailbudget() {
    var budget = 1000;
    var spesa = Math.floor(Math.random()*10)
    
    while (budget >= 0) {
        budget = budget - spesa;
        
        
        console.log(budget)
        
        
        if (budget >= 700 && budget < 600) {
            document.getElementById('test').innerHTML = 'Puoi continuare a spendere!'
            break
            
        }
        if (budget <= 500 && budget > 400) {
            document.getElementById('test1').innerHTML = 'Il tuo budget è al 50%!'
            
            
        }

    }
    
}
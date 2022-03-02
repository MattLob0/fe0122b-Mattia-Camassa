//creo il contenitore della scacchiera
$("<div></div>")
    .attr('id', 'scacchiera') //diamo un id al div con "attr"
    .css({
        border: '1px solid #000',
        height: '400px',
        width: '400px',
        position:'relative'
    })
    .appendTo('body')

    //creo le caselle

    for(let x = 0; x <8;x++){
        for(let y = 0; y <8;y++){

            let modulo= (x + y) %2
            let bg = modulo == 0 ? '#000' : '#fff'

            $("<div></div>")
            .css({
                height: '100px',
                width: '100px',
                top: x * 100+'px',
                left: y *100+'px',
                backgroundColor: bg,
                position:'absolute',
                border: '1px solid #000'
            }).appendTo('#scacchiera')
        }
    }
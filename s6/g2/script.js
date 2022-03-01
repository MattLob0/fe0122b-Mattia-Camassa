$(()=>{
  $("h2").on('click',function(){
      $(this).next().toggle()
      $(this).toggleClass('meno');//per mostrare il meno nel menù


  })
})
$(document).ready(function(event){
    $(".click1").click(function(){
        $(".togglepara1").toggle(3000);
    });
    $(".click2").click(function(){
        $(".togglepara2").toggle(3000);
    });
    $(".click3").click(function(){
        $(".togglepara3").toggle(3000);
    });

    
    event.preventDefault();
});
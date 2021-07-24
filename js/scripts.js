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
    $("#img1").hover(function(){
        $("#hover1").show();
    });
    $("#img1").mouseout(function(){
        $("#hover1").hide();
    });
    $("#img2").hover(function(){
        $("#hover2").show();
    });
    $("#img2").mouseout(function(){
        $("#hover2").hide();
    });
    $("#img3").hover(function(){
        $("#hover3").show();
    });
    $("#img3").mouseout(function(){
        $("#hover3").hide();
    });
    $("#img4").hover(function(){
        $("#hover4").show();
    });
    $("#img4").mouseout(function(){
        $("#hover4").hide();
    });

    $("#img5").hover(function(){
        $("#hover5").show();
    });
    $("#img5").mouseout(function(){
        $("#hover5").hide();
    });
    $("#img6").hover(function(){
        $("#hover6").show();
    });
    $("#img6").mouseout(function(){
        $("#hover6").hide();
    });
    $("#img7").hover(function(){
        $("#hover7").show();
    });
    $("#img7").mouseout(function(){
        $("#hover7").hide();
    });
    $("#img8").hover(function(){
        $("#hover8").show();
    });
    $("#img8").mouseout(function(){
        $("#hover8").hide();
    });
    $("#submit").click(function () {
        var yourFullName = $("#name").val();
        var yourEmail = $("#email").val();
        var yourMessage = $("#message").val();
        if (yourFullName == '' || yourEmail == '' || yourMessage == '') {
            alert("check all fields");
        } else {
            alert("Successfully Submitted!");
        }
    })
    event.preventDefault();
});

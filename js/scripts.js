$(document).ready(function(){
    $("#design").click(function(){
        $("#des").toggle();
        $("#design").toggle();
    });
    $("#des").click(function(){
        $("#design").toggle();
        $("#des").toggle();
    });

    $("#development").click(function(){
        $("#dev").toggle();
        $("#development").toggle();
    });
    $("#dev").click(function(){
        $("#development").toggle();
        $("#dev").toggle();
    });

    $("#product").click(function(){
        $("#pro").toggle();
        $("#product").toggle();
    });
    $("#pro").click(function(){
        $("#product").toggle();
        $("#pro").toggle();
    });

    $(".paragraph4").hide();
    $(".photo4").animate({
        opacity:1
    });

    $(".photo4").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".paragraph4").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph4").fadeOut();
    });

    $(".paragraph3").hide();
    $(".photo3").animate({
        opacity:1
    });

    $(".photo3").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".paragraph3").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph3").fadeOut();
    });

    $(".paragraph2").hide();
    $(".photo2").animate({
        opacity:1
    });

    $(".photo2").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".paragraph2").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph2").fadeOut();
    });

    $(".paragraph1").hide();
    $(".photo1").animate({
        opacity:1
    });

    $(".photo1").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".paragraph1").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph1").fadeOut();
    });

    $(".paragraph5").hide();
    $(".photo5").animate({
        opacity:1
    });

    $(".photo5").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".paragraph5").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph5").fadeOut();
    });

    $(".paragraph6").hide();
    $(".photo6").animate({
        opacity:1
    });

    $(".photo6").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".paragraph6").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph6").fadeOut();
    });

    $(".paragraph7").hide();
    $(".photo7").animate({
        opacity:1
    });

    $(".photo7").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".paragraph7").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph7").fadeOut();
    });

    $(".paragraph8").hide();
    $(".photo8").animate({
        opacity:1
    });

    $(".photo8").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".paragraph8").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph8").fadeOut();
    });

    $("#send").click(function(event){
        var name=$("#inputName").val();
        var email=$("#inputEmail").val();
        var message=$("#inputMessage").val();
        if((name==="")||(email==="")||(message==="")){
            alert("Please, fill the required fields!");
        }
        else{
            alert(name+ ", we have received your message. Thank you for reaching out to us!");
        }
        event.preventDefault();
    });
 
});

// $("#story").show();

//       event.preventDefault();
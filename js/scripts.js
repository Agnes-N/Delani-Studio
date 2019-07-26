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

    $(".image4").hide();
    $(".photo4").animate({
        opacity:1
    });

    $(".photo4").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".image4").fadeIn();
    },function(){
        $(this).stop().animate({opacity:.2},500);
        $(".image4").fadeOut();
    });

    $(".image3").hide();
    $(".photo3").animate({
        opacity:1
    });

    $(".photo3").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".image3").fadeIn();
    },function(){
        $(this).stop().animate({opacity:.2},500);
        $(".image3").fadeOut();
    });

    $(".image2").hide();
    $(".photo2").animate({
        opacity:1
    });

    $(".photo2").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".image2").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".image2").fadeOut();
    });

    $(".image1").hide();
    $(".photo1").animate({
        opacity:1
    });

    $(".photo1").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".image1").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".image1").fadeOut();
    });

    $(".image5").hide();
    $(".photo5").animate({
        opacity:1
    });

    $(".photo5").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".image5").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".image5").fadeOut();
    });

    $(".image6").hide();
    $(".photo6").animate({
        opacity:1
    });

    $(".photo6").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".image6").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".image6").fadeOut();
    });

    $(".image7").hide();
    $(".photo7").animate({
        opacity:1
    });

    $(".photo7").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".image7").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".image7").fadeOut();
    });

    $(".image8").hide();
    $(".photo8").animate({
        opacity:1
    });

    $(".photo8").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".image8").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".image8").fadeOut();
    });
});


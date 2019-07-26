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

    $(".project").hide();
    $("photo").animate({
        opacity:1
    });

    $(".photo").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $(".project").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".project").fadeOut();
    });
});
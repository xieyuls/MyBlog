/**
 * Created by zjf on 2016/12/1.
 */


var height=$(window).height();
var width=$(window).width();  
$(".wrapper").css("height",(height)*2);
$(".intro").css("height",height);
$(".down,.down img").css("top",0.8*height);
$(".up,.up img").css("top",0.2*height);

$(".content1").css({"height":0.4*height,"width":0.4*width});
$(".content2").css({"height":0.4*height,"width":0.4*width});

$(".up").click(function(){
    $('html,body').animate({scrollTop: "0px"}, 800);
});
$(".down").click(function(){
	
    $('html,body').animate({scrollTop: height+"px"}, 800);
});




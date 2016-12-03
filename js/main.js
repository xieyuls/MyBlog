/**
 * Created by zjf on 2016/12/1.
 */


var height=$(window).height();
var width=$(window).width();  
$(".wrapper").css("height",(height)*2);
$(".intro").css("height",height);
$(".intro_button").css("top",0.8*height);
$(".content_button").css("top",0.2*height);
$(".content1").css({"height":0.4*height,"width":0.4*width});
$(".content2").css({"height":0.4*height,"width":0.4*width});
$(".intro_button").click(function(){
    $('html,body').animate({scrollTop: height}, 800);
});

$(".content_button").click(function(){
    $('html,body').animate({scrollTop: '0px'}, 800);
});


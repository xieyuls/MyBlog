/**
 * Created by zjf on 2016/12/1.
 */

var height=$(window).height(); 

window.onload = function() {
	$(".wrapper").css("height",(height)*2);
	$(".intro").css("height",height);
	$(".intro_button").css("top",0.8*height);
    $(".content_button").css("top",0.2*height);
}

$(".intro_button").click(function(){
    $('html,body').animate({scrollTop: height}, 800);
    console.log($(window).height());
    console.log($(".intro").css("height"));
});

$(".content_button").click(function(){
    $('html,body').animate({scrollTop: '0px'}, 800);
    console.log(height);
});
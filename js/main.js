/**
 * Created by zjf on 2016/12/1.
 */
$(".intro_button").click(function(){
    $('html,body').animate({scrollTop: '800px'}, 800);
    $(".content_button img").fadeIn(3500);
});

$(".content_button").click(function(){
    $('html,body').animate({scrollTop: '0px'}, 800);
    $(".intro_img").fadeIn(3500);
});
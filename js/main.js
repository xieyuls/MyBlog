/**
 * Created by zjf on 2016/12/1.
 */

//初始化时读取浏览器可用高度及宽度，设置图片大小及位置
var height=$(window).height();
var width=$(window).width();
var count=0;
$(".wrapper").css("height",(height)*3);
$(".intro").css("height",height);
$(".content").css("height",height);
$("#map").css("height",height);
// $(".down,.down img").css("top",0.8*height);
// $(".up,.up img").css("top",0.2*height);
$(".select").css("top",0.5*height);
$('html,body').animate({scrollTop: '0px'}, 800);
$(".select1").css("opacity",1);
$(".content1,.content2").css({"height":0.4*height,"width":0.4*width});
$(".content1 img,.content2 img").css({"height":0.32*height,"width":0.38*width});


//上下箭头事件
// $(".up").click(function(){
//     if(count==0) count=0;
//     else count=count-1;
//     console.log($('.content').offset());
//     $('html,body').animate({scrollTop: '0px'}, 800);
// });
// $(".down").click(function(){
//     if(count==2) count=2;
//     else count=count+1;
//     console.log($('.content').offset());
//     $('html,body').animate({scrollTop: height}, 800);
// });

//界面跳转选择
$(".select1").click(function(){
    $('html,body').animate({scrollTop: '0px'}, 800);
    $(".select1").css("opacity",1);
    $(".select2").css("opacity",0.2);
    $(".select3").css("opacity",0.2);

});
$(".select2").click(function(){
    $('html,body').animate({scrollTop: height}, 800);
    $(".select1").css("opacity",0.2);
    $(".select2").css("opacity",1);
    $(".select3").css("opacity",0.2);
});
$(".select3").click(function(){
    $('html,body').animate({scrollTop: 2*height}, 800);
    $(".select1").css("opacity",0.2);
    $(".select2").css("opacity",0.2);
    $(".select3").css("opacity",1);
});





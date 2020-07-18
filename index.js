
$("document").ready(function(){
  $(".up").next().addClass("up-rate");
  $(".down").next().addClass("down-rate");
});
$(".switch").on("click", function (e){
  $("div .box1").toggleClass("box2");
  $("#navigatorbar").toggleClass("top-color-dark");
  $("body").toggleClass("body-dark");
  $("p").toggleClass("paragraph-dark");
  $(".headings-light").toggleClass("headings-dark").removeClass(".headings-light");
  e.preventDefault();
});
$(".box1").on("mouseover",function(){
  $(this).addClass("checked");
});
$(".box1").on("mouseout",function(){
  $(this).removeClass("checked");
});

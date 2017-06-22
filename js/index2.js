$(".nav-toggle").click(function() {
  if($(".nav-menu").hasClass("is-active")){
    $(".nav-menu").removeClass("is-active");
    $(".nav-menu").children().removeClass("r");
  }else{
    $(".nav-menu").addClass("is-active");
    $(".nav-menu").children().addClass("r");
  }
});

$('#owl-demo2').owlCarousel({
  nav: true,
  items: 1,
  margin: 0
});

$(".owl-prev").addClass("next1").text("");
$(".owl-next").addClass("prev1").text("");
$(".owl-nav").removeClass("disabled");

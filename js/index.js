$(".nav-toggle").click(function() {
  if($(".nav-menu").hasClass("is-active")){
    $(".nav-menu").removeClass("is-active");
    $(".nav-menu").children().removeClass("r");
  }else{
    $(".nav-menu").addClass("is-active");
    $(".nav-menu").children().addClass("r");
  }
});

$('#owl-demo').owlCarousel({
  nav: true,
  items: 2,
  margin: 56,
  responsiveClass: true,
  responsive:{
       0:{
           items:1,
           nav:true
       },
       600:{
           items:1,
           nav:true
       },
       1000:{
           items:2,
           nav:false,
           loop:false
       }
   }
});

$(".owl-prev").text("");
$(".owl-next").text("");
$(".owl-nav").removeClass("disabled");

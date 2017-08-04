$(".nav-toggle").click(function() {
  if($(".nav-menu").hasClass("is-active")){
    $(".nav-menu").removeClass("is-active");
    $(".nav-menu").children().removeClass("r");
  }else{
    $(".nav-menu").addClass("is-active");
    $(".nav-menu").children().addClass("r");
  }
});

$(".mostrar").click(function(){
  console.log($(".e").hasClass("es"))
  $(".e").addClass("es");
  $(".e").removeClass("animated fadeInLeft");
  var next = $(this).next();
  next.removeClass("es");
  next.addClass("animated fadeInLeft");
  if($(this).next().data("repeat")){
    next.next().removeClass("es");
    next.next().addClass("animated fadeInLeft");
  }
});

$('#owl-demo').owlCarousel({
  items: 2,
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
           nav:true,
           loop:false
       }
   },
});



$(".owl-prev").text("");
$(".owl-next").text("");

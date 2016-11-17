// Uncomment to initialise WOW.js
new WOW().init();

// Owl Carousel initialisation
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1
  });
  // This adds an additional carousel. Remove/comment out if not needed
  // $(".alps-carousel").owlCarousel({
  //   items: 1,
  //   dots: false,
  //   autoplay: true,
  //   animateOut: 'fadeOut'
  // }); //

});

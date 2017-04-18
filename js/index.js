// Uncomment to initialise WOW.js
new WOW().init();

$(document).ready(function(){
  $('.carousel').slick({
    dots: true
  });
});

  var ukeVid = document.getElementById('uke');

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#uke", duration: 200})
        .addTo(controller)
        .addIndicators() // add indicators (requires plugin)

        .on("enter", function () {
          ukeVid.play();
        })
        .on("leave", function () {
          ukeVid.pause();
        })

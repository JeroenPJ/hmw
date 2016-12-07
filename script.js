$(document).ready(function(){
  function one() {
    $('body').append("<div id='one' class='bullet black align-center op-top'></div><div id='two' class='bullet black align-center op-bottom'></div>");
    $('.bullet').css({ left: ($(window).width() - 15) / 2 })
                .animate({ top: ($(window).height() - 15) / 2 },
                         1000, "easeInOutQuad");

    setTimeout(two, 1000);
  }

  function two() {
    $('#one').animate({
      "width": "4000px",
      "height": "4000px",
      "left": ($(window).width() - 4000) / 2,
      "top": ($(window).height() - 4000) / 2
    }, 700, "easeInQuad");

    $('#two').removeClass("black").addClass("white")
             .animate({
                "left": ($(window).width() - 500) / 2,
                "width": "500px"
              }, 500, "easeInOutQuad");

    setTimeout(three, 700);
  }

  function three() {
    $('body').addClass("black");
    $('#one').remove();
    $('#two').animate({
      "top": ($(window).height() + 100) / 2,
      "height": "1px"
    }, 800, "easeInOutQuad");

    setTimeout(four, 800);
  }

  function four() {
    $('body').append("<h1>" +
                      "<span id='h'>H</span>" +
                      "<span id='a1'>a</span>" +
                      "<span id='r1'>r</span>" +
                      "<span id='r2'>r</span>" +
                      "<span id='i'>i</span>" +
                      "<span id='e'>e</span>" +
                      "<span id='t'>t</span> " +
                      "<span id='w'>W</span>" +
                      "<span id='a2'>a</span>" +
                      "<span id='m'>m</span>" +
                      "<span id='s'>s</span>" +
                      "</h1>")
             .animate({
      "background-color": "#1a1a1a"
    }, 1400, "easeInOutQuad");

    $('h1').css({
      "left": ($(window).width() - $('h1').width()) / 2,
      "top": ($(window).height() - $('h1').height()) / 2
    });

    var text_color = "#fff";
    var duration = 200;
    var easing = "easeInOutQuad";

    $('#h').animate({ "color": text_color }, duration, easing);
    setTimeout(function(){ $('#a1').animate({ "color": text_color }, duration, easing); }, duration*0.5);
    setTimeout(function(){ $('#r1').animate({ "color": text_color }, duration, easing); }, duration*1);
    setTimeout(function(){ $('#r2').animate({ "color": text_color }, duration, easing); }, duration*1.5);
    setTimeout(function(){ $('#i').animate({ "color": text_color }, duration, easing); }, duration*2);
    setTimeout(function(){ $('#e').animate({ "color": text_color }, duration, easing); }, duration*2.5);
    setTimeout(function(){ $('#t').animate({ "color": text_color }, duration, easing); }, duration*3);
    setTimeout(function(){ $('#w').animate({ "color": text_color }, duration, easing); }, duration*4);
    setTimeout(function(){ $('#a2').animate({ "color": text_color }, duration, easing); }, duration*4.5);
    setTimeout(function(){ $('#m').animate({ "color": text_color }, duration, easing); }, duration*5);
    setTimeout(function(){ $('#s').animate({ "color": text_color }, duration, easing); }, duration*5.5);
  }

  one();
});

/*

function one() {


    setTimeout(two, 500);
  }

*/

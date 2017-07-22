$(document).ready(function(){

  // Add scrollspy to <body>
  $('body').scrollspy({
    target: ".navbar",
    offset: 5
  });

//Smooth scrollspy
// $('div > ul > li > a, .navbar-brand').bind('click', function() {
//   $('html, body').stop().animate({
//     scrollTop: $($(this).attr('href')).offset().top - 50
//   }, 1500, 'easeInOutExpo');
//   event.preventDefault();
// });
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//flip button

  $('.animated').click(function() {
    var heading =  $(this);
    heading.removeClass('flipInX');
    setTimeout(function() {
      heading.addClass('flipInX');
    }, 10);
  });

  //Owl Carousel
  $("#work").owlCarousel({
    loop: true,
    center:  true,
    margin: 5,
    stagePadding: 50,
    padding: 0,
    responsiveClass:true,
    LazyLoad: true,
    lazyeffect: "fade",
    nav: true,
    autoPlay: 4000, //Set AutoPlay to 3 seconds
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1,
        nav:true,
        stagePadding:25,
      },
      320:{
        items: 1,
        stagePadding:45,
      },
      400:{
        items: 1,
        stagePadding: 70,
      },
      480:{
        items:2,
        nav:true,
        stagePadding: 0,
      },
      600:{
        items: 2,
        nav: true,
        stagePadding: 25,
      },
      700:{
        items:3,
        stagePadding: 0,
      },
      800:{
        items:3,
        nav:true,
        stagePadding:10,
        center: true,
        // loop:false
      },
      1000:{
        items:4,
        stagePadding: 0,
      },
      1200:{
        items:4,
        nav:true,
        // loop:false
        stagePadding: 90,
      },
      1400:{
        items:5,
        nav:true,
        stagePadding: 75,
        // loop:false
      },
      1800:{
        items:7,
        stagePadding:50,
        padding: 0,
      },
    }
  });

// jot form
window.handleIFrameMessage = function(e) {
    var args = e.data.split(":");
    var iframe = false;
    if (args.length > 2) {
        iframe = document.getElementById("JotFormIFrame-" + args[2]);
    } else {
        iframe = document.getElementById("JotFormIFrame");
    }
    if (!iframe) return;
    switch (args[0]) {
        case "scrollIntoView":
            iframe.scrollIntoView();
            break;
        case "setHeight":
            iframe.style.height = args[1] + "px";
            break;
        case "collapseErrorPage":
            if (iframe.clientHeight > window.innerHeight) {
                iframe.style.height = window.innerHeight + "px";
            }
            break;
        case "reloadPage":
            window.location.reload();
            break;
    }
    var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
    if (isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
        var urls = {
            "docurl": encodeURIComponent(document.URL),
            "referrer": encodeURIComponent(document.referrer)
        };
        iframe.contentWindow.postMessage(JSON.stringify({
            "type": "urls",
            "value": urls
        }), "*");
    }
};
if (window.addEventListener) {
    window.addEventListener("message", handleIFrameMessage, false);
} else if (window.attachEvent) {
    window.attachEvent("onmessage", handleIFrameMessage);
}
if (window.location.href && window.location.href.indexOf("?") > -1) {
    var ifr = false;
    if (args.length > 2) {
        ifr = document.getElementById("JotFormIFrame-" + args[2]);
    } else {
        ifr = document.getElementById("JotFormIFrame");
    }
    var get = window.location.href.substr(window.location.href.indexOf("?") + 1);
    if (ifr && get.length > 0) {
        var src = ifr.src;
        src = src.indexOf("?") > -1 ? src + "&" + get : src + "?" + get;
        ifr.src = src;
    }
}

//Wow.js
new WOW().init();

//Navbar Scroll color changes
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#header');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          // $(".navbar-default").css('background-color', 'transparent');
          $(".navbar-default").css('background-color', 'transparent');
        }


   });
 }
});
//Navbar color changes
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#work');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          // $(".navbar-default").css('background-color', '#b95a24');
          $(".navbar-default").css('background-color', '#095884');
       }
   });
 }
});
//navbar remove highlight of scrollbar items when selecting another option
$(function() {
     $('#nav li a').click(function() {
        $('#nav li').removeClass();
        $($(this).attr('href')).addClass('active');
     });
  });

}); // end doc ready

$(function(){
  
    
     // navbar bg
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('navbg');
    }
    else {
       $('.navbar').removeClass('navbg'); 
    }
}); 
    
    
    //venobox js
    $('.venobox').venobox(); 
    
    
   //banner-slick js 
$('.banner-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  fade: true,
  delay: 2000,
  dots: true,
  autoplaySpeed: 2000,
});

    
    //team-slider js
    
$('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  responsive: [
                {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
    },
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
    }
  ]
});
    
 
    
$('.peoplesay-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  fade: true,
  delay: 2000,
  dots: true,
  autoplaySpeed: 2000,
});    
    
    
  //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });   
    
    //wow js
    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
   
    //preloader js
    $(window).on('load', function(){
        $('.preloader-inner').delay(1000).fadeOut(800);
    });    
    

    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
$(document).ready(function() {
    'use strict';
    // Scroll To Top
    $('body').prepend('<div class="go-top"><span id="top"><img src="assets/img/scroll-to-top.svg" alt="top" /></span></div>');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $('.go-top').fadeIn(600);
        } else {
            $('.go-top').fadeOut(600);
        }
    });
    $('#top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800, 'easeInQuad');
        return false;
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // Service CArousel
    var owl = $('.service-area .owl-carousel');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: false,
        mouseDrag: false,
        pullDrag: false,
         items: 4,
        responsive: {
            0: {
                items: 1,
                mouseDrag: true,
                pullDrag: true,
                loop: true,
            },
            600: {
                items: 3,
                mouseDrag: true,
                pullDrag: true,
                loop: true,
            },
            1000: {
                items: 4,
                mouseDrag: false,
                pullDrag: false,
                loop: true,
            }
        }
    });
    // Testimonial
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            }


        ]
    });
    $('.slider-nav').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false,
                    centerMode: true,
                    focusOnSelect: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '60px',
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                    focusOnSelect: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                    centerPadding: '10px',
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                    focusOnSelect: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '80px',
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                    focusOnSelect: true,
                    arrows: false,
                }
            }

        ]
    });

});
// Onepage Nav
$(document).scroll(function() {
    // Onepage Nav
    $('#nav, #overlay ul').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 900,
        scrollOffset: 0,
        scrollThreshold: 0.3,
        filter: ':not(.no-scroll)'
    });

});



// Mobile Menu
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});



// Preloader
jQuery(window).load(function() {
    $('#preloader').fadeOut('100');
});


// Fixed Menu
$(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
        $('.header-area,.mobile-menu-area').addClass('menu_fixed');
    } else if ($(window).scrollTop() === 0) {
        $('.header-area,.mobile-menu-area').removeClass('menu_fixed');
    }
});

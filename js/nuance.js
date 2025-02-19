jQuery(function ($) {
$(document).ready(function() {
    $('.n-num').counterUp({
        time: 1200,
        delay: 10,
    });
    // var $isotop_grid = $('.n-isotope-value').isotope({
    //     itemSelector: '.n-isotope-item',
    //     layoutMode: 'fitRows',
	// filter: '.item-5'
    // });
    // // $isotop_grid.isotope({ filter: '.all' });
    var width = $( window ).width();
    // if (width >= 768) {
    //     $('.n-isotope-filter-item').on( 'click', function() {   
    //         $('.n-isotope-filter-item').removeClass('active');
    //         $(this).addClass('active');
    //         var filterValue = $(this).attr('data-filter');
    //         $isotop_grid.isotope({ filter: filterValue });
    //         // var width = $( window ).width();
    //         // if (width <= 768) {
    //         //     var c = $('.n-isotope-value');
    //         //     $('html, body').animate({ scrollTop: $(c).offset().top -100}, 1000, "linear");
    //         //     return false;
    //         // }
    //     });
    // }   
    // if (width < 768) {
    //     $('.n-isotope-filter-item').on( 'click', function() {   
    //         $('.n-isotope-filter-item').removeClass('active');
    //         $(this).addClass('active');
    //         var classtab = $(this).attr('data-filter');
    //         $('.n-isotope-value-mobi').removeClass('active');
    //         $(classtab).addClass('active');
    //         $('.n-isotope-value-mobi-inner').slick('setPosition');
    //         return false;
    //     });
    // }

    $("#n-video_control").click(function(){
        if($("#n-video_home").get(0).paused){
            $("#n-video_home").trigger('play');
            $("#n-video_control").hide();
            $(".n-video-overlay").hide();
        }
    });
    $('#n-video_home').click(function(){
        $('#n-video_home').trigger('pause');
        $("#n-video_control").show();
        $(".n-video-overlay").show();
    });

    $('.n-menu-burger').click(function(){
        if($('.n-header-content').hasClass('menu-active')) {
            $('.n-header-content').removeClass('menu-active');
        }
        else {
            $('.n-header-content').addClass('menu-active');
        }
    });
    $('.n-nav-has-child').click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    });

    $('.n-isotope-value-mobi-inner').slick({
        infinite: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        fade: false,
        cssEase: 'linear',
    });

     $('#slideMarque').slick({
        infinite: true,
        loop: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        slideToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        fade: false,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                dots: true,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                    slidesToShow: 3,
                    dots: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                    slidesToShow: 2,
                    dots: true,

               }
            },
            {
              breakpoint: 480,
              settings: {
                    slidesToShow: 1,
                    dots: true,

               }
            }
          ]
    });

    
    $('.n-slide').slick({
        infinite: true,
        loop: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: false,
        fade: false,
        cssEase: 'linear',
    });
    if (width <= 767) {
        $('.n-listing').slick({
            infinite: true,
            loop: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slideToScroll: 1,
            autoplay: true,
            arrows: true,
            dots: false,
            fade: false,
            cssEase: 'linear',
        }); 
        $('.n-grid-video').slick({
            infinite: true,
            loop: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slideToScroll: 1,
            autoplay: false,
            arrows: true,
            dots: false,
            fade: false,
            cssEase: 'linear',
        }); 
    }
    $('.n-equipe-slide').slick({
        infinite: true,
        loop: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slideToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: false,
        fade: false,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                    slidesToShow: 1
              }
            }
          ]
    });
    if (width < 768) {
        $('.n-diagnostic-cta-listing').slick({
            infinite: true,
            loop: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slideToScroll: 1,
            autoplay: true,
            arrows: true,
            dots: false,
            fade: false,
            cssEase: 'linear',
        });
    }
    if($('.n-listing .n-listing-item').length > 3) {
        $('.n-listing').slick({
            infinite: true,
            loop: true,
            autoplaySpeed: 4000,
            slidesToShow: 3,
            slideToScroll: 1,
            autoplay: true,
            arrows: true,
            dots: false,
            fade: false,
            cssEase: 'linear',
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                        slidesToShow: 1
                  }
                }
              ]
        });
    }

   


    $(".n-scroll").click(function() {
        var c = $(this).attr("href");
        $('html, body').animate({ scrollTop: $(c).offset().top -130}, 2000, "linear");
        return false;
    });
});
});
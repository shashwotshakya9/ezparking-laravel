(function($) {
    "use strict";



    jQuery(document).ready(function($) {

        /*dropdown menu hover*/
        if (document.documentElement.clientWidth > 1200) {

            $('.navigation-box ul li.dropdown').hover(function() {
                $(this).children('ul.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
                jQuery(this).addClass('open');
              }, function() {
                $(this).children('ul.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
                jQuery(this).removeClass('open');
              });
           
            
        }



        // main slider

        // if ($('.mainslider').length) {
        //     $(".mainslider").owlCarousel({
        //         items: 1,
        //         loop: true,
        //         autoplay: true,
        //         animateOut: 'fadeOut',
        //         autoplayHoverPause: true,
        //         singleItem: true,
        //         autoplayTimeout: 6000,
        //         autoplaySpeed: 4000,
        //         //navSpeed: 500,
        //         dots: true,
        //         nav: false,
        //         responsiveClass: true,
        //         onInitialize: function(event) {
        //             if ($('.mainslider .item').length <= 1) {
        //                 this.settings.loop = false;
        //             }
        //         },
        //         responsive: {
        //             0: {
        //                 items: 1,
        //                 nav: false,
        //                 dots: true,
        //                 loop: true
        //             },
        //             600: {
        //                 items: 1,
        //                 nav: false,
        //                 dots: true,
        //                 loop: true
        //             }

        //         },
        //         navText: [
        //             '<i class="fa fa-angle-left"></i>',
        //             '<i class="fa fa-angle-right"></i>'
        //         ]
        //     });

        // }



        // $(document).ready(function() {

        //     jQuery(".mejs__button.mejs__playpause-button.mejs__play button").trigger('click');
        // });



        // we can autoplay audio, video tag
        // jQuery('audio').mediaelementplayer({
        //     success: function(player, node) {

        //         jQuery(".mejs__button.mejs__playpause-button.mejs__play button").trigger('click');
        //     }
        // });

        // video slider

        if ($('.taja-slider').length) {
            $(".taja-slider").owlCarousel({
                items: 3,
                loop: true,
                autoplay: true,
                margin: 30,
                //animateOut: 'fadeOut',
                autoplayHoverPause: true,
                singleItem: true,
                autoplayTimeout: 6000,
                autoplaySpeed: 4000,
                //navSpeed: 500,
                dots: true,
                nav: false,
                responsiveClass: true,
                onInitialize: function(event) {
                    if ($('.taja-slider .items').length <= 1) {
                        this.settings.loop = false;
                    }
                },
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                        loop: true
                    },
                    600: {
                        items: 2,
                        nav: false,
                        dots: true,
                        loop: true
                    },

                    1000: {
                        items: 4,
                        nav: false,
                        dots: true,
                        loop: true
                    }


                },
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ]
            });

        }


        // album slider

        if ($('.album-slider').length) {
            $(".album-slider").owlCarousel({
                items: 3,
                loop: true,
                autoplay: true,
                //animateOut: 'fadeOut',
                autoplayHoverPause: true,
                singleItem: true,
                autoplayTimeout: 6000,
                autoplaySpeed: 4000,
                //navSpeed: 500,
                dots: true,
                nav: false,
                responsiveClass: true,
                onInitialize: function(event) {
                    if ($('.album-slider .items').length <= 1) {
                        this.settings.loop = false;
                    }
                },
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                        loop: true
                    },
                    600: {
                        items: 2,
                        nav: false,
                        dots: true,
                        loop: true
                    },

                    1000: {
                        items: 3,
                        nav: false,
                        dots: true,
                        loop: true
                    }


                },
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ]
            });

        }

        // program slider

        if ($('.pro-slider').length) {
            $(".pro-slider").owlCarousel({

                loop: true,
                autoplay: true,
                //animateOut: 'fadeOut',
                autoplayHoverPause: true,
                singleItem: true,
                autoplayTimeout: 6000,
                autoplaySpeed: 4000,
                //navSpeed: 500,
                dots: true,
                nav: false,
                responsiveClass: true,
                onInitialize: function(event) {
                    if ($('.pro-slider .items').length <= 1) {
                        this.settings.loop = false;
                    }
                },
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                        loop: true
                    },
                    600: {
                        items: 1,
                        nav: false,
                        dots: true,
                        loop: true
                    },

                    1000: {
                        items: 1,

                        nav: false,
                        dots: true,
                        loop: true
                    }


                },
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ]
            });

        }

        // program slider

        if ($('.pro-full-slider').length) {
            $(".pro-full-slider").owlCarousel({

                loop: true,
                autoplay: true,
                //animateOut: 'fadeOut',
                autoplayHoverPause: true,
                singleItem: true,
                autoplayTimeout: 6000,
                autoplaySpeed: 4000,
                //navSpeed: 500,
                dots: true,
                nav: false,
                responsiveClass: true,
                onInitialize: function(event) {
                    if ($('.pro-full-slider .items').length <= 1) {
                        this.settings.loop = false;
                    }
                },
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                        loop: true
                    },
                    600: {
                        items: 1,
                        nav: false,
                        dots: true,
                        loop: true
                    },

                    1000: {
                        items: 4,
                        margin: 30,
                        nav: false,
                        dots: true,
                        loop: true
                    }


                },
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ]
            });

        }

        // team slider

        if ($('.team-slider').length) {
            $(".team-slider").owlCarousel({

                loop: true,
                autoplay: true,
                //animateOut: 'fadeOut',
                autoplayHoverPause: true,
                singleItem: true,
                autoplayTimeout: 6000,
                autoplaySpeed: 4000,
                //navSpeed: 500,
                dots: true,
                nav: false,
                responsiveClass: true,
                onInitialize: function(event) {
                    if ($('.team-slider .items').length <= 1) {
                        this.settings.loop = false;
                    }
                },
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                        loop: true
                    },
                    600: {
                        items: 2,
                        nav: false,
                        dots: true,
                        loop: true
                    },

                    1000: {
                        items: 5,

                        nav: false,
                        dots: true,
                        loop: true
                    }


                },
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ]
            });
        }





        // photo slider

        if ($('.main-story-slider').length) {
            $(".main-story-slider").owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                margin: 0,
                animateOut: 'fadeOut',
                autoplayHoverPause: true,
                singleItem: true,
                autoplayTimeout: 6000,
                autoplaySpeed: 4000,
                //navSpeed: 500,
                dots: true,
                nav: false,
                responsiveClass: true,
                onInitialize: function(event) {
                    if ($('.main-story-slider .items').length <= 1) {
                        this.settings.loop = false;
                    }
                },
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true,
                        loop: true
                    },
                    600: {
                        items: 1,
                        nav: false,
                        dots: true,
                        loop: true
                    },

                    1000: {
                        items: 1,
                        nav: true,
                        dots: false,
                        loop: true
                    }

                },
                navText: [
                    '<i class="fa fa-chevron-left"></i>',
                    '<i class="fa fa-chevron-right"></i>'
                ]
            });

        }




    });



    /*------------------------------rel action -----------------------------*/


    jQuery('a[rel*=external]').click(function() {

        window.open(this.href);

        return false;

    });






    // jQuery(window).scroll(function() {
    //     var value = jQuery(this).scrollTop();
    //     if (value > 1000) {
    //         jQuery('body').addClass('sticky_nav');
    //         jQuery('.main-menu').addClass("fixed-top slideInDown animated");
    //     } else {
    //         jQuery('body').removeClass('sticky_nav');
    //         jQuery('.main-menu').removeClass("fixed-top slideInDown animated");
    //     }
    // });

    // stick header


    // jQuery(window).scroll(function() {
    //     var value = jQuery(this).scrollTop();
    //     if (value > 600) {
    //         jQuery('body').addClass('sticky_nav');
    //         jQuery('.header-main').addClass("fixed-top slideInDown animated");
    //     } else {
    //         jQuery('body').removeClass('sticky_nav');
    //         jQuery('.header-main').removeClass("fixed-top slideInDown animated");
    //     }
    // });

    // var s = $(".header-main");
    // var pos = s.position();
    // $(window).on('scroll', function() {
    //     var windowpos = $(window).scrollTop();
    //     if (windowpos > 344) {
    //         s.addClass("fixed-tops slideInDown animated");
    //     } else {
    //         s.removeClass("fixed-tops slideInDown animated");
    //     }
    // });

    // Header main menu fixed
    jQuery(document).ready(function($) {

        var stickyOffset = $('.header-main').offset().top;
        $(window).scroll(function() {
            var sticky = $('.header-main'),
                scroll = $(window).scrollTop();
            if (scroll >= stickyOffset) sticky.addClass('fixed-tops');
            else sticky.removeClass('fixed-tops');
        });


    });





    // search toggle

    $(document).ready(function() {
        $('.btn-search').click(function(event) {
            event.stopPropagation();
            $(".btn-search").toggleClass("close-icon");
            $('.search-site').animate({
                height: 'toggle',
            });
        });
        $(".search-site").on("click", function(event) {
            event.stopPropagation();
        });
    });

    $(document).on("click", function() {
        $(".btn-search").removeClass("close-icon");
        $(".search-site").hide();
    });

    // live player box

    $(document).ready(function() {
        $('.notification-btn').click(function(event) {
            event.stopPropagation();
            $("body").addClass("overflow-hide");
            $('.live-player-box').css({
                right: '0',
            });

            $('.overflow-hide').css({
                right: '15%',
                transition: 'all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86)'
            });
        });

        $('.live-close').click(function(event) {
            event.stopPropagation();
            $("body").removeClass("overflow-hide");
            $('.live-player-box').css({
                right: '-500px',
            });
            $('body').css({
                right: '0'

            });
        });
        $(".live-player-box").on("click", function(event) {
            event.stopPropagation();
        });
    });

    $(document).on("click", function() {

        $("body").removeClass("overflow-hide");
        $('.live-player-box').css({
            right: '-500px',
        });
        $('body').css({
            right: '0'

        });
    });



    // slide-nav

    // $(document).ready(function() {
    //     $('.main-nav-btn').click(function(event) {
    //         event.stopPropagation();
    //         $("body").addClass("overflow-hide");
    //         $('.slide-nav-box').css({
    //             left: '0',
    //         });

    //         $('.overflow-hide').css({
    //             left: '15%',
    //             transition: 'all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86)'
    //         });
    //     });

    //     $('.slide-close').click(function(event) {
    //         event.stopPropagation();
    //         $("body").removeClass("overflow-hide");
    //         $('.slide-nav-box').css({
    //             left: '-300px',
    //         });
    //         $('body').css({
    //             left: '0'

    //         });
    //     });
    //     $(".slide-nav-box").on("click", function(event) {
    //         event.stopPropagation();
    //     });
    // });

    // $(document).on("click", function() {

    //     $("body").removeClass("overflow-hide");
    //     $('.slide-nav-box').css({
    //         left: '-300px',
    //     });
    //     $('body').css({
    //         left: '0'

    //     });
    // });

            // slide menu

$(document).ready(function() {
    $('.menu-toggle').click(function(event) {
        event.stopPropagation();
        $("body").addClass("overflow-hide");
        $('.primary-panel').css({
            left: '0',
        });


    });

    $('.menu-close').click(function(event) {
        event.stopPropagation();
        $("body").removeClass("overflow-hide");
        $('.primary-panel').css({
            left: '-500px',
        });

    });
    $(".primary-panel").on("click", function(event) {
        event.stopPropagation();
    });
});

$(document).on("click", function() {

    $("body").removeClass("overflow-hide");
    $('.primary-panel').css({
        left: '-500px',
    });

});



    // jQuery(window).scroll(function() {
    //     var value = jQuery(this).scrollTop();
    //     if (value > 800) {
    //         jQuery('body').addClass('sticky_title');
    //         jQuery('.news-big-title').addClass("title-top slideInDown animated");
    //     } else {
    //         jQuery('body').removeClass('sticky_title');
    //         jQuery('.news-big-title').removeClass("title-top slideInDown animated");
    //     }
    // });



    // fixed video when scroll on desktop only
    // jQuery(window).scroll(function() {
    //     var value = jQuery(this).width();
    //     var scrollHeight = jQuery(this).scrollTop();
    //     if ((value > 1024) && (scrollHeight > 3000)) {
    //         jQuery('body').addClass('video-scrolled');
    //         jQuery('.detail-box .editor-box .embed-responsive').addClass("video-fixed");
    //         if (!jQuery('.close-vid-btn')[0]) {
    //             jQuery('.video-fixed').append('<span class="close-vid-btn lnr lnr-cross"></span>');

    //             jQuery('.close-vid-btn').on('click', function() {
    //                 // alert('Clicked');
    //                 $("body").removeClass('video-scrolled');

    //                 $('.detail-box .editor-box .embed-responsive').addClass("video-clicked");
    //                 $(this).removeClass('active');
    //             })
    //         }

    //     } else {
    //         jQuery('body').removeClass('video-scrolled');
    //         jQuery('.detail-box .editor-box .embed-responsive').removeClass("video-fixed");
    //         jQuery('.close-vid-btn').remove();
    //     }
    // });







    // scrll to top
    jQuery('.scrollToTop').click(function(e) {
        "use strict";
        jQuery('html,body').animate({
            scrollTop: 0
        }, 'slow');
        e.preventDefault();
        return false;
    });

    //scroll action button

    // $(document).scroll(function() {
    //     var y = $(this).width();
    //     if (y > 1024) {
    //         $(".upToScroll").addClass("buttonShow");
    //     } else {
    //         $(".upToScroll").removeClass("buttonShow");
    //     }

    // });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".upToScroll").addClass("buttonShow");
        } else {
            $(".upToScroll").removeClass("buttonShow");
        }
    });


    //magnific popup gallery


    // $(document).ready(function() {
    //     $('.popup-gallery').magnificPopup({
    //         delegate: 'a',
    //         type: 'image',
    //         tLoading: 'Loading image #%curr%...',
    //         mainClass: 'mfp-img-mobile',
    //         gallery: {
    //             enabled: true,
    //             navigateByImgClick: true,
    //             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //         },
    //         image: {
    //             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    //             titleSrc: function(item) {
    //                 return item.el.attr('title');
    //             }
    //         }
    //     });
    // });



    // jQuery(".popup-gallery").click(function() {
    //     jQuery('body').addClass("fadeIn animated");
    // });

    // jQuery(".mfp-bg").click(function() {
    //     jQuery('body').addClass("fadeOut animated").removeClass("fadeIn animated");

    // });






    //table class

    jQuery("table").addClass('table table-striped').wrap("<div class='table-responsive' />");
    // embed iframe

    jQuery(".editor-box iframe").wrap("<div class='embed-responsive embed-responsive-16by9' />");
    jQuery(".news-break iframe").wrap("<span class='embed-responsive embed-responsive-16by9' />");
    jQuery(".video-detail iframe").wrap("<span class='embed-responsive embed-responsive-16by9' />");
    jQuery(".google-maps iframe").wrap("<span class='embed-responsive embed-responsive-16by9' />");





    // ! function() {
    //     setTimeout(function() {
    //         $('.preloader').css({ opacity: '0' }).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
    //             $(this).hide();
    //         });
    //     }, 1000);
    // }();


    jQuery(document).ready(function($) {
        //     //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
        //     var MQL = 240;

        //     //primary navigation slide-in effect
        //     if ($(window).width() > MQL) {
        //         var headerHeight = $('.cd-header').height();
        //         $(window).on('scroll', {
        //                 previousTop: 0
        //             },
        //             function() {
        //                 var currentTop = $(window).scrollTop();
        //                 //check if user is scrolling up
        //                 if (currentTop < this.previousTop) {
        //                     //if scrolling up...
        //                     if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
        //                         $('.cd-header').addClass('is-visible');
        //                     } else {
        //                         $('.cd-header').removeClass('is-visible is-fixed');
        //                     }
        //                 } else {
        //                     //if scrolling down...
        //                     $('.cd-header').removeClass('is-visible');
        //                     if (currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
        //                 }
        //                 this.previousTop = currentTop;
        //             });
        //     }

        //open/close primary navigation
        $('.cd-primary-nav-trigger').on('click', function() {
            $('.cd-menu-icon').toggleClass('is-clicked');
            $('.cd-header').toggleClass('menu-is-open');

            //For firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
            if ($('.cd-primary-nav').hasClass('is-visible')) {
                $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                    $('body').removeClass('overflow-hidden');
                });
            } else {
                $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                    $('body').addClass('overflow-hidden');
                });
            }
        });
    });

    // sifaris toogle

    // jQuery('.sifaris-btn').on('click', function() {

    //     $(".sifaris").css('display', 'none');

    // })

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1500) {
            //$(".sifaris").css('transform', 'translate(0,-50%)');
            $(".sifaris").addClass('slide-left');

        } else {
            $(".sifaris").removeClass('slide-left');
            $(".sifaris").addClass('slide-hide');

        }
    });








    // hide slider result
    // jQuery('.close-btn').on('click', function() {
    //     $('.result-slideout').css("left", "-390px");
    //     $("body").removeClass('overflow-hidden');
    // })


    // ! function() {
    //     setTimeout(function() {
    //         $('.sticky-notice').addClass('notice-pushed fadeInUp animated', function() {
    //             $(this).show();
    //         });
    //     }, 8000);
    // }();

    // skip this

    //$('.sticky-notice').addClass("notice-pushed fadeInUp animated");

    $(function() { //run when the DOM is ready
        $(".close-button").click(function() { //use a class, since your ID gets mangled
            $('.sticky-notice').addClass("bounceOutDown animated"); //add the class to the clicked element
        });
    });

    // show filters

    // $(function() { //run when the DOM is ready
    //     $(".filter-option").click(function() { //use a class, since your ID gets mangled
    //         $('.filters').addClass("show-filter fadeInUp animated"); //add the class to the clicked element
    //     });
    // });

    // floatable form

    $('.textfield, .textarea').on('focus blur', function(e) {
        $(this).parents('.fieldbox').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur')


    // on scroll show

    // $(document).ready(function() {

    //     /* Every time the window is scrolled ... */
    //     $(window).scroll(function() {

    //         /* Check the location of each desired element */
    //         $('.items img').each(function(i) {

    //             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //             var bottom_of_window = $(window).scrollTop() + $(window).height();

    //             /* If the object is completely visible in the window, fade it it */
    //             if (bottom_of_window > bottom_of_object) {

    //                 $(this).animate({ 'opacity': '1' }, 500);

    //             }

    //         });

    //     });

    // });


    // hide sticky footer ad
    // jQuery('.mini-btn').on('click', function() {
    //     $('.sticky-footer-ad').toggleClass('sticky-ad-hide');

    // })

    // bichar blog position setting for mobile


    // $(document).ready(function() {

    //     var deviceWidth = jQuery(this).width();
    //     if (deviceWidth < 576) {
    //         $(".right-side .bichar-mobile").insertBefore(".section.video-section") && jQuery(".bichar-mobile, .for-mobile").wrap("<div class='right-side only-mobile' />");
    //         //$(".left-side.sif.col-md-2").insertAfter('.get-news-alert');
    //     }

    // });
    // $(document).ready(function() {

    //     var deviceWidth = jQuery(this).width();
    //     if (deviceWidth < 768) {
    //         $(".left-side.sif .sif-left").insertAfter('.get-news-alert');
    //     }
    // });

    // contact scroll

    $(".address-btn").click(function() {

        $('html, body').animate({ scrollTop: $('#contact-box').offset().top - 100 }, 'slow');
    });

    // jquery smooth scroll



})(jQuery);
$(function() {
    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------
    function menuscroll() {
        var $navmenu = $('.navbar');
        var #subNavmenu = $('#sub-navbar'); 
        var $logo = $('#logo');
        if ($(window).scrollTop() > 30) {
            $navmenu.addClass('is-scrolling');
            $subNavmenu.addClass('is-scrolling');
            $logo.css("fontSize", "25px");
        } else {
            $navmenu.removeClass("is-scrolling");
            $subNavmenu.removeClass('is-scrolling');
            $logo.css("fontSize", "35px");
        }
    }

    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });*/

    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                var h = target.offset().top;
         
                if (h == null) {
                    console.log("here")
                    h = 200
                }

                $('html, body').animate({
                    scrollTop: h - 180
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    /*
                    var $target = $(target);
                    $target.focus();

                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };*/
                });
            }
        }
    });

}); /* End Fn */

    /*
    $('.tabs > li').mouseover( function(){
        $(this).find('a').tab('show');
    });

    $('.tabs > li').mouseout( function(){
        $(this).find('a').tab('hide');
    });
    */

    $('.tab-content').hide();
    console.log("hi");
        
    $( '.tabs' ).mouseenter( handlerIn );
    $( '.tab-content' ).mouseleave( handlerOut );
    
    function handlerIn() {
        $('.tab-content').show();
    }
    
    function handlerOut() {
        $('.tab-content').hide();
    }
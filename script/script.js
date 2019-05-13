$(function() {
    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.navbar');
        var $logo = $('#logo');
        if ($(window).scrollTop() > 30) {
            $navmenu.addClass('is-scrolling');
            $logo.css("fontSize", "25px");
        } else {
            $navmenu.removeClass("is-scrolling");
            $logo.css("fontSize", "35px");
        }
    }
    menuscroll();
    $(window).on('scroll', function() {
        menuscroll();
    });

}); /* End Fn */
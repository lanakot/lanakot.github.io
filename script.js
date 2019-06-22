/* Scrolling Effect */

$(window).on("scroll", function() {
    /* TODO make this better */
    if(! $(window).scrollTop()) {
        $('nav').addClass('navbar-trans');
        $('nav').removeClass('navbar-purple');
    }

    else {
        $('nav').addClass('navbar-purple');
        $('nav').removeClass('navbar-trans');
    }
});

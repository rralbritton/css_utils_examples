$(document).ready(function () {

    /**Show/Hide sticky nav*/
    $('.section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '65px'
    });

    /**Navigation Scroll*/
    /**https://css-tricks.com/snippets/jquery/smooth-scrolling/*/
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /**Mobile Navigation*/
    $('.mobile-nav-icon').click(function(){
        let nav = $('.main-nav');
        let icon = $('ion-icon');
        nav.slideToggle(200);
    });


    /**Animations on scroll
     * https://daneden.github.io/animate.css/
    */
    $('.features-fadein').waypoint(function (direction) {
        $('.features-fadein').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });

    $('.cities-fadein').waypoint(function (direction) {
        $('.cities-fadein').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });
});

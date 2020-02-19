$(document).ready(function() {
    'use strict';

    $(".owl-carousel").owlCarousel(
        {
            stagePadding: 0,
            items: 1,
            loop:true,
            margin:0,
            singleItem:true,
            nav:true,
            navText: [
                "<i class='fa fa-caret-left'></i>",
                "<i class='fa fa-caret-right'></i>"
            ],
            dots:true,
        }
    );

    setTimeout(function() {
        $('.loader').fadeOut('slow');
    }, 2000);

    function clickHome() {
        'use strict';
        $('#home-page').fadeIn('slow');
        $('#about-page').fadeOut('fast');
        $('#works-page').fadeOut('fast');
        $('#resume-page').fadeOut('fast');
        $('#contact-page').fadeOut('fast');
    }
    function clickAbout() {
        'use strict';
        $('#home-page').fadeOut('fast');
        $('#about-page').fadeIn('slow');
        $('#works-page').fadeOut('fast');
        $('#resume-page').fadeOut('fast');
        $('#contact-page').fadeOut('fast');
    }
    function clickWorks() {
        'use strict';
        $('#home-page').fadeOut('fast');
        $('#about-page').fadeOut('fast');
        $('#works-page').fadeIn('slow');
        $('#resume-page').fadeOut('fast');
        $('#contact-page').fadeOut('fast');
    }
    function clickResume() {
        'use strict';
        $('#home-page').fadeOut('fast');
        $('#about-page').fadeOut('fast');
        $('#works-page').fadeOut('fast');
        $('#resume-page').fadeIn('slow');
        $('#contact-page').fadeOut('fast');
    }
    function clickContact() {
        'use strict';
        $('#home-page').fadeOut('fast');
        $('#about-page').fadeOut('fast');
        $('#works-page').fadeOut('fast');
        $('#resume-page').fadeOut('fast');
        $('#contact-page').fadeIn('slow');
    }

    $('.home').click(function() {
        clickHome();
    });
    $('.about').click(function() {
        clickAbout();
    });
    $('.works').click(function() {
        clickWorks()
    });
    $('.resume').click(function() {
        clickResume()
    });
    $('.contact').click(function() {
        clickContact();
    });
});
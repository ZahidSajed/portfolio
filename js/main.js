// Preloader start
$(window).on("load", function () {

    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(750);
    });
})
// Preloader end

// Starting from top when refreshing
         window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }; 

$(document).ready(function () {
    // Superslide plugin
    // option
    $('#slides').superslides({
        play: 3000,
        pagination: false,
        animation: 'fade'
    });
    // Typed js
    var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
        strings: ['Web Developer.', 'App Developer.', 'Freelancer.'],
        typeSpeed: 100,
        loop: true,
        showCursor: false,
    });
    // Owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        responsive: {
            // 0 -599 = 1
            0: {
                items: 1
            },
            // 600 -999 = 3
            600: {
                items: 2
            },
            // 1000 - rest = 5
            1000: {
                items: 4
            }
        }
    });
    // Easy Pie Chart
    $('.chart').easyPieChart({
        //your options goes here
        easing: 'easeInOut',
        barColor: 'white',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        },
        animate: {
            duration: 8000,
            enabled: true
        },
    });
    // Smooth Scroll
    // BOM = Browser object model
    $("#navigation li a").click(function (e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({
            scrollTop: targetPosition - 50
        }, "slow");

    });


    // FancyBox For Gallery start
    $('[data-fancybox]').fancybox();
    // FancyBox For Gallery end

    // Sort and filter start
    $("#filters a").click(function () {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });
    // Sort and filter end
});

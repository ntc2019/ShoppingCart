
$(document).ready(function () {
    $('.comment-lists-wrapper').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left-circle' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right-circle' aria-hidden='true'></i></button>",
        dots: true
    });
});


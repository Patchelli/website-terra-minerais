/*------------------------
Menu Hamburguer
------------------------*/
const Menu = {
    toggleMenu() {
        $('.menu').toggleClass('active');
        $('body').toggleClass('frozen');
    }
}

$('.menu__overlay').click(() => Menu.toggleMenu());
$('.menu__mobile__btn').click(() => Menu.toggleMenu());

/*------------------------
Menu Dinamico
------------------------*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80){
            $("header").css('background-color', 'black');
            $("header").css('padding-top', '10px');
            $("header").css('padding-bottom', '10px');
            $(".menu__logo img").css('height', '50px');
        }

        else {
            $("header").css('background-color', 'transparent');
            $(".menu__logo img").css('height', '85px');
            $("header").css('padding-top', '30px');
            $("header").css('padding-bottom', '0px');
        }
    });
});

/*------------------------
Home Carousel
------------------------*/
$('.banner__carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});

/*------------------------
Home Galeria
------------------------*/
$('[data-fancybox]').fancybox({
	loop: true,
    smallBtn: true,
    toolbar: false,
    transitionEffect: "slide"
});
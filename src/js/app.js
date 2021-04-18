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
Home Carousel
------------------------*/
$('.banner__carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});
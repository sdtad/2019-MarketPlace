$(function(){
	
$('.header__menu-btn').on('click', function(){
	$('.menu ul').slideToggle();
});

$('.footer-content-title').on('click', function(){
	$(this).next('.footer-content-box').slideToggle();
	$(this).toggleClass('active');
});

$('ul.tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
})

$('.slider__inner').slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	arrows: false,
	dots: true,
	responsive: [
			{
				breakpoint: 1401,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 1020,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
});

$(".js-range-slider").ionRangeSlider({
	type: "double",
	min: 0,
	max: 1000,
	from: 0,
	to: 600,
	grid: false,
	prefix: "$",
	skin: "round"
});

$('.upload__wrapper input, .upload__wrapper select, .production__wrapper select').styler();



var mixer = mixitup('.product__content, .category__content-text');

});


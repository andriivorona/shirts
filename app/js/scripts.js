$(document).ready(function() {
	$('.bg-img').each(function() {
		var $this = $(this);
		$this.css('background-image', 'url('+ $this.find('> img').attr('src')+')');
	});
	$('.visual-slider').slick({
		infinite: true,
		dots: false,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: true,
				arrows: false,
			}
		}
		] 
	});	
	$('.products-slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 670,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 425,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});

	$('.LATEST-NEWS-slick').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				// infinite: true,
				// dots: false
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint:425,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 411,
			settings: {
				slidesToShow: 1, 
				slidesToScroll: 1,
			}
		}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
	]

});

	$('.visual-goods-container-slider').slick({
		infinite: true,
		dots: false,

	});

	
	$("select").select2({
		minimumResultsForSearch: Infinity
	});
	

	mobileMenu();
}); // ready

$(window).scroll(function() {
	if ($(window).scrollTop() > 0) {
		$('.header').addClass('headerScroll');

	} else {
		$('.header').removeClass('headerScroll');
	}
})

function mobileMenu() {
	$('<a href="#" class="open-menu"><span></span><span></span><span></span>Open Menu</a>').appendTo('.header .top-header .container');
	$('.open-menu').click(function () {
		$('body').toggleClass('menu-opened');
		return false;
	});
}
//mobile-menu

// Quantity
function catalogItemCounter(field){
			
			var fieldCount = function(el) {

				var 
					// Мин. значение
					min = el.data('min') || false,

					// Макс. значение
					max = el.data('max') || false, 

					// Кнопка уменьшения кол-ва
					dec = el.prev('.dec'), 

					// Кнопка увеличения кол-ва
					inc = el.next('.inc');

				function init(el) {
					if(!el.attr('disabled')){
						dec.on('click', decrement);
						inc.on('click', increment);
					}

					// Уменьшим значение
					function decrement() {
						var value = parseInt(el[0].value);
						value--;

						if(!min || value >= min) {
							el[0].value = value;
						}
					};

					// Увеличим значение
					function increment() {
						var value = parseInt(el[0].value);
							
						value++;

						if(!max || value <= max) {
							el[0].value = value++;
						}
					};
					
				}

				el.each(function() {
					init($(this));
				});
			};

			$(field).each(function(){
				fieldCount($(this));
			});
		}
    
catalogItemCounter('.fieldCount');
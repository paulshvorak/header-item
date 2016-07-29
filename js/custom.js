$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});

function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};

$(function(){

	$('.menu-icon').click(function(){
		$(this).toggleClass('active');
		$('.nav').slideToggle(); 
	});

	$('.nav-mobile__search').click(function(){
		$('.header-action__input').slideToggle();
	});

	$('.nav-mobile__cart').click(function(){
		$('.header-action__cart').slideToggle();
	});

	$('.nav-mobile__sign-in').click(function(){
		$('.header-action__sign-in').slideToggle();
	});

	$('.nav-mobile__phone').click(function(){
		$('.header-action__phone').slideToggle();
	});

	$('.carousel').slick({
		dots: true
	});
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer+10, 'padding-top':height_header+10});

	var viewport_wid = viewport().width;

	if (viewport_wid < 768) {
		$('.content').css({'padding-bottom':height_footer+10, 'padding-top':height_header+10});
		$(".carousel-item__img").attr("src", "img/320px/slick-item-img.png");
		$('.nav-item__link').click(function(){
			$(this).next().slideToggle();
		});

		$('.sub-nav__item-link').click(function(){
			$(this).next().slideToggle();
		});
	} else if (viewport_wid < 1400) {
		$('.content').css({'padding-bottom':height_footer+30, 'padding-top':height_header+50});
		$(".carousel-item__img").attr("src", "img/768px/slick-item-img.png");
	} else  {
		$('.content').css({'padding-bottom':height_footer+30, 'padding-top':height_header+35});
		$(".carousel-item__img").attr("src", "img/1400px/slick-item-img.png");
	}

	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);




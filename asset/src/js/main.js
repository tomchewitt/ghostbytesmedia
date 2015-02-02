$(document).ready(function(){

// Animated anchor links
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 'slow');
				return false;
			}
		}
	});

	var pageHeight = $(window).height();
	// var headerHeight = $('.header').height();
	var footerHeight = $('.footer').height();
	var projectsHeight = pageHeight - footerHeight;
	$('.projects').css('height',projectsHeight);
});
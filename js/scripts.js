$(document).ready(function(){
	$('.mobile-button').on('click', function(){
		$('.menu').slideToggle();
		$(this).toggleClass('opened');
	})
});
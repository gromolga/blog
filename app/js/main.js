
$(document).ready(alert(1));
$(document).ready(function(){
	alert(1)
	$('.search_icon').click(function(){
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$(this).parent().find('ul').slideDown(200);
		}else{
			$(this).parent().find('ul').slideUp(200);
		}
	})
	$('.menu').click(function(){
		$(this).parent('.nav').find('.nav_bar').animate({width:'toggle'},350);
	});
	$(window).resize(function(){
		if($(window).width()>550){
			$('.nav_bar').show();
		}
	})
});

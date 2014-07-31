$(function() {
	var len = $('.teacher-list ul li').length;
	var mindown = (len-5)*-45;
	
	var height = 0;
	$('.downer').click(function() {
		height = height -45;
		if(height < mindown){
			height = mindown;
		}
		$('.teacher-list ul').stop().animate({
			top : height+'px'
		},500);
	});
	
	$('.upper').click(function() {
		height = height +45;
		if(height > 0){
			height = 0;
		}
		$('.teacher-list ul').stop().animate({
			top : height+'px'
		},500);
	});
	
	
	
	$('.tl').click(function(){
		$('.tl a').css('background','#95c9ea');
		$(this).children().css('background','#fda100');
		return false;
	});
});

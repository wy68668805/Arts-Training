$(function() {
	$("#focus").mogFocus({
		loadAnimation : false,
		time : 4000,
		// animationWay : 'tbSliding',
		prevNextToggle : 'toggle',
		btnStyle : 'noNumber',
		focusTime : {
			duration : 1300,
			easing : "easeOutBounce"
		},
		focusTwoTime : {
			duration : 1300,
			easing : "easeOutBounce"
		},
		scrollWidth : '768'
	});
	
	$('.two-font').hover(function() {
		$(this).addClass('navbg2');
		$(this).children().css('color','#4a9cc8');
	}, function() {
		$(this).removeClass('navbg2');
		$(this).children().css('color','#ffffff');
	});
	
	$('.four-font').hover(function() {
		$(this).addClass('navbg1');
		$(this).children().css('color','#4a9cc8');
	}, function() {
		$(this).removeClass('navbg1');
		$(this).children().css('color','#ffffff');
	});
	
	
	$('#username').click(function() {
		if($(this).val() == "用户名"){
			$(this).val('');
		}
	});
	
	$('#username').blur(function() {
		if($(this).val() == ""){
			$(this).val('用户名');
		}
	});
	
	$('#password').click(function() {
		if($(this).val() == "密码"){
			$(this).val('');
			$(this).prop('type','password');
		}
	});
	
	$('#password').blur(function() {
		if($(this).val() == ""){
			$(this).prop('type','text');
			$(this).val('密码');
		}
	});
	
	
}); 

	
	
$(function() {
	$('#training_nav a').hover(function() {
		$(this).addClass('t_current');
	}, function() {
		$(this).removeClass('t_current');
	});

	for (var i = 1; i <= $('.title').length; i++) {
		if ((i - 2) % 3 == 0) {
			$(".title:eq(" + (i - 1) + ")").removeClass('buttom').addClass('label');
			$(".hoverset:eq(" + (i - 1) + ")").removeClass('text').addClass('top');
		}
	};

	$(".imgtext").hide();
	$(".good_cases").hover(function() {
		$(".imgtext", this).slideToggle(200);
	});
});

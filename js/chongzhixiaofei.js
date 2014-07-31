$(function() {
	$('.choice').click(function() {
		var id = $(this).attr('id');
		var num = id.substr(2);
		$('.choice').removeClass('current');
		$(this).addClass('current');
		$('.products').hide();
		$('.p' + num).show();
	});
});

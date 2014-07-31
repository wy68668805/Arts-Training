$(document).ready(function() {
	$(".imgtext").hide();
	$(".yurendu").hover(function() {
		$(".imgtext", this).slideToggle(200);
	});
});

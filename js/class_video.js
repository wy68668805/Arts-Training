$(function() {
	$(".imgtext").hide();
	
	$("#show").hover(function() {
		$(".imgtext", this).slideToggle(200);
	});
	
	$(".single_list").hover(function() {
		$(".imgtext", this).slideToggle(200);
	});
	
	
	for (var i=1; i <= $('.single_list').length; i++) {
	  	if(i%3 == 0){
	  		$(".single_list:eq("+(i-1)+")").removeClass('single_margin');
	  	}
	};
});

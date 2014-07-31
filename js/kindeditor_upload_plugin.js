KindEditor.ready(function(K) {
	
	$('#upload_ajax_file').click(function(){
		$('#image3').click();
		return false;
	});
	
	var editor = K.editor({
		allowFileManager : true
	});

	K('#image3').click(function() {
		editor.loadPlugin('image', function() {
			editor.plugin.imageDialog({
				showRemote : false,
				imageUrl : K('#url3').val(),
				clickFn : function(url, title, width, height, border, align) {
					K('#url3').val(url);
					K('.photo_img a img').attr('src',url);
					editor.hideDialog();
				}
			});
		});
	});
}); 
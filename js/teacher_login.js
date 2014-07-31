$(function(){
	$('#teacher-username').focus(function(){
		if ($('#teacher-username').val() == "用户名") {
			$('#teacher-username').val('');
		};
	});
	
	$('#teacher-username').blur(function(){
		if ($('#teacher-username').val() == "") {
			$('#teacher-username').val('用户名');
		};
	});
	
	
	$('#teacher-password').focus(function(){
		if ($('#teacher-password').val() == "密码") {
			$('#teacher-password').val('');
			$('#teacher-password').prop('type','password');	
		};
	});
	
	$('#teacher-password').blur(function(){
		if ($('#teacher-password').val() == "") {
			$('#teacher-password').val('密码');
			$('#teacher-password').prop('type','text');
		};
	});
	
	$('#auth_code').focus(function() {
		if ($('#auth_code').val() == "验证码") {
			$('#auth_code').val('');
		};
	});
	
	$('#auth_code').blur(function() {
		if ($('#auth_code').val() == "") {
			$('#auth_code').val('验证码');
		};
	});
	
});

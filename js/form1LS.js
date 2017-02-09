$(document).ready(function(){
	console.log("coucou");
	$('form').submit(function(event){
		event.preventDefault();
		console.log('send');
		var last_name = $('#last_name').val()
		var first_name = $('#first_name').val()
		var email = $('#email').val()
		var phone = $('#phone').val()

		// console.log(last_name, first_name, email, phone);

		localStorage.setItem('user', last_name + " " + first_name + " " + email + " " + phone)
		var user = localStorage.getItem('user')
		console.log(user);
		$('#app').html(user);
	});
});
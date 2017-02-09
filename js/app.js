$(document).ready(function(){
	console.log("coucou");
	var users = []
	$('form').submit(function(event){
		event.preventDefault();
		console.log('send');
		var last_name = $('#last_name').val()
		var first_name = $('#first_name').val()
		var email = $('#email').val()
		var phone = $('#phone').val()
		var obj = {
			last_name:last_name, 
			first_name:first_name, 
			email:email, 
			phone:phone
		}
		users.push(obj);
		console.log(users)
		localStorage.setItem('users', JSON.stringify(users));
		var user = localStorage.getItem('users');
		var parseUser = JSON.parse(user);
		for(var i = 0; i<parseUser.length; i++){
			console.log(parseUser[i]);
			$('#app').append(parseUser[i].first_name + "<br />")
		}
	});
});
$(document).ready(function(){
	console.log("coucou");
	$.ajax({
		url:"http://swapi.co/api/people/?format=json",
		success:function(data){
			console.log(data)
			for(var i = 0 ; i<data.results.length ; i++){
				console.log(data.results[i])
				$("#app").append(data.results[i].name+"<br>")
			}
		}
	})
});
$(document).ready(function(){
	$.ajax({
		type : "GET",
		url : "data/data.json",
		success : function(data){
			console.log(data)
			// $(data.persons).each(function(){
			// 	console.log(this);
			// 	$("#app").append(this.phone + "<br />")
			// })

			for(var i=0; i< data.persons.length; i++){
				console.log(i)
				console.log(data.persons[i]);
			}
		},
		error : function(xhr, status){
			console.log(status)
			console.log('err')
		}
	})
});
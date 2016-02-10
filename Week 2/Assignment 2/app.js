var submit = document.getElementById("submit");

submit.onclick = function() {
	var name = document.getElementById("name").value;
	var genres = document.getElementById("genres").value;
	var message = document.getElementById("message");
	console.log(name, genres);

	message.innerHTML = " Hello, my name is " + name  
	 +  " my favorite genre is: " + genres;
	
};
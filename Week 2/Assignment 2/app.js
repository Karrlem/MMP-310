var submit = document.getElementById("submit");

submit.onclick = function() {
	var name = document.getElementById("name").value;
	var birth = document.getElementById("birth").value;
	var genres = document.getElementById("genres").value;
	var message = document.getElementById("message");
	console.log(name, birth);

	message.innerHTML = " Hello, my name and gamertag is " + name  
	 +  " my hometown and birthday is " + birth;
	
};
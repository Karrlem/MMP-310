var submit = document.getElementById("submit");

submit.onclick = function() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var borough = document.getElementById("borough").value;
	var message = document.getElementById("message");
	console.log(name, email, borough);

	message.innerHTML = " Hello " + name + " from "
	 + borough + ", welcome to my website.";

};

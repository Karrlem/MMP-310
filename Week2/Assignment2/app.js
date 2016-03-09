var submit = document.getElementById("submit");

submit.onclick = function() {

	var rname = document.getElementById("rname").value;
	var gtname = document.getElementById("gtname").value;
	var birthTown = document.getElementById("birthTown").value;
	var birthDay = document.getElementById("birthDay").value;
	var firstGame = document.getElementById("firstGame").value;
	var message = document.getElementById("message");

	var genres = document.getElementById("genres").value;
	var gamerType = document.getElementById("gamerType").value;
	var console = document.getElementById("console").value;
	var store = document.getElementById("store").value;
	var hours = document.getElementById("hours").value;

	message.innerHTML = " Hello, my name is " + rname +
	", my gamertag is. " + gtname +  " I was born in " + birthTown +
	" on, " + birthDay + " and my first game was " + firstGame +
	". My favorite game genre is " + genres +
	", the kind of gamer that I am is a " + gamerType + " gamer. " +
	" My preferred console is a " + console + " I buy my games " +
	store + ". I spend " + hours + " a week playing games. ";

};

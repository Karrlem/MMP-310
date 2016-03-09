var submit = document.getElementById("submit");

submit.onclick = function() {

	var answers = [];

	var answerElements = document.getElementsByClassName("answer");

	for (var i = 0; i < answerElements.length; i++)
		answers.push(answerElements[i].value);

	var message = document.getElementById("message");

	message.innerHTML = " Hello, my name is " + answers[0] +
	", my gamertag is. " + answers[1] +  " I was born in " + answers[2] +
	" on, " + answers[3] + " and my first game was " + answers[4] +
	". My favorite game genre is " + answers[5] +
	", the kind of gamer that I am is a " + answers[6] + " gamer. " +
	" My preferred console is a " + answers[7] + " I buy my games " +
	answers[8] + ". I spend " + answers[9] + " a week playing games. ";

};

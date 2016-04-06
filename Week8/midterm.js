var selections = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var images = ["hangman.png", "hangman1.png", "hangman2.png","hangman3.png","hangman4.png", "hangman5.png","hangman6.png"];
var imageNumber = 0;
var sentence = ["hangman is cool"];
var lives = 6;

for (var i = 0; i < sentence[0].length; i++) {
	var s = document.createElement('span');
	if(sentence[0][i] == " "){
		s.className = "space";
	}else{
		s.className = "letter";
	}
	s.dataset.letter = sentence[0][i];
	document.getElementById("sentence").appendChild(s);
}

for (var i = 0; i < selections.length; i++) {
	var b = document.createElement('button');
	b.innerHTML = selections[i];
	document.getElementById("letters").appendChild(b);
	b.onclick = function () {
		console.log(this);
		checkLetter(this.innerHTML);
		console.log(this.innerHTML);
	}
}

function checkLetter(letter) {
	var isletter = false;
	for (var i = 0; i < sentence[0].length; i++) {
		if (sentence[0][i] == letter) {
			isletter = true;
			var letters = document.getElementsByClassName("letter");
			console.log(letters);
			for (var h = 0; h < letters.length; h++) {
				if (letters[h].dataset.letter == letter) {
					letters[h].innerHTML = letter;
				}
			}
		}
	}
	if (!isletter) {
		imageNumber++;
		document.getElementById("hangman").src = images[imageNumber];
		if (lives > 0) {
			document.getElementById("lives").innerHTML =" you have " + lives + " lives ";
			lives --;
		} else {
			document.getElementById("hangman").src = images[imageNumber];
			document.getElementById("lives").innerHTML =" you lose ";
		}
	}
}

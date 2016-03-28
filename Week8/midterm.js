var selections = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];

var sentence = ["hangman"];

for(var i = 0; i< selections.length;i++){
    var b = document.createElement('button');
    b.innerHTML=selections[i];
    document.body.appendChild(b);
    b.onclick = function(){
        var check = checkLetter(this.innerHTML);
    }
}

function checkLetter(letter){
    for(var i = 0; i < sentence[0].length; i++){
        if(sentence[0][i] == letter ){
            if(sentence[0] >= letter){
            inner.HTML = "you win";
                console.log(letter)
            }
        }
    }
}

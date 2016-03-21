//36 array options
var pOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0"];

var pass =''

function passwordGenerator(plength){
pass=''
for (var i = 0;i < plength; i++)
pass+=pOptions.charAt(Math.floor(Math.random() * pOptions.length))
return pass
}

function populateform(enterlength){
document.passGen.output.value=passwordGenerator(enterlength)
}

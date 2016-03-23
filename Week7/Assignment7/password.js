//36 array options
var pOptions ="abcdefghijklmnopqrstuvwxyz123456789";

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

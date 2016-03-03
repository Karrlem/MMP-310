$(document).ready(function() 
{    $("#results").click(function() { 

var cat1name = "1";

var cat1 = ($("input[@name=q1]:checked").val() != "True");
    
    if (cat1) { categories.push(cat1name) }; 
    
    
var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
$("#categorylist").text(catStr);                        
$("#categorylist").show("slow");            

if (cat1) { $("#category1").show("slow"); };
    { $("#closing").show("slow"); };
}
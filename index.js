$(document).ready(function(){

$("h1").css("color","red");

$(document).keypress(function(event){
$("h1").text(event.key);
console.log(event.key);
});

});
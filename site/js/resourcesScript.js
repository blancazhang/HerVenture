// JavaScript for Resources page

var i = 0;
var title = " Resources";
var speed = 50;

function typeOut() {
	if (i < title.length) {
		document.getElementById("intro").innerHTML += title.charAt(i);
		i++;
		setTimeout(typeOut, speed);
	}
}

setTimeout(function() {
	typeOut()
});		  
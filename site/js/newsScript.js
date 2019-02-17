// JavaScript for News page

var i = 0;
var title = "  News";
var speed = 60;

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
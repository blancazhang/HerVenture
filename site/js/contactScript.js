// JavaScript for Contact Us page

var i = 0;
var title = " Contact Us";
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
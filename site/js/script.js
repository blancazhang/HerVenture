var fancyText = document.getElementById("fancy");
var intervalTime = 50;
var initialPause = 600;
var callbackPause = 400;

function deleteContent(callback) {

    var intervalId = setInterval(function() {
        if (fancyText.innerHTML.length == 0) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = fancyText.innerHTML.substring(0, fancyText.innerHTML.length - 1);
    }, intervalTime);

}

function addContent(contentToAdd, callback) {
    var currentIndex = 0;

    var intervalId = setInterval(function() {
        if (currentIndex == contentToAdd.length) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = contentToAdd.substring(0, currentIndex);
        currentIndex++;
    }, intervalTime);
}

setTimeout(function() {
	deleteContent(function(){
		addContent("Network.", function(){
			deleteContent(function() {
				addContent("Connect.", function() {
					deleteContent(function() {
						addContent("Empower.", function() {
							deleteContent(function() {
								addContent("HerVenture");
							})
						})
                    })
                });
            });
        });
    });
}, initialPause);
var element = null;

var intervalID = setInterval(function() {
    element = document.querySelector('[aria-label^="Your Credit Balance is "]');
    if (element != null) {
        clearInterval(intervalID);
        console.log(element);
    }
}, 1000);
var element = null;

var intervalID = setInterval(function() {
    element = document.querySelector('[aria-label^="Your Credit Balance is "]');
    if (element != null) {
        clearInterval(intervalID);
        updateContent();
    }
}, 1000);

function updateContent() {
    var max = 10000000;
    var min = 600000;
    var number = (max - min) * Math.random() + min;
    var formatted = numeral(number).format("0,0.00");
    console.log(formatted);
    element.textContent =`CR $${formatted}`;
}
$(document).ready(function () {
    var width = window.innerWidth; // gets the current window dith
    var height = window.innerHeight; // gets the current window height

    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;


    // this huge pile of code is to keep them ie users out
    if (isIE || isEdge) {
        $('body').remove();
        alert("You're forbidden to use IE or Edge on this site. Stop it, use chrome");
        $('head').remove();
    } else {
        console.log("No ie, Continue.");
    }

    loadEvents();
});


function loadEvents() {
    $("#startGame").click(function () {
        $("#gameArea").fadeIn(2000); // game area fades in
        $("#startGame").remove(); // removes the filter

        // uncomment for loud music
         $("#gameArea").append('<audio autoplay="true" src="sources/sounds/Sled.mp3" type="audio/mpeg"></audio>');
    });

    // this is the left and right buttons
    $("#leftChoice, #rightChoice").hover(function () {
        $(this).fadeTo(500, 1); // change opacity to 1 while hovering over
        $(this).click(function () {
            // when player presses button
        });
    }, function () {
        $(this).fadeTo(500, 0.8); // else fade back to normal
    });

    $("#currentPlayer").click(function () {
        $("#event").text("Did you seriously click the penguin...?");
    });

} // end of Events
// ================================END OF JQUERY========================================================

$(".scenario").load.fadeIn();

// random number generator.
function RandomNum() {
    let randomNumber = Math.floor((Math.random() * 5) * 1);
    return randomNumber;
}

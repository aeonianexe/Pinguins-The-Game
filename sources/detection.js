var width = window.innerWidth; // gets the current window width
var height = window.innerHeight; // gets the current window height

var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isBlink = (isChrome || isOpera) && !!window.CSS;


$(document).ready(function () {
    // Mobile support. eh
    if (width <= 400) {
        $("#scenario").css("font-size", "14px");
        $("#leftText").css("font-size", "14px");
        $("#rightText").css("font-size", "14px");
    }
    if (width <= 1000) {
        $("#scenario").css("font-size", "14px");
        $("#leftText").css("font-size", "14px");
        $("#rightText").css("font-size", "14px");
    }
    if (isIE || isEdge) { // zero tolerance for edgers and iexplorers
        $('body').remove();
        alert("You're forbidden to use IE Edge on this site. Stop it, use chrome");
        $('head').remove();
    }
});

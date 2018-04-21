let width = window.innerWidth;
let height = window.innerHeight;

var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
})(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isBlink = (isChrome || isOpera) && !!window.CSS;
var width = window.innerWidth; // gets the current window width
var height = window.innerHeight; // gets the current window height

if (width <= 400){
    $("#scenario").css("font-size","14px");
    $("#leftText").css("font-size","14px");
    $("#rightText").css("font-size","14px");
   }
   if (width <= 900){
     $("#scenario").css("font-size","14px");
     $("#leftText").css("font-size","14px");
     $("#rightText").css("font-size","14px");
   }

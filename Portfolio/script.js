// JavaScript source code 

var i = 0;
var j = 0;
let txt = "Welcome to Ramsha Bilal's portfolio. "; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */
var next = false;

// typewriting effect on welcome message
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("welcome").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();

//some script is embedded within html and some animations and effects are added using css 

window.addEventListener('load', function () { AOS.init(); });
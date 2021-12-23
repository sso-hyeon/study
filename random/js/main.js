"use strict";

var wrapper = document.querySelector(".wrapper");
var heartWrapRect = wrapper.getBoundingClientRect();
var heartSize = 35;
var heartCount = 800;

document.addEventListener("DOMContentLoaded", function () {
    randomHeart();
});

function randomHeart() {
    var x1 = 0;
    var x2 = heartWrapRect.width - heartSize;
    var y1 = 0;
    var y2 = heartWrapRect.height - heartSize;

    for (let i = 0; i <= heartCount; i++) {
        var imgTag = document.createElement("img");
        var imgNum = Math.floor(Math.random() * 3) + 1;
        var imgSrc = "./img/" + imgNum + ".png";
        var rotateDeg = randomNumber(0, 60);

        var y = randomNumber(y1, y2);
        var x = randomNumber(x1, x2);

        imgTag.setAttribute("src", imgSrc);
        imgTag.classList = "img img" + i;
        imgTag.style.left = x + "px";
        imgTag.style.bottom = y + "px";
        imgTag.style.transform = "rotate(" + rotateDeg + "deg)";

        wrapper.appendChild(imgTag);
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

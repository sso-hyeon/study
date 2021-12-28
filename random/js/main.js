"use strict";

var heartWrap, heartWrapRect;
var contents = document.querySelector("#contents");
var enterBtn = document.querySelector(".enter-btn");
var heartCountInput = document.querySelector(".heart-count-input");
var heartSize = 35;
var heartCount;

document.addEventListener("DOMContentLoaded", function () {
    heartWrap = document.createElement("div");
    heartWrap.classList = "heartWrap";
    contents.appendChild(heartWrap);
});

enterBtn.addEventListener("click", () => {
    enter();
});

document.addEventListener("keyup", e => {
    if (e.keyCode === 13) enter();
    console.log(e);
});

function enter() {
    heartCount = heartCountInput.value;
    heartWrap.innerHTML = "";
    randomHeart();
    heartCountInput.value = "";
}

function randomHeart() {
    heartWrapRect = heartWrap.getBoundingClientRect();
    var x1 = 0;
    var x2 = heartWrapRect.width - heartSize;
    var y1 = 0;
    var y2 = heartWrapRect.height - heartSize;

    for (let i = 1; i <= heartCount; i++) {
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

        heartWrap.appendChild(imgTag);
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

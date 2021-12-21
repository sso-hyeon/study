"use strict";

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const balls = [];
const mousePos = { x: 0, y: 0 };
let select;
ctx.font = "bold 20px sans-serif";

class Ball {
    constructor(index, x, y, size, Xspeed, Yspeed, color) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.radius = size;
        this.Xspeed = Xspeed;
        this.Yspeed = Yspeed;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgba(" + this.color + ",0.5)";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.fillStyle = "#555";
        ctx.fillText(this.index, this.x - 10, this.y + 5);
        ctx.closePath();
    }
}

let tempX, tempY, tempRadius, tempXSpeed, tempYSpeed, tempColor;
function init() {
    for (let i = 0; i < 50; i++) {
        tempRadius = Math.floor(Math.random() * 20 + 30);
        tempX = Math.random() * (canvas.width - tempRadius * 2) + tempRadius;
        tempY = Math.random() * (canvas.height - tempRadius * 2) + tempRadius;
        tempXSpeed = Math.random() * 3 + 1;
        tempYSpeed = Math.random() * 10 - 5;
        tempColor =
            Math.floor(Math.random() * 255) +
            "," +
            Math.floor(Math.random() * 255) +
            "," +
            Math.floor(Math.random() * 255);
        // console.log(tempColor);
        balls.push(new Ball(i, tempX, tempY, tempRadius, tempXSpeed, tempYSpeed, tempColor));
    }
    render();
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let ball;
    for (let i = 0; i < balls.length; i++) {
        ball = balls[i];
        if (ball.x + ball.Xspeed > canvas.width - ball.radius || ball.x + ball.Xspeed < ball.radius) {
            ball.Xspeed = -ball.Xspeed;
        }
        if (ball.y + ball.Yspeed > canvas.height - ball.radius || ball.y + ball.Yspeed < ball.radius) {
            ball.Yspeed = -ball.Yspeed;
        }
        ball.x += ball.Xspeed;
        ball.y += ball.Yspeed;
        ball.draw();
    }

    requestAnimationFrame(render);
}

canvas.addEventListener("click", e => {
    mousePos.x = e.layerX;
    mousePos.y = e.layerY;

    let ball;
    for (let i = 0; i < balls.length; i++) {
        ball = balls[i];
        if (
            mousePos.x > ball.x - ball.radius &&
            mousePos.x < ball.x + ball.radius &&
            mousePos.y > ball.y - ball.radius &&
            mousePos.y < ball.y + ball.radius
        ) {
            select = ball;
        }
    }
    if (select) {
        alert(select.index);
        select = null;
    }
});

init();

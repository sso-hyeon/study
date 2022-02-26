const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const circles = [];
const colors = ["#5197e4", "#4138c3", "#00ad3b", "#ffd800", "#d30000"];
const circleInfo = [
    { x: 505, y: 587, size: 50 },
    { x: 197, y: 940, size: 50 },
    { x: 140, y: 287, size: 50 },
    { x: 584, y: 1049, size: 50 },
    { x: 529.5, y: 156.5, size: 50 }
];

let i;

class Circle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        // ctx.drawImage("../img/1.png", this.x, this.y);
    }
}

let positionY, positionX, radius, color;

function init() {
    for (let i = 0; i < colors.length; i++) {
        positionX = circleInfo[i].x;
        positionY = circleInfo[i].y;
        radius = circleInfo[i].size;
        color = colors[i];

        circles.push(new Circle(positionX, positionY, radius, color));
    }
    render(0, 206);
}
init();

function render(index, maxSize, timer) {
    if (circles[index].size > maxSize) clearInterval(timer);
    circles[index].draw();
    circles[index].size += 2;
}

let timer0, timer1, timer2, timer3, timer4;
window.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        timer0 = setInterval(function () {
            render(0, 206, timer0);
        }, 0);
    });

    setTimeout(function () {
        timer1 = setInterval(function () {
            render(1, 149, timer1);
        }, 0);
    }, 300);

    setTimeout(function () {
        timer2 = setInterval(function () {
            render(2, 115, timer2);
        }, 0);
    }, 600);
    setTimeout(function () {
        timer3 = setInterval(function () {
            render(3, 109, timer3);
        }, 0);
    }, 900);

    setTimeout(function () {
        timer4 = setInterval(function () {
            render(4, 107.5, timer4);
        }, 0);
    }, 1200);
});

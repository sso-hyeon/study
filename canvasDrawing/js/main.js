// 이미지 적용
// const imgElem = document.createElement("img");
// const imgElem = new Image();
// imgElem.src = "images/ilbuni1.png";
// imgElem.addEventListener("load", () => {
//     context.drawImage(imgElem, 50, 50); // (img, x, y)
//     context.drawImage(imgElem, 50, 50, 70, 120); // (img, x, y, width, height)
//     context.drawImage(imgElem, 100, 100, 200, 200, 0, 0, 100, 100); // (img, imgX, imgY, imgWidth, imgHeight,x, y, width, height)
// });

// 그림 그리기

let drawingMode; // true일 때만 그리기
let brush = "color"; // color , img
let colorVal = "black";
let urlNum;

function downHandler() {
    drawingMode = true;
}
function upHandler() {
    drawingMode = false;
}
function moveHandler(e) {
    if (!drawingMode) return;
    // e.clientX, e.clientY 브라우저 기준

    switch (brush) {
        case "color":
            context.beginPath();
            context.arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2, false);
            context.fill();
            break;
        case "img":
            context.drawImage(imgEle, e.offsetX, e.offsetY, 50, 50);
            break;
    }
}
function setColor(e) {
    urlNum = e.target.dataset.num;
    brush = e.target.dataset.type;
    colorVal = e.target.dataset.color;
    if (brush === "img") imgEle.src = "img/ilbuni" + urlNum + ".png";
    context.fillStyle = colorVal;
}
function createImg() {
    resultImg.innerHTML = "";
    const url = canvas.toDataURL("image/png");
    const imgEle = new Image();
    imgEle.src = url;
    resultImg.appendChild(imgEle);
}

function canvasReset() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", downHandler);
canvas.addEventListener("mousemove", moveHandler);
canvas.addEventListener("mouseup", upHandler);
color.addEventListener("click", setColor);
saveBtn.addEventListener("click", createImg);
resetBtn.addEventListener("click", canvasReset);

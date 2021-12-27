var body = document.querySelector("body");
let createMode = false;
let closeClick = false;
let startX;
let startY;
let box;

document.addEventListener("click", e => {
    if (e.target.classList.contains("closeBtn")) {
        e.target.parentNode.remove();
    }
});

document.addEventListener("mousedown", mouseClick);
document.addEventListener("mousemove", createBox);
document.addEventListener("mouseup", mouseDrop);

function mouseClick(e) {
    createMode = true;
    box = document.createElement("div");
    // console.log(startX, startY);
    startX = e.x;
    startY = e.y;
}
function createBox(e) {
    if (!createMode) return;
    box.classList = "box";

    if (e.clientX - startX < 0) startX = e.clientX;
    if (e.clientY - startY < 0) startY = e.clientY;

    box.style.top = startY + "px";
    box.style.left = startX + "px";
    box.style.width = e.clientX - startX + "px";
    box.style.height = e.clientY - startY + "px";

    body.append(box);
}
function mouseDrop() {
    createMode = false;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "x";
    deleteBtn.classList = "closeBtn";
    box.append(deleteBtn);
}

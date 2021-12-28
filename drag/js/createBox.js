var body = document.querySelector("body");
let createMode = false;
let closeClick = false;
let startX;
let startY;
let box;

document.addEventListener("click", e => {
    if (e.target.matches(".closeBtn")) {
        e.target.parentNode.remove();
        return (createMode = false);
    } else {
        !createMode ? createStart(e) : createEnd(e);
    }
});
document.addEventListener("mousemove", createBox);

function createStart(e) {
    createMode = true;
    box = document.createElement("div");
    box.classList = "box";
    startX = e.x;
    startY = e.y;
}
function createBox(e) {
    if (!createMode) return;

    // if (e.clientX - startX < 0) startX = e.clientX;
    // if (e.clientY - startY < 0) startY = e.clientY;

    box.style.top = startY + "px";
    box.style.left = startX + "px";
    box.style.width = e.clientX - startX + "px";
    box.style.height = e.clientY - startY + "px";

    body.append(box);
}
function createEnd() {
    createMode = false;
    let deleteBtn = document.createElement("i");
    deleteBtn.classList = "fas fa-times closeBtn";
    deleteBtn.addEventListener("click", e => {
        createMode = true;
    });
    let text = prompt("내용을 작성해주세요.");
    box.innerText = text;
    box.style.background = "rgb(" + randomNum(0, 255) + "," + randomNum(0, 255) + "," + randomNum(0, 255) + ")";
    box.style.border = 0;
    box.append(deleteBtn);
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

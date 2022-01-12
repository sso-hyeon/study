const enterBtn = document.querySelector(".enter-btn");
const result = document.querySelector(".result");
const happyCheck = document.querySelector(".happyCheck");
const seedInput = document.querySelector(".seed");
const selectBox = document.querySelector("#selectBox");

const option = [
    "adventurer",
    "adventurer-neutral",
    "avataaars",
    "big-ears",
    "big-ears-neutral",
    "big-smile",
    "bottts",
    "croodles",
    "croodles-neutral",
    "identicon",
    "initials",
    "micah",
    "miniavs",
    "open-peeps",
    "pixel-art",
    "pixel-art-neutral"
];

window.addEventListener("DOMContentLoaded", function () {
    createOption();
});

enterBtn.addEventListener("click", function () {
    render();
});

seedInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        render();
    }
});

function createOption() {
    option.forEach(opt => {
        const option = document.createElement("option");
        option.setAttribute("value", opt);
        option.textContent = opt;
        selectBox.append(option);
    });
}

function avatarApi(selectValue, inputValue) {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const sprites = selectValue;
    const seed = inputValue + ".svg";
    const url = "https://avatars.dicebear.com/api/" + sprites + "/" + seed + "?backgroundColor=white";

    xhr.open(method, url);
    xhr.onreadystatechange = function (event) {
        const { target } = event;
        if (target.readyState === XMLHttpRequest.DONE) {
            const { status } = target;
            if (status === 0 || (status >= 200 && status < 400)) {
                createImg(target);
            } else {
                alert("잘못된 요청 방식입니다.");
            }
        }
    };
    xhr.send();
}

function createImg(target) {
    let imgUrl = target.responseURL;

    result.innerHTML = "";
    const img = document.createElement("img");
    img.setAttribute("src", imgUrl);
    img.classList = "result-img";
    result.append(img);
}

function render() {
    let selectValue = selectBox.value;
    let inputValue = seedInput.value.trim("");
    avatarApi(selectValue, inputValue);
    seedInput.value = "";
}

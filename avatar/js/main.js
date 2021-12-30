const enterBtn = document.querySelector(".enter-btn");
const result = document.querySelector(".result");
const happyCheck = document.querySelector(".happyCheck");

function avatarApi(selectValue, inputValue) {
    const xhr = new XMLHttpRequest();
    const method = "GET";
    const url = "https://avatars.dicebear.com/api/";
    const sprites = selectValue;
    const seed = inputValue + ".svg";

    xhr.open(method, url + sprites + "/" + seed);
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

enterBtn.addEventListener("click", function () {
    let selectValue = document.querySelector("#selectBox").value;
    let inputValue = document.querySelector(".seed").value.trim("");
    avatarApi(selectValue, inputValue);
});

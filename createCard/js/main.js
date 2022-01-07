const cancelBtn = document.querySelector(".cancel-button");
const createBtn = document.querySelector(".create-button");

const nameInput = document.querySelector(".name");
const gender = document.querySelectorAll("input[type='radio']");
const phoneInput = document.querySelector(".phone-number");
const emailInput = document.querySelector(".email");
const femaleCheck = document.querySelector("#female");
const maleCheck = document.querySelector("#male");

let genderValue;

cancelBtn.addEventListener("click", () => {
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
});

createBtn.addEventListener("click", () => {
    if (!checkInput()) return;
    createUserInfo(nameInput.value, ".user-name");
    createUserInfo(phoneInput.value, ".user-phone");
    createUserInfo(emailInput.value, ".user-email");
    createUserInfo(gender, ".user-gender");
});

function createUserInfo(value, userInfoTitle) {
    const text = document.createElement("span");

    if (userInfoTitle === ".user-gender") {
        value.forEach(ele => {
            if (ele.checked) {
                const genderIcon = document.createElement("i");
                let gender;
                if (ele.id === "female") {
                    gender = "fa-venus";
                } else if (ele.id === "male") {
                    gender = "fa-mars";
                }
                genderIcon.classList = "fas " + gender;
                text.append(genderIcon);
            } else {
                return;
            }
        });
    } else {
        text.textContent = value;
    }
    document.querySelector(userInfoTitle).append(text);
}

function checkInput() {
    if (nameInput.value.trim("") === "") {
        alert("이름을 입력해주세요.");
        return false;
    }
    if (!femaleCheck.checked && !maleCheck.checked) {
        alert("성별이 선택되지 않았습니다~!");
        return false;
    }
    if (phoneInput.value.trim("") === "") {
        alert("전화번호를 입력해주세요.");
        return false;
    }
    if (emailInput.value.trim("") === "") {
        alert("이메일를 입력해주세요.");
        return false;
    }
    return true;
}

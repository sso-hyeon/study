const startBtn = document.querySelector(".start-btn");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const seedMoney = document.querySelector(".money");
const putMoney = document.querySelector("#put-money");

let money = 1000; // seed money
let pay; // 판돈

let plusPer = 0; // 틀릴수록 같은 숫자가 나올 확률 UP!

let val1, val2; // dice1, dice2 값

window.addEventListener("load", function () {
    textMoney();
});

window.addEventListener("keypress", function (e) {
    console.log(e.key);
});

startBtn.addEventListener("click", function () {
    pay = putMoney.value;
    if (money < pay) {
        const question = confirm("시드머니가 부족하여 더이상 게임을 진행할 수 없습니다. 게임을 다시 시작하시겠습니까?");
        if (question) {
            money = 1000;
            return textMoney();
        } else {
            return;
        }
    }

    randomDice();

    if (val1 !== val2) {
        plusPer += 1;
    } else {
        plusPer = 0;
    }

    dice1.textContent = val1;
    dice2.textContent = val2;

    countMoney();
    textMoney();
});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function textMoney() {
    seedMoney.textContent = money;
    putMoney.value = "";
    putMoney.focus();
}

function countMoney() {
    if (val1 === val2) {
        money += pay * val1;
    } else {
        money -= pay;
    }
}

function randomDice() {
    if (plusPer <= 10) {
        val1 = randomNumber(1, 6);
        val2 = randomNumber(1, 6);
    } else if (plusPer > 10 && plusPer <= 30) {
        val1 = randomNumber(2, 6);
        val2 = randomNumber(2, 6);
    } else if (plusPer > 30 && plusPer <= 70) {
        val1 = randomNumber(3, 6);
        val2 = randomNumber(3, 6);
    } else if (plusPer > 70 && plusPer <= 85) {
        val1 = randomNumber(4, 6);
        val2 = randomNumber(4, 6);
    } else if (plusPer > 85 && plusPer <= 95) {
        val1 = randomNumber(5, 6);
        val2 = randomNumber(5, 6);
    } else if (plusPer > 95 && plusPer <= 100) {
        val1 = randomNumber(6, 6);
        val2 = randomNumber(6, 6);
    }
}

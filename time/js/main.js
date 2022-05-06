const startBtn = document.querySelector(".start");
const recordBtn = document.querySelector(".record");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

const recordList = document.querySelector(".recordList");

let timer = false;
let myTimer;
let m = 0;
let s = 0;
let record = 1;

startBtn.addEventListener("click", () => {
    if (timer) return;
    timer = true;
    myTimer = setInterval(() => {
        s += 1;
        if (s > 59) {
            m += 1;
            s = 0;
            timeTxt(min, m);
        }
        timeTxt(sec, s);
    }, 1000);
});

recordBtn.addEventListener("click", () => {
    let recordTime = document.createElement("li");
    let recordCount = document.createElement("span");
    recordCount.innerText = "record " + record;
    recordTime.innerText = document.querySelector(".timeTxt").innerText;
    recordTime.append(recordCount);
    recordList.append(recordTime);
    return (record += 1);
});

stopBtn.addEventListener("click", () => {
    clearInterval(myTimer);
    timer = false;
});

resetBtn.addEventListener("click", () => {
    clearInterval(myTimer);
    m = 0;
    s = 0;
    record = 1;
    min.innerText = "00";
    sec.innerText = "00";
    recordList.innerHTML = "";
    timer = false;
});

function timeTxt(time, timeset) {
    time.innerText = timeset;
    if (time.innerText.length < 2) {
        time.innerText = "0" + timeset;
    }
}

"use strict";
const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const color = document.querySelector(".color");
const saveBtn = document.querySelector(".saveBtn");
const resetBtn = document.querySelector(".resetBtn");
const resultImg = document.querySelector(".resultImg");
const imgEle = new Image();

window.addEventListener("DOMContentLoaded", () => {
    createBtn();
});

var btnList = [
    { class: "colorBtn", type: "color", color: "black" },
    { class: "colorBtn", type: "color", color: "red" },
    { class: "colorBtn", type: "color", color: "orange" },
    { class: "colorBtn", type: "color", color: "yellow" },
    { class: "colorBtn", type: "color", color: "green" },
    { class: "colorBtn", type: "color", color: "blue" },
    { class: "colorBtn", type: "color", color: "purple" },
    { class: "imgBtn", type: "img", num: "1" },
    { class: "imgBtn", type: "img", num: "2" },
    { class: "imgBtn", type: "img", num: "3" }
];

function createBtn() {
    btnList.forEach(ele => {
        let div = document.createElement("div");
        div.classList = ele.class;
        div.dataset.type = ele.type;
        if (ele.color) div.dataset.color = ele.color;
        if (ele.num) div.dataset.num = ele.num;

        color.append(div);
    });
}

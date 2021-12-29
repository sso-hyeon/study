"use strict";

const tBtn = document.querySelector(".tBtn");
const pBtn = document.querySelector(".pBtn");
const sBtn = document.querySelector(".sBtn");
const blueBtn = document.querySelector(".blue");
const yellowBtn = document.querySelector(".yellow");
const pinkBtn = document.querySelector(".pink");
const logo = document.querySelector(".logo");
const items = document.querySelector(".items");

const itemList = [
    { color: ["pink"], category: ["t"], des: ["female"], size: ["large"] },
    { color: ["blue"], category: ["p"], des: ["male"], size: ["small"] },
    { color: ["yellow"], category: ["p"], des: ["male"], size: ["large"] },
    { color: ["yellow"], category: ["s"], des: ["female"], size: ["large"] },
    { color: ["pink"], category: ["s"], des: ["female"], size: ["large"] },
    { color: ["blue"], category: ["s"], des: ["female"], size: ["small"] },
    { color: ["blue"], category: ["t"], des: ["male"], size: ["large"] },
    { color: ["yellow"], category: ["t"], des: ["male"], size: ["large"] },
    { color: ["pink"], category: ["p"], des: ["female"], size: ["small"] },
    { color: ["pink"], category: ["t"], des: ["female"], size: ["large"] },
    { color: ["blue"], category: ["p"], des: ["male"], size: ["small"] },
    { color: ["yellow"], category: ["p"], des: ["male"], size: ["large"] },
    { color: ["yellow"], category: ["s"], des: ["female"], size: ["large"] },
    { color: ["pink"], category: ["s"], des: ["female"], size: ["large"] },
    { color: ["blue"], category: ["s"], des: ["female"], size: ["small"] },
    { color: ["blue"], category: ["t"], des: ["male"], size: ["large"] },
    { color: ["yellow"], category: ["t"], des: ["male"], size: ["large"] },
    { color: ["pink"], category: ["p"], des: ["female"], size: ["small"] }
];

let item;

window.addEventListener("DOMContentLoaded", () => {
    item = itemList;
    createItemList(item);
});

function createItemList(item) {
    for (let i = 0; i < item.length; i++) {
        createItem(i);
    }
}

function createItem(i) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");

    img.setAttribute("src", "img/" + item[i].color + "_" + item[i].category + ".png");
    span.innerHTML = item[i].des + ", " + item[i].size + " size";

    img.className = "item_thumb";
    span.className = "item_des";
    li.className = "item";

    li.appendChild(img);
    li.appendChild(span);
    items.appendChild(li);
}

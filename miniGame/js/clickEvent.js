"use strict";

logo.addEventListener("click", () => {
    location.reload();
});
tBtn.addEventListener("click", e => {
    itemFilter(e.target, "t");
});
pBtn.addEventListener("click", e => {
    itemFilter(e.target, "p");
});
sBtn.addEventListener("click", e => {
    itemFilter(e.target, "s");
});
blueBtn.addEventListener("click", e => {
    itemFilter(e.target, "blue");
});
yellowBtn.addEventListener("click", e => {
    itemFilter(e.target, "yellow");
});
pinkBtn.addEventListener("click", e => {
    itemFilter(e.target, "pink");
});

function itemFilter(target, value) {
    items.innerHTML = "";

    const list = target.dataset.list;
    item = itemList.filter(ele => ele[list][0] === value);

    createItemList(item);
}

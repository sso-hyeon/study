// fetch the items from the JSON file
function loadItems() {
    return fetch("js/result/data.json")
        .then(response => response.json())
        .then(json => json.items);
}
function displayItems(items) {
    const container = document.querySelector(".items");
    container.innerHTML = items.map(item => createHTMLString(item)).join("");
}
// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
    <img src="${item.image}" alt="${item.type}" class = "item_thumb" />
    <span class = "item_des">${item.gender}, ${item.size} size</span>
    </li>`;
}

function onBtnClick(event, items) {
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;

    if (key === null || value === null) return;

    // displayItems(items.filter(item => item[key] === value));
    updateItems(items, key, value);
}

function updateItems(items, key, value) {
    items.forEach(item => {
        console.log(item[key] === value);
        if (item[key] === value) {
            // item.classList.remove("d-none");
        } else {
            // item.classList.add("d-none");
        }
    });
}

function setEventListeners(items) {
    const logo = document.querySelector(".logo");
    const btns = document.querySelector(".buttons");

    logo.addEventListener("click", () => displayItems(items));
    btns.addEventListener("click", e => onBtnClick(e, items));
}

// main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log);

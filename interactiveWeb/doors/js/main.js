(function () {
    const stageEle = document.querySelector(".stage");
    // 현재 활성화된 아이템 저장
    let currentItem;

    // 활성화
    function active(ele) {
        currentItem = ele;
        currentItem.classList.add("door-open");
    }

    // 비활성화
    function expired(ele) {
        ele.classList.remove("door-open");
    }

    function doorHandler(e) {
        if (!e.target.matches(".door-body") || e.target.parentNode.matches(".door-open")) return;
        if (currentItem) {
            expired(currentItem);
        }
        active(e.target.parentNode);
    }

    active(document.querySelector(".door:nth-child(1)"));

    stageEle.addEventListener("click", doorHandler);
})();

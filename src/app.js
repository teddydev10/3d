const lis = document.querySelectorAll("li");

function moveDown() {
    lis[1].classList.add("down");
    lis[2].classList.add("up");
    setTimeout(() => {
        removeDown()
    }, 1000);
}

function removeDown() {
        lis[1].classList.remove("down");
        lis[2].classList.remove("up");
}
moveDown()
setInterval(() => {
    moveDown()
}, 2500);
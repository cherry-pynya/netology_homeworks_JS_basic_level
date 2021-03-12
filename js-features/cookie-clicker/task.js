const cookie = document.getElementById("cookie");
const cliks = document.getElementById("clicker__counter");
const spped = document.getElementById("clicker__speed");
let timeStart = new Date();

cookie.onclick = function() {
    if (cookie.width == 200) {
        cookie.width = 300
    } else {
        cookie.width = 200
    }

    let lastClick = new Date()
    let speed = lastClick.getTime() - timeStart.getTime();
    cliks.textContent = parseInt(cliks.textContent) + 1;
    spped.textContent = (1 / (speed / 1000)).toFixed(2);
    timeStart = new Date();
}


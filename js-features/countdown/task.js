const time = document.getElementById("timer");


const startCountdown = function() {
    time.textContent -= 1;

    if (time.textContent == -1) {
        window.alert("вы победили");
        clearInterval(starter);
        time.textContent = 0;
        window.location.assign("../countdown/hello.xlsx")
    }
};



const starter = setInterval(startCountdown, 1000);





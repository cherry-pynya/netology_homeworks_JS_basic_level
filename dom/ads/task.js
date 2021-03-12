const ads = Array.from(document.getElementsByClassName('rotator__case'));
let counter = 0;
let speed;

function changAdd() {

    if (counter+1 === ads.length) {
        counter = 0;
        speed = ads[counter].dataset.speed
    } else {
        counter += 1;
        speed = ads[counter].dataset.speed;
    }

    function nextAdd(i) {
        ads.forEach((item) => {
            item.classList.remove('rotator__case_active');
            //speed = item.dataset.speed;
            //console.log(speed)
        })

        ads[i].classList.add('rotator__case_active');
        ads[i].style.color = ads[i].dataset.color;

    }


    nextAdd(counter)
 
}

setInterval(changAdd, speed);



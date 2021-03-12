const btnNext = document.getElementsByClassName('slider__arrow_next')[0];
			btnPrev = document.getElementsByClassName('slider__arrow_prev')[0];
  		slydes = Array.from(document.getElementsByClassName('slider__item'));
let slydeIndex = 0;

btnNext.onclick = function() {
	if (slydeIndex+1 === slydes.length) {
  	slydeIndex = 0;
  } else {
  	slydeIndex += 1;
  }
  changeSlide(slydeIndex)
}

btnPrev.onclick = function() {
	if (slydeIndex-1 < 0) {
  	slydeIndex = slydes.length - 1;
  } else {
  	slydeIndex -= 1;
  }
  changeSlide(slydeIndex)
}

function changeSlide(i) {
	slydes.forEach((item) => {
  item.classList.remove('slider__item_active');
  })
  
  slydes[i].classList.add('slider__item_active')
}

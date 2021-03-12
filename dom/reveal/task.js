const elements = Array.from(document.getElementsByClassName('reveal'));



window.addEventListener('scroll', (event)=> {
	for (let i = 0; i < elements.length; i++) {
  		let rect = elements[i].getBoundingClientRect()
      if (rect.top <= 500) {
      	elements[i].classList.add('reveal_active')
      }
  }
})

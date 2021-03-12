const head = Array.from(document.getElementsByClassName('tab'));
	content = Array.from(document.getElementsByClassName('tab__content'));
  
  head.forEach((item) => {
  	item.addEventListener('click', () => {
    	let itemIndex =  head.indexOf(item);
      
      for (let i = 0; i < head.length; i++) {
      	head[i].classList.remove('tab_active')
        content[i].classList.remove('tab__content_active')
      }
      
      console.log(itemIndex);
      item.classList.add('tab_active');
			content[itemIndex].classList.add('tab__content_active');
    })
  })
  
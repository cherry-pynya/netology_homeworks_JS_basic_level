const hasTip = document.getElementsByClassName('has-tooltip');

Array.from(hasTip).forEach((i) => {
  i.addEventListener('click',(e) => {
    e.preventDefault();
    let title = i.title
    let top = i.getBoundingClientRect().top + 18
    let left = i.getBoundingClientRect().left

    let hint = i.querySelector('.tooltip')


    if (hint) {
      if (i.querySelector('.tooltip').classList.contains('tooltip_active')) {
        i.querySelector('.tooltip').classList.remove('tooltip_active');
      } else {
        i.querySelector('.tooltip').classList.add('tooltip_active');
      }
    } else if (!hint) {
      i.insertAdjacentHTML('beforeend', `
    <div class="tooltip tooltip_active" style="top: ${top}px; left: ${left}px">
      ${title}
    </div>
    `)
    }

   
  })
})


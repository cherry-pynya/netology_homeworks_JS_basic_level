const modal = document.getElementById('subscribe-modal');
const closeBtn = document.getElementById('subscribe-modal').querySelector('.modal__close_times')


window.addEventListener('load', ()=> {
  modal.classList.toggle('modal_active');
 
 if (!document.cookie === 'checked=yes') {
  modal.classList.toggle('modal_active');
 } 
})

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('modal_active');
 document.cookie = 'checked=yes';
 if (!document.cookie === 'checked=yes') {
  document.cookie = 'checked=yes';
 } 
})

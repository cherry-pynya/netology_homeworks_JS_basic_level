const text = document.getElementById('editor');

window.addEventListener('load', ()=> {

  if (localStorage.value) {
    text.value = localStorage.value
  }
})


text.addEventListener('input', ()=> {
  localStorage.value = text.value
})
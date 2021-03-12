const form = document.getElementById('form');
    progress = document.getElementById('progress');

form.addEventListener('submit', (e)=> {

    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', (e)=>{
        progress.value = e.loaded / e.total;
    })

    xhr.upload.addEventListener('load', ()=>{
        alert('Тайная комната снова открыта!')
    })

    xhr.upload.addEventListener('erroe', ()=>{
        alert('Тайная комната не открылась(((')
    })
    

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);

    e.preventDefault();
})







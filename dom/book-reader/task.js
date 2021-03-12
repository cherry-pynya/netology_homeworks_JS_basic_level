const fontSize = Array.from(document.getElementsByClassName('font-size'));
    book = document.getElementById('book');
let counter 



fontSize.forEach((item) => {
    item.addEventListener('click', (event) => {
        for (let i = 0; i < fontSize.length; i++) {
            fontSize[i].classList.remove('font-size_active');
        }
        book.classList.remove('book_fs-big', 'book_fs-small')
        item.classList.add('font-size_active');

       


        book.classList.toggle(`book_fs-${item.dataset.size}`)



        event.preventDefault();
    })

})
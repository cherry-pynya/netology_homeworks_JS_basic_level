let btn = document.getElementsByClassName('dropdown__value')[0];
    list = document.getElementsByClassName('dropdown__list')[0];
    item = Array.from(document.getElementsByClassName('dropdown__item'));

console.log(btn, list, item)

btn.addEventListener('click', () => {
    if (list.classList.contains('dropdown__list_active')) {
        list.classList.remove('dropdown__list_active');
    } else {
        list.classList.add('dropdown__list_active');
    }
});



Array.from(item).forEach((i) => {
    i.addEventListener('click', () => {
        btn.textContent = i.textContent;
        list.classList.remove('dropdown__list_active');
    })
    i.addEventListener('click', (event) => {event.preventDefault()});
})

//Array.from(item).forEach((i) => {
//    i.addEventListener('click', () => {
//        btn.textContent = i.textContent
//        btn.addEventListener('click', () => {list.classList.remove('dropdown__list_active')});
//    })
//})

//function click() {
//    for (let i =0; i < item.length; i++) {
//        item[i].addEventListener('click', () => {
//            btn.textContent = i.textContent
//            btn.addEventListener('click', () => {list.classList.remove('dropdown__list_active')});
//        })
//    }
//    return false
//}
//
//
//click()



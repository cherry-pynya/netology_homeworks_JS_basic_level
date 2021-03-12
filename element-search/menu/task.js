const menuLink = document.querySelectorAll('.menu__link');

const arrayLink = Array.from(menuLink);

arrayLink.forEach((i) => {
    i.onclick = function() {
        const menuSub = i.closest('.menu__item').querySelector('.menu_sub');
        if (!menuSub.classList.contains('menu_active')) {
            menuSub.classList.add('menu_active');
            return false;
        } else if (menuSub.classList.contains('menu_active')) {
            menuSub.classList.remove('menu_active');
            return false;
        } 
    }
});

console.log(arrayLink)




 




const btn = document.getElementsByClassName('product__quantity-control');
const cartBtn = document.getElementsByClassName('product__add');
const cart = document.getElementsByClassName('cart__products')[0];


console.log(btn)

Array.from(btn).forEach((item) => {

    item.addEventListener('click', ()=> {
        if(item.classList.contains('product__quantity-control_dec')) {
            if (parseInt(item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent) == 1){
                item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = 1;
            } else {
                item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = parseInt(item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent) - 1;
            }
        } else if (item.classList.contains('product__quantity-control_inc')) {
           item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = parseInt(item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent) + 1;
        }
    })
});

Array.from(cartBtn).forEach((item) => {
    item.addEventListener('click', () => {
        let id = item.closest('.product').dataset.id
        let quantity = item.closest('.product__controls').querySelector('.product__quantity-value').textContent;
        let img = item.closest('.product').querySelector('.product__image').src;
        let added = cart.querySelectorAll('.cart__product');
        let children = document.getElementsByClassName('cart__product');

        for (let item of cart.children) {
            if (item.dataset.id === id){
                item.querySelector('.cart__product-count').textContent = quantity;
                return false
            }
        }

        cart.insertAdjacentHTML('afterbegin', `
        <div class="cart__product" data-id="${id}">
        <img class="cart__product-image" src="${img}">
        <div class="cart__product-count">${quantity}</div>
        </div>
        `)
    })
})


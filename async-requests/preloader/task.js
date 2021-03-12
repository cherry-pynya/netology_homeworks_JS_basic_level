const xhr = new XMLHttpRequest();
    pic = document.getElementById('loader');
    table = document.getElementById('items');

xhr.responseType = 'json'
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        pic.classList.remove('loader_active');
        
        let currency = xhr.response.response.Valute;


        for (let item in currency) {
            console.log(item)
            table.insertAdjacentHTML('afterbegin', `
                <div class="item">
                    <div class="item__code">
                    ${currency[item].CharCode}
                    </div>
                    <div class="item__value">
                    ${currency[item].Value}
                    </div>
                    <div class="item__currency">
                    руб.
                    </div>
                </div>
            `)
        }
    }
})






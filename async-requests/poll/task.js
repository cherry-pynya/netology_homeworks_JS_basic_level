const poll = new XMLHttpRequest();
    questionTable = document.getElementById('poll__title');
    answerTable = document.getElementById('poll__answers');
    table = document.getElementById('poll');

poll.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
poll.send()
poll.responseType = "json"

poll.addEventListener('readystatechange', () => {
    if (poll.readyState === poll.DONE) {
        console.log(poll.response)
        let id = poll.response.id
        let question = poll.response.data
        let answerArr = question.answers
        console.log(answerArr)

        questionTable.textContent = question.title

        answerArr.forEach(element => {
            answerTable.insertAdjacentHTML('afterbegin', `
                <button class="poll__answer">
                    ${element}
                </button>
            `)
        });
        
        let btn = document.querySelectorAll('.poll__answer');
        console.log(btn)



        Array.from(btn).forEach((item) => {
            item.addEventListener('click', () => {
                window.alert('«Спасибо, ваш голос засчитан!»');
                let index = Array.from(btn).indexOf(item)
                console.log(index)
                let exitpoll = new XMLHttpRequest();
                exitpoll.open('POST', ' https://netology-slow-rest.herokuapp.com/poll.php');
                exitpoll.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                console.log(id)
                exitpoll.send(`vote=${id}&answer=${index}`);
                exitpoll.responseType = 'json';
                exitpoll.addEventListener('readystatechange', ()=>{
                    if (exitpoll.readyState === exitpoll.DONE) {
                        console.log(exitpoll.response);
                        console.log(table)
                        answerTable.remove();
                        let stat = exitpoll.response.stat
                        console.log(stat)
                        let total = 0;
                        for (let item in stat) {
                            total += parseInt(stat[item].votes);
                        }
                        console.log(total);
                        for (let item in stat) {
                            let answerQuantity = stat[item].votes;
                            console.log(answerQuantity);
                            table.insertAdjacentHTML('beforeend', `
                            <div>
                                ${stat[item].answer}: ${(answerQuantity/(total/100)).toFixed(2)}%
                            </div>
                        `)
                        }
                    }
                })
            })
        })
    }
})




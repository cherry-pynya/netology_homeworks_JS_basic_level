class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {

    //this.currentSymbol = document.getElementsByClassName('symbol_current')[0];
    //let word = [];
    //let typedWord = [];
//
    //Array.from(document.getElementsByClassName('symbol')).forEach((item) => {
    //  word.push(item.textContent)
    //})
//
    //document.addEventListener('keyup', (event) => {
    //  typedWord.push(event.key)
//
    //  console.log(this.currentSymbol);
    //  console.log(word);
    //  console.log(typedWord)
//
    //})
//
    //function check() {
    //  for (let i = 0; i < typedWord.length; i++) {
    //    if (typedWord[i] !== word[i]) {
    //      this.fail()
    //    }
    //  }
    //  if (word.length == typedWord) {
    //    for(let i = 0; i < typedWord.length; i++) {
    //      if (word[i] == typedWord[i]) {
    //        this.success()
    //      } 
    //    }
    //  }
    //}
//
    //check();

    this.currentSymbol = document.getElementsByClassName('symbol_current')[0];
    let typed 
    let need
    
    document.addEventListener('keyup', (event) => {
      console.log(this.currentSymbol.textContent)
      
      typed = (event.key).toLocaleLowerCase();
      need =  (this.currentSymbol.textContent).toLocaleLowerCase();

      if (typed == need) {
        this.success()
      } else {
        this.fail()
      }

      console.log(typed)
    })

 
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))


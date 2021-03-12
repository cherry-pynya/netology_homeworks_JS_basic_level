const widget = document.getElementsByClassName('chat-widget')[0];
	input = document.getElementsByClassName('chat-widget__input')[0];
  messages = document.getElementById('chat-widget__messages');
  time = new Date()
  list = ["А", "где", "список", "с", "ответами", "робота", "?"]
  
  

  
	widget.addEventListener('click', ()=> {
    	widget.classList.add('chat-widget_active')
    });
  
  input.addEventListener('change', () => {
  	if(input.value) {
    	messages.innerHTML += `
    	<div class="message message_client">
    		<div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
    		<div class="message__text">${input.value}</div>
			</div>
    `
    input.value = ""
    }
    let random = Math.floor(Math.random() * list.length)
    messages.innerHTML += `
    <div class="message">
    	<div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
    	<div class="message__text">${list[random]}</div>
		</div>
    `
  })
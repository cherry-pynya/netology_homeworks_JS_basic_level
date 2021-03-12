const formDiv = document.getElementById('signin');
const signInBtn = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');


window.addEventListener('load', ()=> {
	if (localStorage.user) {
  	welcome.classList.toggle('welcome_active');
    let user= JSON.parse(localStorage.user)
    userId.textContent = user.user_id
  } else if (!localStorage.user){
  	formDiv.classList.toggle('signin_active');
  }
});

signInBtn.addEventListener('click', (e)=> {
	let xhr = new XMLHttpRequest();
  let data = new FormData(form);
  

  
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.formdata = "json"
  xhr.send(data);

  
  xhr.addEventListener('load', ()=> {
		let answer = JSON.parse(xhr.responseText)
    	
    if (answer.success) {
      formDiv.classList.toggle('signin_active');
      welcome.classList.toggle('welcome_active');
      userId.textContent = answer.user_id
      localStorage.user = xhr.response
    } else if (!answer.success)
			window.alert("неверный пароль")
  })
	
  let lastname = localStorage.getItem('user')
  console.log(lastname)
  e.preventDefault();
})
const Titulo = document.querySelector('.login-h1');
const ButtonEnter = document.querySelector('.buttonEnter');
if (matchMedia('(max-width: 600px)').matches) {
  Titulo.innerHTML = 'Login';
  ButtonEnter.value = 'Entrar  ➜';
}

var http = require('http');

const Titulo = document.querySelector('.login-h1');
const ButtonEnter = document.querySelector('.buttonEnter');

if (matchMedia('(max-width: 600px)').matches) {
  Titulo.innerHTML = 'Login';
  ButtonEnter.value = 'Entrar  ➜';
}
const ThemeChanger = document.querySelector('.button-theme-changer').querySelector('input');
ThemeChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const passwordField = document.querySelector('#password');

console.log(passwordField);
let checkbox = document.querySelector('#showpassword');
console.log(checkbox);
if (checkbox) {
  checkbox.addEventListener('click', () => {
    if (!checkbox.checked && passwordField.getAttribute('type') === 'password') {
      passwordField.setAttribute('type', 'text');
    } else {
      passwordField.setAttribute('type', 'password');
    }
  });
};
ButtonEnter.addEventListener('click', validateUser);


function validateUser(event) {
  event.preventDefault();
  const user = document.querySelector('#username');
  const password = document.querySelector('#password');
  if (user.value === 'admin' && password.value === 'admin') {
    alert('Login realizado com sucesso!');
  } else {
    alert('Usuário ou senha inválidos!');
  };
};
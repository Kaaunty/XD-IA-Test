const Titulo = document.querySelector('.login-h1');
const ButtonEnter = document.querySelector('.buttonEnter');
if (matchMedia('(max-width: 600px)').matches) {
  Titulo.innerHTML = 'Login';
  ButtonEnter.value = 'Entrar  ➜';
}
const ThemeChanger = document.querySelector('.button-theme-changer').querySelector('input');

console.log(ThemeChanger);
ThemeChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  ThemeChanger.classList.toggle('active');
});
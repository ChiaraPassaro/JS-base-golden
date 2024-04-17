const inputUserName = document.getElementById('user-name');
const inputPassword = document.getElementById('password');
const buttonSubmit = document.getElementById('submit');

const userNameError = document.getElementById('user-name-error');
const passwordError = document.getElementById('password-error');

buttonSubmit.addEventListener('click',
  function () {
    const userName = inputUserName.value;
    const password = inputPassword.value;

    //lo username deve essere di almeno 5 caratteri
    // la password deve essere di almeno 8 e non piu di 10

    if (userName.length < 5) {
      userNameError.innerHTML = 'Lo UserName deve essere di almeno 5 caratteri';
    } else {
      userNameError.innerHTML = ''
    }

    if (password.length < 8 || password.length > 10) {
      passwordError.innerHTML = 'La password deve essere di almeno 8 caratteri e non piu di 10';
    } else {
      passwordError.innerHTML = ''
    }
  }
)
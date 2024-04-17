const inputUserName = document.getElementById('user-name');
const inputPassword = document.getElementById('password');
const buttonSubmit = document.getElementById('submit');
const h2Message = document.getElementById('message');
const userNameError = document.getElementById('user-name-error');
const passwordError = document.getElementById('password-error');
const loginDiv = document.getElementById('login');
const buttonLogout = document.getElementById('logout');

//dati mock DB
const userNameDB = 'ChiaraP';
const passwordDB = '1234567';

buttonSubmit.addEventListener('click',
  function () {
    const userName = inputUserName.value
    const password = inputPassword.value

    // if (userName != userNameDB) {
    //   h2Message.innerHTML = 'Username o password errata';
    //   userNameError.innerHTML = 'Username o password errata';
    //   userNameError.classList.remove('d-none');
    // }
    // else if (password != passwordDB) {
    //   h2Message.innerHTML = 'Username o password errata';
    //   passwordError.innerHTML = 'Username o password errata'
    //   passwordError.classList.remove('d-none');
    // }
    // else {
    //   h2Message.innerHTML = 'Benvenuto';
    //   userNameError.classList.add('d-none');
    //   passwordError.classList.add('d-none');
    // }

    //se la password e lo username sono uguali a quelli del db
    // puoi entrare
    //se una delle due è falsa non puoi entrare

    // if (userName == userNameDB && password == passwordDB) {
    //   h2Message.innerHTML = 'Benvenuto';
    // } else {
    //   h2Message.innerHTML = 'Username o password errata';
    // }

    // if (userName !== userNameDB || password != passwordDB) {
    //   h2Message.innerHTML = 'Username o password errata';
    // } else {
    //   h2Message.innerHTML = 'Benvenuto';
    // }

    if (userName == userNameDB && password == passwordDB) {
      h2Message.innerHTML = 'Benvenuto';
      userNameError.classList.add('d-none');
      passwordError.classList.add('d-none');
      loginDiv.classList.add('d-none');
      buttonLogout.classList.remove('d-none');
    } else {
      if (userName != userNameDB) {
        h2Message.innerHTML = 'Username o password errata';
        userNameError.innerHTML = 'Username o password errata';
        userNameError.classList.remove('d-none');
      } else {
        userNameError.classList.add('d-none');
      }
       
      if (password != passwordDB) {
        h2Message.innerHTML = 'Username o password errata';
        passwordError.innerHTML = 'Username o password errata'
        passwordError.classList.remove('d-none');
      } 
       else {
        passwordError.classList.add('d-none');
      }
    }

  }
)

buttonLogout.addEventListener('click',
  function () {
    h2Message.innerHTML = '';
    loginDiv.classList.remove('d-none');
    buttonLogout.classList.add('d-none');
    inputUserName.value = '';
    inputPassword.value = '';
  }
)
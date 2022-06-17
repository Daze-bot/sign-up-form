let submitBtn = document.querySelector('.submitButton');
let hiddenBtn = document.querySelector('#hiddenBtn');
let passwordInput = document.querySelector('#user_password')
let passwordReq = document.querySelector('#passwordReq');
let confirmInput = document.querySelector('#confirm_password');
let confirmReq = document.querySelector('#confirmPass');

submitBtn.addEventListener('click', submitBtnClick);

let inputFields = document.querySelectorAll('input');

inputFields.forEach(input => {
  if (input.value === "") {
    input.classList.add('ignore');
  }
  input.addEventListener('input', () => {
    input.classList.remove('ignore');
  })
})

passwordInput.addEventListener('focus', () => {
  passwordReq.classList.remove('hidden');
})

passwordInput.addEventListener('input', () => {
  if (passwordInput.validity.valid) {
    passwordReq.classList.add('hidden');
  }
  else {
    passwordReq.classList.remove('hidden');
  }
})

passwordInput.addEventListener('input', () => {
  if (passwordInput.value !== confirmInput.value) {
    confirmReq.classList.remove('hidden');
  } else {
    confirmReq.classList.add('hidden');
  }
})

confirmInput.addEventListener('input', () => {
  if (passwordInput.value !== confirmInput.value) {
    confirmReq.classList.remove('hidden');
  } else {
    confirmReq.classList.add('hidden');
  }
})

function submitBtnClick() {
  hiddenBtn.click();
  inputFields.forEach(input => {
      input.classList.remove('ignore');
    })}
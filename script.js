let submitBtn = document.querySelector('.submitButton');
let hiddenBtn = document.querySelector('#hiddenBtn');
let passwordInput = document.querySelector('#user_password')
let passwordReq = document.querySelector('#passwordReq');
let confirmInput = document.querySelector('#confirm_password');
let confirmReq = document.querySelector('#confirmPass');
let inputFields = document.querySelectorAll('input');

submitBtn.addEventListener('click', submitBtnClick);

/* Don't show invalid input border when input is blank */
inputFields.forEach(input => {
  if (input.value === "") {
    input.classList.add('ignore');
  }
  input.addEventListener('input', () => {
    input.classList.remove('ignore');
  })
})

/* Don't show password requirements until focused for the first time */
passwordInput.addEventListener('focus', () => {
  let passwordStr = passwordInput.value;
  if (passwordStr.length >= 8) {
    passwordReq.classList.add('hidden');
  } else {
    passwordReq.classList.remove('hidden');
  }
})

/* Hide the password requirements when valid */
passwordInput.addEventListener('input', () => {
  let passwordStr = passwordInput.value;
  if (passwordStr.length >= 8) {
    passwordReq.classList.add('hidden');
  } else {
    passwordReq.classList.remove('hidden');
  }
})

/* Custom validation for password input */
submitBtn.addEventListener('click', () => {
  if (passwordInput.value.length > 1 && passwordInput.value.length < 8) {
    passwordInput.setCustomValidity('Password must be at least 8 characters');
    passwordInput.addEventListener('input', validatePassword);
  } else if (passwordInput.value.length === 0) {
    passwordInput.setCustomValidity('Please enter a password');
    passwordInput.addEventListener('input', validatePassword);
  } else if (passwordInput.value.length >= 8) {
    passwordInput.setCustomValidity('');
    passwordInput.addEventListener('input', validatePassword);
  }
})

/* Compare passwords on every password input*/
passwordInput.addEventListener('input', checkPasswords);
confirmInput.addEventListener('input', checkPasswords);

/* Submit form when clicking on 'Create Account' button*/
function submitBtnClick() {
  hiddenBtn.click();
  inputFields.forEach(input => {
      input.classList.remove('ignore');
    })
}

function checkPasswords() {
  if (passwordInput.value !== confirmInput.value) {
    confirmReq.classList.remove('hidden');
    confirmInput.setCustomValidity('Passwords do not match');
  } else {
    confirmReq.classList.add('hidden');
    confirmInput.setCustomValidity('');
  }
}

function validatePassword() {
  if (passwordInput.value.length > 1 && passwordInput.value.length < 8) {
    passwordInput.setCustomValidity('Password must be at least 8 characters');
  } else if (passwordInput.value.length === 0) {
    passwordInput.setCustomValidity('Please enter a password');
  } else if (passwordInput.value.length >= 8) {
    passwordInput.setCustomValidity('');
  }
}
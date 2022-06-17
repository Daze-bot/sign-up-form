let submitBtn = document.querySelector('.submitButton');
let hiddenBtn = document.querySelector('#hiddenBtn');
let passwordInput = document.querySelector('#user_password')
let passwordReq = document.querySelector('#passwordReq');
let confirmInput = document.querySelector('#confirm_password');
let confirmReq = document.querySelector('#confirmPass');
const phoneRegEx = "^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$";
let phoneNumber = document.querySelector('#user_phone');

submitBtn.addEventListener('click', submitBtnClick);

let inputFields = document.querySelectorAll('input');

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

/* Hide the password requirements when valid */
passwordInput.addEventListener('input', () => {
  let passwordStr = passwordInput.value;
  if (passwordStr.length >= 8) {
    passwordReq.classList.add('hidden');
  } else {
    passwordReq.classList.remove('hidden');
  }
})

/* Compare password inputs on every input in either password */
passwordInput.addEventListener('input', checkPasswords);
confirmInput.addEventListener('input', checkPasswords);

/* Custon validation for phone number input */
submitBtn.addEventListener('click', () => {
  if (phoneNumber.value == phoneRegEx) {
    phoneNumber.setCustomValidity('');
    phoneNumber.addEventListener('input', validatePhone);
  } else {
    phoneNumber.setCustomValidity('Please enter a valid phone number');
    phoneNumber.addEventListener('input', validatePhone);
  }
})

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

function validatePhone() {
  if (phoneNumber.value == phoneRegEx) {
    phoneNumber.setCustomValidity('');
  } else if (phoneNumber.value.length === 0) {
    phoneNumber.setCustomValidity('');
  } else {
    phoneNumber.setCustomValidity('Please enter a valid phone number');
  }
}
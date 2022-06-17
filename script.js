let submitBtn = document.querySelector('.submitButton');
let hiddenBtn = document.querySelector('#hiddenBtn');

submitBtn.addEventListener('click', submitBtnClick);

let inputFields = document.querySelectorAll('input');
let nameInput = document.querySelector('#first_name');

inputFields.forEach(input => {
  if (input.value === "") {
    input.classList.add('ignore');
  }
  input.addEventListener('input', () => {
    input.classList.remove('ignore');
  })
})

function submitBtnClick() {
  hiddenBtn.click();
  inputFields.forEach(input => {
      input.classList.remove('ignore');
    })}
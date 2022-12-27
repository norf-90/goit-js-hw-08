import throttle from 'lodash.throttle';

const KEY_NAME = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
let formData = load(KEY_NAME) ?? {};
console.log('Initial formData: ', formData);

initForm();
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  console.table(formData);
  save(KEY_NAME, formData);
}

function initForm() {
  Object.keys(formData).forEach(key => {
    formEl.elements[key].value = formData[key];
  });
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(load(KEY_NAME));
  localStorage.removeItem(KEY_NAME);
  formEl.elements.email.value = '';
  formEl.elements.message.value = '';
  formData = {};
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
}

function load(key) {
  try {
    return JSON.parse(localStorage[key]);
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
}

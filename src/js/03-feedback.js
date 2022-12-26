import throttle from 'lodash.throttle';

const KEY_NAME = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('[name=email]');
const inputMessageEl = document.querySelector('[name=message]');
const buttonEl = document.querySelector('[type=submit]');
const formData = {};

inputEmailEl.value = load(KEY_NAME).email ?? '';
inputMessageEl.value = load(KEY_NAME).message ?? '';

formEl.addEventListener('input', throttle(onFormInput, 500));
buttonEl.addEventListener('click', onButtonClick);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  save(KEY_NAME, formData);
}

function onButtonClick(event) {
  event.preventDefault();
  console.log(load(KEY_NAME));
  localStorage.removeItem(KEY_NAME);
  inputEmailEl.value = '';
  inputMessageEl.value = '';
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
    return localStorage[key] ? JSON.parse(localStorage[key]) : {};
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
}

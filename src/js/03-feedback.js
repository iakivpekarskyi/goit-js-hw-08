import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);

function onFormData(evt) {
   const textIn = localStorage.setItem(KEY, JSON.stringify(formData));
   const formData = { email: email.value, message: message.value };
};

function onFormSubmit(evt) { 
   evt.preventDefault();
   evt.target.reset();
   localStorage.removeItem(KEY);
   
   const formData = { email: email.value, message: message.value };
   console.log(formData);
  
};

updateInput();

function updateInput(evt) {
   const savedInput = JSON.parse(localStorage.getItem(KEY))
   if (savedInput) {
      email.value = savedInput.email;
      message.value = savedInput.message;
      
}
}; 


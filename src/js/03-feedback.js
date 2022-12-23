import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);


function isThereAnInput(evt) {
   const savedInput = localStorage.getItem(KEY)
   if (savedInput) {
}
};
 
function onFormData(evt) {
   const formData = {email: email.value,message: message.value};
   const textIn = localStorage.setItem(KEY, JSON.stringify(formData));
    console.log(textIn)


};


function onFormSubmit(evt) { 
   evt.preventDefault();
   evt.target.reset();
   localStorage.removeItem(KEY);
};




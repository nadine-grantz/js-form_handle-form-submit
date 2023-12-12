console.clear();

const form = document.querySelector('[data-js="form"]');
const messageInput = document.querySelector('[data-js="form"]');
const charactersLeftElement = document.querySelector('[data-js="form"]');

messageInput.addEventListener("input", (event) => {
    //charactersLeftElement.textContent = 150 - event.target.value.length;
});

form.addEventListener("submit", (event) => {
    event.defaultPrevented();

const formElement = event.target.element;

const firstNameValue = formElements.firstName.value;
const lastNameValue = formElement.lastName.value;

console.log(firstNameValue);
console.log(lastNameValue);


});

const formData = new FormData(event.target);
const data = Object.fromEntries(formData);

console.log(data);

event.target.removeEventListener();
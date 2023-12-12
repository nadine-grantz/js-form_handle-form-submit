console.clear();

const form = document.querySelector('[data-js="form"]');
const messageInput = document.querySelector('[data-js="form"]');
const charactersLeftElement = document.querySelector('[data-js=""]');

messageInput.addEventListener("input", (event) => {
    charactersLeftElement.textContent = 150 - event.target.value.length;
});

form.addEventListener("submit", (event) => {
    event.defaultPrevented();
});

const formData = new FormData(event.target);
const data = Object.fromEntries(formData);
console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault(); //unterbindet das Standart Verhalten von einem formular
  
    const formData = new FormData(event.target); // gibt alle Daten von einem Formular an
    const data = Object.fromEntries(formData);
  
    console.log(data);

    event.target.reset();
    event.target.elements.firstName.focus(); // der Courser wechselt beim Abschicken vom Formular in den First Name
  });


//const form = document.querySelector('[data-js="form"]');
//const messageInput = document.querySelector('[data-js="form"]');
//const charactersLeftElement = document.querySelector('[data-js="form"]');

//messageInput.addEventListener("input", (event) => {
    //charactersLeftElement.textContent = 150 - event.target.value.length;
//});

//form.addEventListener("submit", (event) => {
 //   event.defaultPrevented();

//const formElements = event.target.element;

//const firstNameValue = formElements.firstName.value;
//const lastNameValue = formElements.lastName.value;

//console.log(firstNameValue);
//console.log(lastNameValue);

//const formData = new FormData(event.target);
//const data = Object.fromEntries(formData);

//console.log(data);

//event.target.removeEventListener();
//});




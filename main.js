
const firstName = document.getElementById('FirstNameImput');
const lastName = document.getElementById('lastNameInput');
const emailAddress = document.getElementById('emailInput');
const password = document.getElementById('passImput');

const FirstNameError = document.getElementById('FirstNameError');
const LastNameError = document.getElementById('LastNameError');
const emailAddressError = document.getElementById('emailError');
const passwordError = document.getElementById('passError');

const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmpty(firstName.value, firstName, FirstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, LastNameError, 'Last name cannot be empty');
    validateEmail(emailAddress.value, emailAddress, emailAddressError);
    validateEmpty(password.value, password, passError, 'Password cannot be empty');
});

function validateEmail(valueInput, divInput, divError) {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if (regExp.test(valueInput) == true) {
        hideError(divInput, divError);
    } else {
        showError(divInput, divError, 'looks like this is not an email');
    }

}

function validateEmpty(valueInput, divInput, divError, nameInput) {
    if (valueInput.length == 0) {
        showError(divInput, divError, nameInput);
    } else {
        hideError(divInput, divError);
    }

}

function showError(divInput, divError, error) {
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="">
    <p class="error">${error}</p>`;
}

function hideError(divInput, divError) {
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = '';
}
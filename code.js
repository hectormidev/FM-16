// Inputs elements
const btn = document.querySelector('.btn')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('.form')


//Errors
let errorSign = document.querySelectorAll('.error-sign')
let errorMessage = document.querySelectorAll('.error-message')

btn.addEventListener('click', e =>{
    e.preventDefault()
    validateNames(firstName.value, lastName.value)
    validateEmail(email.value)
    minimumCharacters(password.value)
})

const validateNames = (firstName, lastName) =>{
    //FIRST NAME VALIDATION
        let lettersFN;
        for(let i = 0; i < firstName.length; i++){
            if(!/[a-zA-z]/.test(firstName[i])) lettersFN = false
                else lettersFN = true
        }

        if(firstName.length === 0 || lettersFN === false){
            errorSign[0].classList.remove('hidden')
            errorMessage[0].classList.remove('hidden')
        } else{
            errorSign[0].classList.add('hidden')
            errorMessage[0].classList.add('hidden')
        }

    //LAST NAME VALIDATION
        let lettersLN;
        for(let i = 0; i < lastName.length; i++){
            if(!/[a-zA-z]/.test(lastName[i])) lettersLN = false
                else lettersLN = true
        }

        if(lastName.length === 0 || lettersLN === false){
            errorSign[1].classList.remove('hidden')
            errorMessage[1].classList.remove('hidden')
        } else{
            errorSign[1].classList.add('hidden')
            errorMessage[1].classList.add('hidden')
        }
}

const validateEmail = email => {
    // Regular expression to check for valid email addresses
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    // Checking if the email is valid
    let validation = regex.test(email);
    // Checking the value of the validation variable
    if (validation === false) {
    errorSign[2].classList.remove('hidden');
    errorMessage[2].classList.remove('hidden');
    } else {
    errorSign[2].classList.add('hidden');
    errorMessage[2].classList.add('hidden');
    }
};

const minimumCharacters = password =>{
    if (password.length < 6) {
        errorSign[3].classList.remove('hidden');
        errorMessage[3].classList.remove('hidden');
        } else {
        errorSign[3].classList.add('hidden');
        errorMessage[3].classList.add('hidden');
        }
}
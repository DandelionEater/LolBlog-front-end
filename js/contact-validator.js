const form = document.getElementById('form-valid');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');

form.addEventListener('submit', e => {
    e.preventDefault();

    if(validateInputs())
        setTimeout(() => {
            alert(`Message successully sent with information:\nEmail: ${email.value.trim()}\nMessage: ${textarea.value.trim()}`);
        }, 10);
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^[\w-.]+@([\w-]+\.(?!\.))+[\w-]{2,3}$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.value.trim();
    const textareaValue = textarea.value.trim();

    let success = true;

    if(emailValue === '') {
        setError(email, 'Email is required');
        success = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        success = false;
    } else {
        setSuccess(email);
    }

    if(textareaValue === '') {
        setError(textarea, 'Message is required');
        success = false;
    } else if (textareaValue.length < 8 ) {
        setError(textarea, 'message must be at least 8 character.')
        success = false;
    } else {
        setSuccess(textarea);
    }

    return success;

};




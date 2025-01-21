const form = document.getElementById('form-valid');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    if(validateInputs())
        setTimeout(() => {
            alert(`Registered successully with information:\nUsername: ${username.value.trim()}\nEmail: ${email.value.trim()}\nPassword: ${password.value.trim()}\nPassword: ${password2.value.trim()}`);
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
    const re = /^[\w-.]+@([\w-]+\.(?!\.))+[\w-]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    let success = true;

    if(usernameValue === '') {
        setError(username, 'Username is required');
        success = false;
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        success = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        success = false;
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        success = false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
        success = false;
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        success = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        success = false;
    } else {
        setSuccess(password2);
    }

    return success;
};


let x = 0;

const btn = document.getElementById('submit-guess');
const maxNumber = document.getElementById('max-number-input');
const input = document.getElementById('guess-input');
const guessesList = document.getElementById('guess-history');

let btnDel = () => {
    guessesList.innerText += `\n${input.value}`;

    maxNumber.setAttribute("disabled", true);

    const result = guess(input.value);

    input.value = "";

    if(result !== 0)
    {
        if(result == -1)
            setError(input, "Your guess is too low");
        else
            setError(input, "Your guess is too high");
        return console.log(`Wrong guess, supposed to be ${x}`);
    }

    setSuccess(input);

    btn.innerText = "Restart";

    btn.removeEventListener('click', btnDel);
    btn.addEventListener('click', () => {
        location.reload();
    });
};

start();

maxNumber.addEventListener('keypress', () => {
    start();
    console.log(maxNumber.value);
});

btn.addEventListener('click', btnDel);

function start() {
    x = Math.ceil(Math.random() * maxNumber.value + 1);
}

function guess(number) {
    return number == x ? 0 : number < x ? -1 : 1;
}

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
let formElement = document.querySelector('#form');
let url = 'http://localhost:3000/persons/';

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    let mail = document.querySelector('#mail').value;
    let password = document.querySelector('#password').value;

    axios.post(url, {
        email: mail,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
});
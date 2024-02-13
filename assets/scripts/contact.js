document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const url = 'http://localhost:3000/contact';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const message = document.querySelector('#message').value;
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;

        const data = {
            message: message,
            name: name,
            email: email
        };

        axios.post(url, data)
    });
});
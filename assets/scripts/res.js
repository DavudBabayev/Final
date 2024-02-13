document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    let res = 'http://localhost:3000/reservation/';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let phone = document.querySelector('#phone').value;
        let date = document.querySelector('#date').value;
        let time = document.querySelector('#time').value;
        let person = document.querySelector('#person').value;

        let reservationData = {
            name: name,
            email: email,
            phone: phone,
            date: date,
            time: time,
            person: person
        };

        axios.post(res, reservationData)
    });
});
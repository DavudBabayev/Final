let formElement = document.querySelector('#form');
let url = 'http://localhost:3000/persons/';

let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;

if (user) {
    window.location = './index.html';
}

console.log(user);

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    let mail = document.querySelector('#mail').value;
    let password = document.querySelector('#password').value;

    axios.get(url)
        .then(response => {
            let data = response.data;
            console.log(data);
            let currentUserInfo = data.find((user) => user.email == mail);
            if (currentUserInfo) {
                if (currentUserInfo.password == password) {
                    localStorage.setItem('currentUser', JSON.stringify(currentUserInfo));
                    window.location = './index.html';
                } else {
                    alert('Wrong password');
                }
            } else {
                alert("Wrong email");
            }
        })
});
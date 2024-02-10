let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;

let log = document.querySelector(".log");
let us = document.querySelector(".user");
let logOut = document.querySelector("#logOut");
let test = document.querySelector(".test");

let pages = document.querySelectorAll(".icons");

pages.forEach(() => {
    if (user) {
        us.innerHTML += `<i class="bi bi-person-circle">${user}</i> `;
        us.style.display = 'flex';
        log.style.display = 'none';
    } else {
        us.style.display = 'none';
        log.style.display = 'flex';
    }

    logOut.addEventListener("click", () => {
        localStorage.removeItem('currentUser');
        window.location = './login.html';
    });
});
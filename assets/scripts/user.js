document.addEventListener('DOMContentLoaded', () => {
    let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).email : null;
    let log = document.querySelector(".log");
    let us = document.querySelector(".user");
    let pages = document.querySelectorAll(".icons");

    const handleLogOut = () => {
        localStorage.removeItem('currentUser');
        user = null;
        updateDisplay();
    };

    const updateDisplay = () => {
        if (user) {
            us.innerHTML = `<button id="logOutButton">Log Out</button>
                            <i class="bi bi-person-circle">${user}</i>`;
            us.style.display = 'flex';
            log.style.display = 'none';
            document.getElementById('logOutButton').addEventListener('click', handleLogOut);
        } else {
            us.style.display = 'none';
            log.style.display = 'flex';
        }
    };

    updateDisplay();

    pages.forEach(page => {
        page.addEventListener('click', () => {
            updateDisplay();
        });
    });
});
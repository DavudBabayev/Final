let url1 = ' http://localhost:3000/persons';


document.getElementById('signup').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('login').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('signup-button').addEventListener('click', function (event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let username = document.getElementById('fullname').value;
    let password = document.getElementById('password1').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (password.trim() !== confirmPassword.trim()) {
        alert('Passwords do not match');
        return;
    }
    else {
        axios.post(url1, {
            username: username,
            email: email,
            password: password
        })
    }
});

document.getElementById('login-button').addEventListener('click', function (event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);

});
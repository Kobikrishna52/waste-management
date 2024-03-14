var users = {};

function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'inline-block';
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'inline-block';
    document.getElementById('signupForm').style.display = 'none';
}

function performLogin() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    if (users[username] && users[username] === password) {
        alert('Login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Login failed. Check your credentials.');
    }
}

function performSignup() {
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;

    if (users[username]) {
        alert('Username already exists. Choose a different one.');
    } else {
        users[username] = password;
        alert('Signup successful! Credentials stored.');
        showLoginForm(); // Show the login form after successful signup
    }
}

// Initially, show the login form
showLoginForm();
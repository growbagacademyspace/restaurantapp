const signinForm = document.getElementById('signin-form');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Sign in successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password.');
    }
});

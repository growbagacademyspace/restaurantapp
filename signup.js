const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(u => u.email === email);

    if (userExists) {
        alert('User with this email already exists.');
    } else {
        const user = {
            fullName,
            email,
            password
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign up successful!');
        window.location.href = 'signin.html';
    }
});
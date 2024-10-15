document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login');
    const registerButton = document.getElementById('registerButton');
    const logoutButton = document.getElementById('logoutButton'); // Obtén el botón de cerrar sesión

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }

    registerButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validatePassword(password)) {
            const encryptedPassword = encryptPassword(password);
            const userId = Date.now();
            localStorage.setItem(`user_${userId}`, JSON.stringify({ username, password: encryptedPassword }));
            alert('User registered successfully!');
        } else {
            document.getElementById('password').classList.add('is-invalid');
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const encryptedPassword = encryptPassword(password);
        let userFound = false;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const user = JSON.parse(localStorage.getItem(key));

            if (user && user.username === username && user.password === encryptedPassword) {
                localStorage.setItem('currentUser', key);
                window.location.href = 'dashboard.html';
                userFound = true;
                break;
            }
        }

        if (!userFound) {
            document.getElementById('username').classList.add('is-invalid');
            document.getElementById('password').classList.add('is-invalid');
        }
    });
});

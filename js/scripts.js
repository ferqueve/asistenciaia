document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login');
    const registerButton = document.getElementById('registerButton');

    // Evento de registro
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

    // Evento de login
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

function validatePassword(password) {
    return /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
}

function encryptPassword(password) {
    
    return btoa(password);
}

// Lógica de Dashboard
function creditAccount(amount) {
    const userId = localStorage.getItem('currentUser');
    const accountKey = `account_${userId}`;
    const account = JSON.parse(localStorage.getItem(accountKey)) || { balance: 0, transactions: [] };

    account.balance += amount;
    account.transactions.push({ type: 'Credit', amount });
    localStorage.setItem(accountKey, JSON.stringify(account));

    updateDashboard();
}

function debitAccount(amount) {
    const userId = localStorage.getItem('currentUser');
    const accountKey = `account_${userId}`;
    const account = JSON.parse(localStorage.getItem(accountKey)) || { balance: 0, transactions: [] };

    account.balance -= amount;
    account.transactions.push({ type: 'Debit', amount });
    localStorage.setItem(accountKey, JSON.stringify(account));

    updateDashboard();
}

function updateDashboard() {
    const userId = localStorage.getItem('currentUser');
    const accountKey = `account_${userId}`;
    const account = JSON.parse(localStorage.getItem(accountKey)) || { balance: 0, transactions: [] };

    document.getElementById('previousBalance').innerText = account.balance - (account.transactions.length > 0 ? account.transactions[0].amount : 0);
    document.getElementById('currentBalance').innerText = account.balance;

    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';
    account.transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerText = `${transaction.type}: $${transaction.amount}`;
        transactionList.appendChild(listItem);
    });
}

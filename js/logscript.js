document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'pass') {
        alert('Inicio de sesión exitoso');
        window.location.href = 'dashboard.html';  // Redirige al dashboard
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});


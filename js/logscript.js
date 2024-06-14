document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'pass') {
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir al usuario o realizar otra acción
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

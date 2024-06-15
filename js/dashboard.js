document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.sidebar').classList.toggle('dark-mode');
});

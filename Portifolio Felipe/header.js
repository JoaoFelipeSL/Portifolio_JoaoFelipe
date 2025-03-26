// header.js
document.getElementById('hamburguer').addEventListener('click', function() {
    // Alterna a visibilidade do menu de navegação e contatos
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

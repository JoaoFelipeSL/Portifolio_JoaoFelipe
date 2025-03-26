// header.js
document.getElementById('hamburguer').addEventListener('click', function() {
    // Alterna a visibilidade do menu de navegação e contatos
    const navbar = document.querySelector('.navbar');
    const contatosNavbar = document.querySelector('.contatos_navbar');
    navbar.classList.toggle('active');
    contatosNavbar.classList.toggle('active');
});

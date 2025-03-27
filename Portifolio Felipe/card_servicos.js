function mostrarMais(servico) {
    let descricao = document.getElementById(`descricao-${servico}`);
    let botao = descricao.nextElementSibling; // Botão está sempre após o parágrafo

    // Texto adicional para expandir
    let textoAdicional = {
        websites: " Descrição expandida para web sites, incluindo detalhes de performance, responsividade e usabilidade.",
        sistemas: " Descrição expandida para sistemas comerciais, com detalhes sobre funcionalidades, integração com sistemas e mais.",
        database: " Descrição expandida sobre o trabalho com bancos de dados, como manipulação e segurança de dados."
    };

    if (descricao.classList.contains('expandido')) {
        descricao.classList.remove('expandido');
        descricao.innerHTML = descricao.innerHTML.split('<br>')[0]; // Remove o texto adicional
        botao.innerHTML = "Saber mais"; // Altera o botão de volta para "Saber mais"
    } else {
        descricao.classList.add('expandido');
        descricao.innerHTML += "<br>" + textoAdicional[servico]; // Adiciona o texto adicional
        botao.innerHTML = "Fechar"; // Altera o botão para "Fechar"
    }
}

function mostrarMais(servico) {
    let descricao = document.getElementById(`descricao-${servico}`);
    let botao = descricao.nextElementSibling; // Botão está sempre após o parágrafo

    // Texto adicional para expandir
    let textoAdicional = {
        websites: "Construo websites para empresas, pequenos negócios e sites pessoais, sempre buscando atender ao máximo os gostos dos meus clientes e criando sites que reflitam suas identidades de forma única e personalizada.",
        sistemas: "Trabalho com o desenvolvimento de sistemas que atendem a diversas demandas, como chatbots, administração de estoque e gerenciadores de atividades empresariais e acadêmicas.",
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

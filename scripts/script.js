// Aguarda o conteúdo do HTML ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Funcionalidade 1: Alerta de Confirmação ao Adicionar ao Carrinho
     * Seleciona todos os botões de "Adicionar ao Carrinho" e adiciona um evento de clique.
     */
    const addToCartButtons = document.querySelectorAll('.product-card .btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encontra o card do produto pai do botão que foi clicado
            const productCard = button.closest('.product-card');
            // Dentro do card, encontra o nome do produto no elemento <h3>
            const productName = productCard.querySelector('h3').textContent;

            // Exibe um alerta de confirmação para o usuário
            alert(`"${productName}" foi adicionado ao carrinho com sucesso!`);
        });
    });


    /**
     * Funcionalidade 2: Data Dinâmica no Rodapé
     * Exibe a data atual formatada no rodapé da página.
     */
    const displayCurrentDate = () => {
        const dateElement = document.getElementById('current-date');
        const today = new Date();

        // Opções para formatar a data para o padrão brasileiro (dia de mês de ano)
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        // toLocaleDateString formata a data de acordo com a localidade e as opções
        dateElement.textContent = `Hora local: ${today.toLocaleDateString('pt-BR', options)}`;
    };

    // Chama a função para exibir a data assim que a página carrega
    displayCurrentDate();

});
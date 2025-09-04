/**
 * =========================================================================
 * CONFIGURAÇÕES E SELETORES DO DOM
 * =========================================================================
 */
const FAKE_STORE_API_URL = 'https://fakestoreapi.com/products';
const productGrid = document.querySelector('.product-grid');
const dateElement = document.getElementById('current-date');

/**
 * =========================================================================
 * FUNÇÕES DE LÓGICA
 * =========================================================================
 */

/**
 * Busca os produtos da API.
 * @returns {Promise<Array>} Uma promessa que resolve para um array de produtos.
 */
async function fetchProducts() {
    try {
        const response = await fetch(FAKE_STORE_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Falha ao buscar produtos:", error);
        throw error;
    }
}

/**
 * Cria o HTML para um único card de produto.
 * @param {object} product - O objeto do produto vindo da API.
 * @returns {HTMLElement} O elemento <article> do card do produto.
 */
function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';

    const shortDescription = product.description.length > 100
        ? product.description.substring(0, 100) + '...'
        : product.description;
    
    const formattedPrice = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="description">${shortDescription}</p>
        <p class="price">${formattedPrice}</p>
        <button class="btn">Adicionar ao Carrinho</button>
    `;

    return card;
}

/**
 * Renderiza os produtos na grade do DOM.
 * @param {Array} products - Um array de objetos de produto.
 */
function renderProducts(products) {
    productGrid.innerHTML = ''; // Limpa a mensagem de "Carregando..."
    products.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);
    });
}

/**
 * Exibe uma mensagem de erro na interface do usuário.
 */
function displayErrorMessage() {
    productGrid.innerHTML = `
        <p class="error-message">
            Oops! Não foi possível carregar os produtos.
            Por favor, tente novamente mais tarde.
        </p>
    `;
}

/**
 * Exibe a data atual formatada no rodapé da página.
 */
function displayCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // Verifica se o elemento de data existe antes de tentar usá-lo
    if (dateElement) {
        dateElement.textContent = `Hoje é ${today.toLocaleDateString('pt-BR', options)}`;
    }
}

/**
 * Configura os "ouvintes" de eventos da página.
 * Usa a técnica de "Event Delegation" para os botões de adicionar ao carrinho.
 */
function setupEventListeners() {
    productGrid.addEventListener('click', (event) => {
        // Verifica se o elemento clicado é um botão dentro de um card de produto
        if (event.target.matches('.product-card .btn')) {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            alert(`"${productName}" foi adicionado ao carrinho com sucesso!`);
        }
    });
}

/**
 * =========================================================================
 * FUNÇÃO PRINCIPAL (INICIALIZAÇÃO)
 * =========================================================================
 */

/**
 * Orquestra a inicialização da aplicação.
 */
(async function main() {
    // Configura os eventos que não dependem da API
    displayCurrentDate();
    setupEventListeners();

    // Tenta buscar e renderizar os produtos
    try {
        const products = await fetchProducts();
        renderProducts(products);
    } catch (error) {
        displayErrorMessage();
    }
})();


/*
 * =========================================================================
 * REFLEXÃO SOBRE CLEAN CODE
 * =========================================================================
 * * Durante o desenvolvimento deste script, busquei aplicar vários princípios do Clean Code
 * para garantir que o código fosse legível, manutenível e claro.
 * * 1. Nomes Significativos:
 * - Variáveis como `productGrid`, `FAKE_STORE_API_URL` e `formattedPrice`
 * descrevem claramente seu propósito.
 * - Funções como `fetchProducts`, `createProductCard` e `renderProducts`
 * são verbos que indicam exatamente o que elas fazem.
 * * 2. Funções Pequenas e com Responsabilidade Única (Single Responsibility Principle):
 * - `fetchProducts()`: Sua única responsabilidade é buscar dados da API.
 * - `createProductCard()`: Sua única responsabilidade é criar o HTML de um card.
 * - `renderProducts()`: Sua única responsabilidade é exibir os cards na tela.
 * - Essa separação torna o código mais fácil de entender, testar e depurar.
 * * 3. Evitar "Números Mágicos" e Strings Soltas:
 * - A URL da API foi movida para uma constante `FAKE_STORE_API_URL` no topo do
 * arquivo. Se a API mudar, só precisamos alterar em um lugar.
 * * 4. Tratamento de Erros:
 * - O uso de `try...catch` em `fetchProducts` e na função `main` garante que
 * falhas na comunicação com a API não quebrem a aplicação e que o usuário
 * receba uma mensagem de erro amigável.
 * * O QUE AINDA PODE MELHORAR?
 * * - Modularização: Em um projeto maior, as funções poderiam ser separadas em
 * módulos (ex: `api.js` para a comunicação com a API, `ui.js` para a
 * manipulação do DOM).
 * - Estado da Aplicação: Poderíamos criar um objeto de estado para gerenciar
 * de forma mais explícita os diferentes estados da UI (loading, success, error).
 * - Abstração da Criação de Componentes: A função `createProductCard` poderia
 * ser parte de uma "fábrica" de componentes mais genérica, especialmente se
 * tivéssemos outros tipos de elementos dinâmicos na página.
 * * =========================================================================
 */

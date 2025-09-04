# Loja do Chris Online 🛒

![Status](https://img.shields.io/badge/status-dinâmico%20com%20api-brightgreen)
![Tecnologias](https://img.shields.io/badge/tecnologias-HTML%20%7C%20CSS%20%7C%20JS%20(API)-blue)

> Protótipo de front-end para um site de e-commerce moderno e dinâmico. Este projeto consome dados em tempo real da `Fake Store API` para exibir os produtos, aplicando HTML semântico, CSS responsivo e JavaScript assíncrono com foco em Clean Code.

---

## 📸 Demonstração

[Demonstração em vídeo do Projeto](https://youtu.be/HltQ2RSjPek)

---

## ✨ Funcionalidades Principais

* **Carregamento Dinâmico de Produtos:** Os produtos são buscados em tempo real de uma API externa (`Fake Store API`), garantindo que o catálogo seja sempre exibido de forma dinâmica.
* **Design Responsivo:** A interface se adapta perfeitamente a diferentes tamanhos de tela, de desktops a dispositivos móveis, utilizando CSS Grid Layout e Flexbox.
* **Estrutura Semântica:** O HTML foi construído com foco em semântica e acessibilidade, utilizando tags como `<header>`, `<main>`, `<section>` e `<footer>`.
* **Interatividade Assíncrona:**
    * **Feedback ao Usuário:** Alertas de confirmação são exibidos ao adicionar um produto ao carrinho, utilizando a técnica de *Delegação de Eventos* para maior eficiência.
    * **Tratamento de Erros:** Exibe uma mensagem amigável caso a API de produtos falhe ou não possa ser carregada.
* **Princípios de Clean Code:** O JavaScript foi estruturado com funções pequenas e de responsabilidade única (`fetchProducts`, `createProductCard`, `renderProducts`), nomes claros e tratamento de erros robusto.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias fundamentais da web:

* **HTML5:**
    * Estruturação semântica para melhor SEO e acessibilidade.

* **CSS3:**
    * **Variáveis CSS:** Para um sistema de design escalável e de fácil manutenção.
    * **Grid Layout:** Para a criação da grade de produtos responsiva e automática.
    * **Flexbox:** Para alinhamentos complexos e organização dos componentes.

* **JavaScript (ES6+):**
    * **`Fetch API` e `Async/Await`:** Para realizar requisições assíncronas à API de forma moderna e legível.
    * **Manipulação do DOM:** Para criar e renderizar dinamicamente os cards de produtos na página.
    * **Delegação de Eventos:** Para otimizar a performance e garantir que os eventos de clique funcionem em elementos adicionados dinamicamente.
    * **API Externa:** Consumo da **[Fake Store API](https://fakestoreapi.com/)** como fonte de dados para os produtos.

---

## 🚀 Como Executar o Projeto

Este é um projeto de front-end estático. Para executá-lo, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/chrissperb/e-commerce
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd e-commerce
    ```
3.  **Abra o arquivo `index.html`:**
    * Simplesmente abra o arquivo `index.html` no seu navegador de preferência.
    * **(Recomendado)** Se você utiliza o Visual Studio Code, instale a extensão **Live Server** e clique em "Go Live" para iniciar um servidor local com recarregamento automático.

---
## 🔮 Melhorias Futuras

Este protótipo é a base para muitas funcionalidades avançadas, como:

* [x] Conectar o front-end a uma API para carregar produtos.
* [ ] Implementar um carrinho de compras funcional com estado gerenciado em JS.
* [ ] Adicionar filtros de produtos (por categoria, preço, etc.).
* [ ] Criar uma página de detalhes do produto que é carregada ao clicar em um card.
* [ ] Criar um menu "hambúrguer" para uma melhor experiência mobile.
* [ ] Desenvolver um sistema de login e autenticação de usuários.

---

## 👨‍💻 Autor

Christian Sperb

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chrissperb/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/chrissperb)

---

## 📄 Licença

Este projeto está sob a licença MIT.
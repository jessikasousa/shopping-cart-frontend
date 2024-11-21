
# Carrinho de Compras - Frontend

Este é o frontend da aplicação de carrinho de compras, desenvolvido em **ReactJS**. Ele consome as APIs fornecidas pelo backend (desenvolvido em Go) para gerenciar os produtos e o carrinho de compras.

API: `https://github.com/jessikasousa/shopping-cart-backend`

---

## Funcionalidades

- **Exibir produtos disponíveis** (Aqui filtrado por "notebook" - `/products?q=notebook`).
- **Remover produtos do carrinho**.
- **Atualizar a quantidade de produtos no carrinho**.
- **Exibir o número total de itens no carrinho**.
- **Exibir o preço total do carrinho**.
- **Calcular o subtotal por produto**.

---

## Tecnologias Utilizadas

- **ReactJS**
- **React Router Dom**
- **React Context API**
- **TypeScript**
- **CSS Modules**

---

## Pré-requisitos

- **Node.js**: Versão 16 ou superior.
- **NPM** ou **Yarn** para gerenciamento de pacotes.

---

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/jessikasousa/shopping-cart-frontend.git
   cd shopping-cart-frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```env
   REACT_APP_API_URL=http://localhost:8080
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

5. Acesse a aplicação em `http://localhost:3000`.

---

## Variáveis de Ambiente

As seguintes variáveis de ambiente devem ser configuradas no arquivo `.env`:

```env
REACT_APP_API_URL=http://localhost:8080
```

---

## Exemplos de Uso

- **Exibir Produtos**: Acesse a página inicial (`http://localhost:3000`) para visualizar a listagem de produtos.
  ![image](https://github.com/user-attachments/assets/a6c25b6d-b193-47e0-a9a6-49acae2f29ec)

- **Gerenciar Carrinho**: Clique no ícone de carrinho no canto superior direito para acessar o carrinho.
  ![image](https://github.com/user-attachments/assets/b9833954-9935-45dd-b4f2-f1b76f649237)

---
## Demonstração

Vídeo demonstração: https://www.loom.com/share/afc4664691e34b5e93def640ce8ee495

---

## Melhorias Futuras

- Implementar autenticação de usuários.
- Criar uma interface para filtros de produtos.
- Adicionar testes unitários e de integração.


# 📚 Sebão Online

Aplicação web desenvolvida em **Next.js** para o **Sebão Online**, um marketplace voltado para compra, venda e troca de livros usados.

O sistema oferece uma interface moderna, intuitiva e responsiva, permitindo que usuários naveguem pelo catálogo de livros, realizem pesquisas, efetuem login, cadastrem novos livros e gerenciem suas informações. Toda a comunicação com os dados é realizada por meio da API REST do projeto.

🔗 **Frontend:** https://github.com/fbmcarmo/sebao-online

🔗 **API:** https://github.com/fbmcarmo/api-sebao-online

---

## 🚀 Funcionalidades

* 📚 Visualização do catálogo de livros
* 🔍 Pesquisa de livros
* 👤 Cadastro de usuários
* 🔐 Login e autenticação
* 📖 Visualização dos detalhes dos livros
* ➕ Cadastro de novos livros
* ✏️ Edição de livros
* ❌ Exclusão de livros
* 📱 Interface responsiva
* 🔄 Integração com API REST

---

## 🛠️ Tecnologias Utilizadas

* Next.js
* React.js
* JavaScript (ES6+)
* Axios
* CSS Modules
* JWT
* Vercel

---

## 📂 Estrutura do Projeto

```text
.
├── components/
├── pages/
│   ├── api/
│   ├── livros/
│   ├── login/
│   ├── cadastro/
│   └── index.js
│
├── public/
├── styles/
├── utils/
├── package.json
└── next.config.js
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, tenha instalado:

* Node.js (18 ou superior)
* npm ou yarn

Também é necessário que a API esteja em execução.

---

## 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/fbmcarmo/sebao-online.git
```

Entre na pasta do projeto:

```bash
cd sebao-online
```

Instale as dependências:

```bash
npm install
```

---

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto.

Exemplo:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## ▶️ Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev

# ou

yarn dev

# ou

pnpm dev

# ou

bun dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

Sempre que um arquivo for alterado, o Next.js atualizará automaticamente a aplicação durante o desenvolvimento.

---

## 🔄 Comunicação com a API

O frontend consome os dados da API REST do Sebão Online utilizando requisições HTTP.

Fluxo da aplicação:

```text
Usuário

    │
    ▼

Frontend (Next.js)

    │
    ▼

API REST (Node.js + Express)

    │
    ▼

PostgreSQL
```

---

## 📄 Páginas da Aplicação

* Home
* Login
* Cadastro de Usuário
* Listagem de Livros
* Cadastro de Livros
* Edição de Livros
* Detalhes do Livro

---

## 🎨 Interface

A aplicação foi desenvolvida priorizando:

* Layout responsivo
* Navegação intuitiva
* Componentização
* Boa experiência do usuário
* Consumo de API desacoplado

---

## 🚀 Deploy

A aplicação pode ser publicada facilmente utilizando a **Vercel**, plataforma oficial para projetos Next.js.

Para realizar o deploy:

```bash
npm run build
```

Documentação oficial:

https://nextjs.org/docs/pages/building-your-application/deploying

---

## 📖 Saiba Mais

Para aprender mais sobre o Next.js:

* https://nextjs.org/docs
* https://nextjs.org/learn-pages-router
* https://github.com/vercel/next.js

---

## 👨‍💻 Desenvolvedor

**Bruno Moreira**

Full Stack Software Engineer

* GitHub: https://github.com/fbmcarmo
* LinkedIn: https://www.linkedin.com/in/fbmcarmo

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de demonstração de conhecimentos em desenvolvimento Full Stack.

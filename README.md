# The Last of Us - Catálogo Interativo (Frontend)

![Next.js](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Axios](https://img.shields.io/badge/Axios-20232A?style=for-the-badge&logo=axios&logoColor=purple)

Este é o repositório do frontend para o projeto "The Last of Us", uma interface construída com Next.js para visualizar, criar e gerenciar personagens do universo do jogo. A aplicação consome dados de uma [API backend própria](https://github.com/lucca19nn/thelastofus-back).

---

## ✨ Funcionalidades

-   **Visualização de Personagens**: Listagem de diferentes categorias de personagens (Principais, Secundários, Infectados) em cards interativos.
-   **Criação de Personagens**: Formulário completo para adicionar novos personagens à base de dados.
-   **Navegação Otimizada**: Transição suave entre as páginas utilizando o sistema de rotas do Next.js.
-   **Página "Sobre Mim"**: Uma página de apresentação pessoal estática.

---

## 🛠️ Tecnologias Utilizadas

-   **[Next.js](https://nextjs.org/)**: Framework React para renderização no lado do servidor, geração de sites estáticos e uma excelente experiência de desenvolvimento.
-   **[React](https://reactjs.org/)**: Biblioteca para construir interfaces de usuário.
-   **[Axios](https://axios-http.com/)**: Cliente HTTP para realizar requisições à API do backend.
-   **CSS Modules / Inline Styles**: Para estilização dos componentes de forma encapsulada.

---

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para ter o projeto rodando na sua máquina.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/) (já vem instalado com o Node.js)
-   O **servidor do [backend (THELASTOFUS-BACK)](https://github.com/lucca19nn/thelastofus-back) deve estar rodando** para que a aplicação funcione.

### Passos de Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/NOME-DO-SEU-REPO-FRONTEND.git](https://github.com/SEU-USUARIO/NOME-DO-SEU-REPO-FRONTEND.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd NOME-DO-SEU-REPO-FRONTEND
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as Variáveis de Ambiente:**
    -   Crie um arquivo chamado `.env.local` na raiz do projeto.
    -   Adicione a seguinte linha, apontando para a URL onde seu backend está rodando:
        ```.env.local
        NEXT_PUBLIC_API_URL=http://localhost:3000
        ```
    -   *Lembre-se: a porta `3000` deve ser a mesma em que o seu servidor backend está escutando.*

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

6.  **Abra o navegador:**
    Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação em funcionamento.
---

Feito com ❤️ por [André Lucca].

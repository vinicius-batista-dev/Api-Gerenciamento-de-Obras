## API PARA ADMINISTRAR SUA OBRA

# CAMADAS DE PROJETO

    -   CONTROLLER
    -   DATABASE
    -   MIDDLEWARE
    -   MODELS
    -   ROUTES

## clone o projeto

    git clone https://github.com/vinicius-batista-dev/Api-Gerenciamento-de-Obras.git

## instalar os pacotes

    npm install

## logo em seguida starte

    npm start

## Identificação e missão do sistema

     O sistema será desenvolvido para  as empresas de construção civil  para gerência de obras, o qual facilitará os processos e controlará o tempo no decorrer da construção.

## Domínio do problema e contexto de sua aplicação

     Tendo em vista a dificuldade de acesso aos serviços de gerenciamento das construções de algumas empresas. O sistema visa facilitar ao interessado os serviços mais básicos de administração, tais como: Gestão de obras, gestão de funcionários relacionados às obras, gestão de peças relacionadas às obras.

## Descrição dos interessados do sistema

     O interessado do uso no sistema seria as empresas de construção civil que queiram ter uma gestão de qualidade, na hora de conferir as construções, na hora de conferir se o funcionário está relacionado aquela construção, na hora de conferir se aquele produto está relacionado àquela.

## Objetivo ou características desejada

     O interessado irá gerenciar as obras
     O interessado irá gerenciar os funcionários relacionados com a obra para
     O interessado irá gerenciar os produtos que vão ser usados naquela obra relacionado com o funcionário

<h2 id="features">✔️ Features</h2>

👤 Login/Cadastro METHOD POST

- [x] O interessado deve ser capaz de criar uma conta, cadastrando seus dados como username, email e password
- [x] Caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara
- [x] Após finalizar o cadastro, o usuário deve ser redirecionado para a tela de cadastro de funcionarios, produtos e contrucoes

🔎 Insercao de dados Method POST

- [x] O interessado deve ser capaz de cadastrar os produtos
- [x] O interessado deve ser capaz de cadastrar os funcionarios
- [x] O interessado deve ser capaz de cadastrar as construcoes

🔎 Busca e seleção de Method GET

- [x] O interessado deve ser capaz de visualizar uma lista de funcionarios
- [x] O interessado deve ser capaz de visualizar uma lista de produtos
- [x] O interessado deve ser capaz de visualizar uma lista de construcoes

Deve deletar os cadastros realizados method DELETE

- [x] O interessado deve ser capaz de deletar os funcionario
- [x] O interessado deve ser capaz de deletar os produtos
- [x] O interessado deve ser capaz de deletar as construcoes

Deve atualizar os cadastros realizados method PUT

- [x] O interessado deve ser capaz de atualizar os funcionarios
- [x] O interessado deve ser capaz de atualizar os produtos
- [x] O interessado deve ser capaz de atualizar as construcoes

<h2 id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

<h2> id="endpoints">🚀 Endpoints</h2>

<h3>🔑 Login</h3>

- **POST** `/login`

<h3>🔑 Cadastro</h3>

- **POST** `/cadastro`

<h3>🔑 Cadastro de funcionarios</h3>

- **POST** `/cadastro/funcionarios`

<h3>🔑 Cadastro de produtos</h3>

- **POST** `/cadastro/produtos`

<h3>🔑 Cadastro de construcoes</h3>

- **POST** `/cadastro/construcoes`

<h3>🔑 Listar funcionarios</h3>

- **GET** `/listar/funcionarios`

<h3>🔑 Listar produtos</h3>

- **GET** `/listar/produtos`

<h3>🔑 Listar construcoes</h3>

- **GET** `/listar/construcoes`

<h3>🔑 Deletar funcionarios</h3>

- **DELETE** `/deletar/funcionarios`

<h3>🔑 Deletar produtos</h3>

- **DELETE** `/deletar/produtos`

<h3>🔑 Deletar construcoes</h3>

- **DELETE** `/deletar/construcoes`

<h3>🔑 Atualizar funcionarios</h3>

- **PUT** `/atualizar/funcionarios`

<h3>🔑 Atualizar produtos</h3>

- **PUT** `/atualizar/produtos`

<h3>🔑 Atualizar construcoes</h3>

- **PUT** `/atualizar/construcoes`

<h2 id="autor">🦸 Autor</h2>

Feito com ❤️ por Vinicius Batista 👋🏽 [Entre em contato!](https://www.linkedin.com/in/vinicius-batista-9b1b3b1b3/)

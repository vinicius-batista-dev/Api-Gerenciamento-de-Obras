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

     <p>O sistema será desenvolvido para  as empresas de construção civil  para gerência de obras, o qual facilitará os processos e controlará o tempo no decorrer da construção.</p>

## Domínio do problema e contexto de sua aplicação

     <p>Tendo em vista a dificuldade de acesso aos serviços de gerenciamento das construções de algumas empresas. O sistema visa facilitar ao interessado os serviços mais básicos de administração, tais como: Gestão de obras, gestão de funcionários relacionados às obras, gestão de peças relacionadas às obras. </p>

## Descrição dos interessados do sistema

    <p> O interessado do uso no sistema seria as empresas de construção civil que queiram ter uma gestão de qualidade, na hora de conferir as construções, na hora de conferir se o funcionário está relacionado aquela construção, na hora de conferir se aquele produto está relacionado àquela. </p>

## Objetivo ou características desejada

    <p> O interessado irá gerenciar as obras </p>
    <p> O interessado irá gerenciar os funcionários relacionados com a obra para </p>
    <p> O interessado irá gerenciar os produtos que vão ser usados naquela obra relacionado com o funcionário </p>

<h2 id="features">✔️ Features</h2>

👤 Login/Cadastro METHOD POST

- [x] O interessado deve ser capaz de criar uma conta, cadastrando seus dados como username, email e password
- [x] Caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário deve receber uma mensagem de erro clara
- [x] Após finalizar o cadastro, o usuário deve ser redirecionado para a tela de cadastro de produtos, formularios e contrucoes

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

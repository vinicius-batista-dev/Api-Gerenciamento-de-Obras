## API PARA ADMINISTRAR A SUA OBRA

### Objetivo

O objetivo deste projeto é criar uma API para gerenciar uma obra, onde o usuário poderá cadastrar os funcionários, os materiais que serão utilizados na obra.

### Tecnologias

- NodeJS -> https://nodejs.org/en/
- Express -> https://expressjs.com/pt-br/
- MySQL -> https://www.mysql.com/
- Sequelize -> https://sequelize.org/
- JWT -> https://jwt.io/
- Bcrypt -> https://www.npmjs.com/package/bcrypt

### Instalação

- Clone o repositório
- Instale as dependências com o comando `npm install`
- Crie um banco de dados no MySQL
- Start o servidor com o comando `npm start`

## Documentação

### Rotas

- POST /api/funcionarios - Cadastrar funcionários
- GET /api/funcionarios - Listar funcionários
- GET /api/funcionarios/:id - Listar funcionário
- PUT /api/funcionarios/:id - Atualizar funcionário
- DELETE /api/funcionarios/:id - Deletar funcionário

- POST /api/produtos - Cadastrar produtos
- GET /api/produtos - Listar produtos
- GET /api/produtos/:id - Listar produto
- PUT /api/produtos/:id - Atualizar produto
- DELETE /api/produtos/:id - Deletar produto

- POST /api/construcao - Cadastrar a obra
- GET /api/construcao - Listar a obra
- GET /api/construcao/:id - Listar a obra
- PUT /api/construcao/:id - Atualizar a obra
- DELETE /api/construcao/:id - Deletar a obra

## Camada de Projeto

- controller - Responsável por receber as requisições e enviar as respostas
- model - Responsável por fazer a comunicação com o banco de dados
- routes - Responsável por fazer a comunicação com o controller
- database - Responsável por fazer a comunicação com o banco de dados
- config - Responsável por fazer a comunicação com o banco de dados

### Funcionalidades

- Cadastrar funcionários
- Cadastrar produtos
- Cadastrar a obra

## Para contribuir

- Faça um fork do projeto
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Faça commit das suas alterações: `git commit -m 'feat: My new feature'`
- Faça push para a sua branch: `git push origin my-feature`

### Autor

- [Vinicius Batista]

### Licença

- [MIT](https://choosealicense.com/licenses/mit/)

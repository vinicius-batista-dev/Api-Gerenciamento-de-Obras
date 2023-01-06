## API TO MANAGE PROUCTS AND EMPLOYESS

### Purpose of this project

The objective of this project is to create an API to manage employees and products

### Technologies

- NodeJS -> https://nodejs.org/en/
- Express -> https://expressjs.com/pt-br/
- MySQL -> https://www.mysql.com/
- Sequelize -> https://sequelize.org/
- JWT -> https://jwt.io/
- Bcrypt -> https://www.npmjs.com/package/bcrypt

### Project configuration

- Clone this repository
- Install the packages `npm install`
- Create a database in MySQL
- Start the server `npm start`

### Example Routes

- POST /api/employess - Cadastrar funcionários
- GET /api/employess - Listar funcionários
- GET /api/employess/:id - Listar funcionário
- PUT /api/employess/:id - Atualizar funcionário
- DELETE /api/employess/:id - Deletar funcionário

- POST /api/products - Cadastrar produtos
- GET /api/products - Listar produtos
- GET /api/products/:id - Listar produto
- PUT /api/products/:id - Atualizar produto
- DELETE /api/products/:id - Deletar produto

## Project Layer

- controller - Responsible for receiving requests and sending responses
- model - Responsible for communicating with the database
- routes - Responsible for communicating with the controller
- database - Responsible for communicating with the database
- config - Responsável por fazer a comunicação com o banco de dados

## To contribute to the project

- Fork the project
- Create a branch with your feature: `git checkout -b my-feature`
- Commit your changes: `git commit -m 'feat: My new feature'`
- Push to your branch: `git push origin my-feature`

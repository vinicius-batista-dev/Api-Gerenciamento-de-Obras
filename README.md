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

- POST /api/employess - register employees
- GET /api/employess - list employees
- GET /api/employess/:id - List employee by id
- PUT /api/employess/:id - Update employee by id
- DELETE /api/employess/:id - delete employee by id

- POST /api/products - register products
- GET /api/products - list products
- GET /api/products/:id - list products by id
- PUT /api/products/:id - Update product by id
- DELETE /api/products/:id - delete product by id

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

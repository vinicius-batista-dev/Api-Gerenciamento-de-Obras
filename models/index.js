const config = require("../database/config-db.js");
const Sequelize = require("sequelize");
// const user = require("./user.js");

const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,

  {
    /*   host: config.host, */
    dialect: config.dialect,
    /*   pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    }, */
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);

db.construcao = require("./construcao.js")(sequelize, Sequelize);
db.funcionario = require("./funcionario.js")(sequelize, Sequelize);
db.produto = require("./produtos.js")(sequelize, Sequelize);

// //Deve listar todos os usuarios
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Conectado com sucesso");
//   })
//   .catch((err) => {
//     console.error("Nao foi possivel conectar", err);
//   });

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("Tabelas sincronizadas");
//   })
//   .catch((err) => {
//     console.error("Nao foi possivel sincronizar", err);
//   });

// //SELECT * FROM users
// sequelize
//   .query("SELECT * FROM users", { type: sequelize.QueryTypes.SELECT })
//   .then((users) => {
//     console.log(users);
//   });

module.exports = db;

const configuration = require("../database/config-db.js");
const { Sequelize } = require("sequelize");
const { QueryTypes } = require("sequelize");
const user = require("./user.js");

const sequelize = new Sequelize(
  configuration.database,
  configuration.user,
  configuration.password,
  {
    host: configuration.host,
    dialect: configuration.dialect,
    pool: {
      max: configuration.pool.max,
      min: configuration.pool.min,
      acquire: configuration.pool.acquire,
      idle: configuration.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);

db.construcao = require("./construcao.js")(sequelize, Sequelize);
db.funcionario = require("./funcionario.js")(sequelize, Sequelize);
db.produto = require("./produtos.js")(sequelize, Sequelize);

sequelize
  .query("SELECT * FROM users", { type: QueryTypes.SELECT })
  .then((users) => {
    console.log(users);
  });

//todos os usarios deve receber um role como USER
sequelize
  .query("UPDATE users SET role = 'USER' WHERE role IS NULL", {
    type: QueryTypes.UPDATE,
  })
  .then((users) => {
    console.log(users);
  });

sequelize
  .query(
    "ALTER TABLE construcao ADD FOREIGN KEY (user_id) REFERENCES users(id);",
    {
      type: QueryTypes.UPDATE,
    }
  )
  .then((users) => {
    console.log(users);
  });

module.exports = db;

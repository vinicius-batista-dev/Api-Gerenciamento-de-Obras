const configuration = require("../database/config-db.js");
const { Sequelize, DataTypes } = require("sequelize");

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

db.sequelize = sequelize;

db.user = require("./user.js")(sequelize);

db.construcao = require("./construcao.js")(sequelize);
db.funcionario = require("./funcionario.js")(sequelize);
db.produto = require("./produtos.js")(sequelize);


module.exports = db;

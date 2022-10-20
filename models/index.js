const configuration = require("../database/config-db.js");
const Sequelize = require("sequelize");

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

db.construcao.belongsTo(db.funcionario, {
  foreignKey: "funcionarioId",
  as: "funcionario",
});


//Funcionario tem muitas construcoes
db.funcionario.hasMany(db.construcao, { as: "construcao" });



module.exports = db;

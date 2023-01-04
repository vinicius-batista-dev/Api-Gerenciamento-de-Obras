const configuration = require("../database/config-db.js");
const { Sequelize, DataTypes } = require("sequelize");
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

db.user.hasMany(db.construcao, { as: "construcao" });

db.construcao.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.construcao.hasMany(db.funcionario, { as: "funcionario" });

db.funcionario.belongsTo(db.construcao, {
  foreignKey: "construcaoId",
  as: "construcao",
});

db.construcao.hasMany(db.produto, { as: "produto" });

db.produto.belongsTo(db.construcao, {
  foreignKey: "construcaoId",
  as: "construcao",
});

module.exports = db;

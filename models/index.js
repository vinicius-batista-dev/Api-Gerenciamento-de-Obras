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

sequelize
  .query("SELECT * FROM materials", { type: QueryTypes.SELECT })
  .then((construcao) => {
    console.log(construcao);
  });

sequelize
  .query("SELECT * FROM funcionarios", { type: QueryTypes.SELECT })
  .then((funcionario) => {
    console.log(funcionario);
  });

sequelize
  .query("SELECT * FROM construcaos", { type: QueryTypes.SELECT })
  .then((construcao) => {
    console.log(construcao);
  });

sequelize
  .query("UPDATE users SET role = 'USER'", { type: QueryTypes.UPDATE })
  .then((users) => {
    console.log(users);
  });

//Deve associar as tabelas aqui para que o sequelize entenda a relação entre elas e crie as FKs
db.user.hasMany(db.construcao, { as: "construcaos" });
db.construcao.belongsTo(db.user, {
  foreignKey: "userId",
  as: "users",
});

db.user.hasMany(db.funcionario, { as: "funcionarios" });
db.funcionario.belongsTo(db.user, {
  foreignKey: "userId",
  as: "users",
});

db.user.hasMany(db.produto, { as: "materials" });
db.produto.belongsTo(db.user, {
  foreignKey: "userId",
  as: "users",
});

module.exports = db;

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

db.user.hasMany(db.construcao, { as: "construcaos" });
db.construcao.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.user.hasMany(db.funcionario, { as: "funcionarios" });
db.funcionario.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.user.hasMany(db.produto, { as: "materials" });
db.produto.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

//Deve atualizar cada usuario para ter um id de construcao
sequelize
  .query("ALTER TABLE users ADD construcaoId INTEGER", {
    type: QueryTypes.UPDATE,
  })
  .then(() => {
    console.log("Alterado com sucesso");
  })
  .catch((err) => {
    console.log("Erro ao alterar: ", err);
  });

//Deve atualizar cada usuario para ter um id de funcionario
sequelize
  .query("ALTER TABLE users ADD funcionarioId INTEGER", {
    type: QueryTypes.UPDATE,
  })
  .then(() => {
    console.log("Alterado com sucesso");
  })
  .catch((err) => {
    console.log("Erro ao alterar: ", err);
  });

//Deve atualizar cada usuario para ter um id de produto
sequelize
  .query("ALTER TABLE users ADD produtoId INTEGER", {
    type: QueryTypes.UPDATE,
  })
  .then(() => {
    console.log("Alterado com sucesso");
  })
  .catch((err) => {
    console.log("Erro ao alterar: ", err);
  });



module.exports = db;

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

// db.user.hasMany(db.construcao, { as: "construcao" });
// db.construcao.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// })

// db.user.hasMany(db.funcionario, { as: "funcionarios" });
// db.funcionario.belongsTo(db.user, {
//   foreignKey: "userId",
//   as: "user",
// });

//Deve atualizar todos os role dos usuarios para USER
sequelize
  .query("UPDATE users SET role = 'USER'", { type: QueryTypes.UPDATE })
  .then((users) => {
    console.log(users);
  });

module.exports = db;

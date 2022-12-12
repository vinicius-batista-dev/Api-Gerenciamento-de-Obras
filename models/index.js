const configuration = require("../database/config-db.js");
<<<<<<< HEAD
const { Sequelize, DataTypes } = require("sequelize");
=======
const { Sequelize } = require("sequelize");
>>>>>>> parent of 2bb416e (SELECT FROM USERS row query)
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

<<<<<<< HEAD

=======
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

db.user.hasMany(db.user, { as: "users" });

db.ROLES = ["user", "admin", "moderator"];
>>>>>>> parent of 2bb416e (SELECT FROM USERS row query)

module.exports = db;

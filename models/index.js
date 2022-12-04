const configuration = require("../database/config-db.js");
const Sequelize = require("sequelize");
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

//Um usuario pode ter varias construcoes
db.user.hasMany(db.construcao, { as: "construcoes" });
//Uma construcao pertence a um usuario logado
db.construcao.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.user.associate = (models) => {
  db.user.hasMany(models.construcao, {
    as: "construcao",
  });
};

db.construcao.associate = (models) => {
  db.construcao.belongsTo(models.user, {
    foreignKey: "userId",
    as: "user",
  });
};

module.exports = db;

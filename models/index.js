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
            idle: configuration.pool.idle
        }
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.construcao = require("./construcao.js")(sequelize, Sequelize);
db.funcionario = require("./funcionario.js")(sequelize, Sequelize);
db.produto = require("./produtos.js")(sequelize, Sequelize);


db.funcionario.belongsTo(db.construcao, {
    foreignKey: "construcaoId",
    as: "construcao",
});

db.produto.hasMany(db.funcionario, {
    foreignKey: "produtoId",
    as: "funcionarios",
});

db.construcao.hasMany(db.funcionario, {
    foreignKey: "construcaoId",
    as: "funcionarios",
});


db.funcionario.belongsTo(db.produto, {
    foreignKey: "produtoId",
    as: "produto",
});

db.produto.hasMany(db.construcao, {
    foreignKey: "produtoId",
    as: "construcoes",
});


module.exports = db;

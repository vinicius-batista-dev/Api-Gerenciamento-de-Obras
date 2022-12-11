module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: Sequelize.STRING,
    },

    email: {
      type: Sequelize.STRING,
    },

    password: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    token: {
      type: Sequelize.STRING,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Construcao, {
      foreignKey: "id",
      as: "construcao",
    });
    User.hasMany(models.Funcionario, {
      foreignKey: "id",
      as: "funcionario",
    });
    User.hasMany(models.Produto, {
      foreignKey: "id",
      as: "produto",
    });
  };

  return User;
};

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
    User.hasMany(models.construcao, {
      foreignKey: "user_id",
      as: "construcao",
    });
  };

  User.associate = (models) => {
    User.hasMany(models.funcionario, {
      foreignKey: "user_id",
      as: "funcionario",
    });
  };

  User.associate = (models) => {
    User.hasMany(models.produto, {
      foreignKey: "user_id",
      as: "produto",
    });
  };

  return User;
};

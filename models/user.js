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

  //Deve associar o usuario com o token
  User.associate = (models) => {
<<<<<<< HEAD
    User.hasMany(models.construcao, {
      foreignKey: "user_id",
      as: "construcao",
    });
    console.log("User.associate");
  };

  User.associate = (models) => {
    User.hasMany(models.funcionario, {
      foreignKey: "user_id",
      as: "funcionario",
    });
    console.log("User.associate");
  };

  User.associate = (models) => {
    User.hasMany(models.produto, {
      foreignKey: "user_id",
      as: "produto",
=======
    User.hasOne(models.token, {
      foreignKey: "user_id",
>>>>>>> parent of 2bb416e (SELECT FROM USERS row query)
    });
    console.log("User.associate");
  };

<<<<<<< HEAD
  //Deve sincronizar o banco de dados
  User.sync();

  return User;
=======
  
>>>>>>> parent of 2bb416e (SELECT FROM USERS row query)
};

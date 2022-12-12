module.exports = (sequelize, Sequelize) => {
  const Funcionario = sequelize.define("funcionario", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nome: {
      type: Sequelize.STRING,
    },

    email: {
      type: Sequelize.STRING,
    },

    cargo: {
      type: Sequelize.STRING,
    },

    salario: {
      type: Sequelize.DOUBLE,
    },

    cpf: {
      type: Sequelize.STRING,
    },

    dataNascimento: {
      type: Sequelize.DATE,
    },

    dataAdmissao: {
      type: Sequelize.DATE,
    },

    dataDemissao: {
      type: Sequelize.DATE,
    },

    status: {
      type: Sequelize.STRING,
    },
  });
<<<<<<< HEAD

  
=======
  return Funcionario;
>>>>>>> parent of 2bb416e (SELECT FROM USERS row query)
};

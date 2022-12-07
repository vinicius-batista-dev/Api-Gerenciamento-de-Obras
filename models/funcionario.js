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

    data_nascimento: {
      type: Sequelize.DATE,
    },

    data_admissao: {
      type: Sequelize.DATE,
    },

    data_demissao: {
      type: Sequelize.DATE,
    },

    status: {
      type: Sequelize.STRING,
    },
  });
  return Funcionario;
};

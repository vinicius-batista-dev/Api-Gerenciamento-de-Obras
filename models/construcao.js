module.exports = (sequelize, Sequelize) => {
  const Construcao = sequelize.define("construcao", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    descricao: {
      type: Sequelize.STRING,
    },

    dataInicio: {
      type: Sequelize.DATE,
    },

    dataFim: {
      type: Sequelize.DATE,
    },

    horaInicio: {
      type: Sequelize.TIME,
    },

    horaFim: {
      type: Sequelize.TIME,
    },

    nomeDaObra: {
      type: Sequelize.STRING,
    },

    categoriaObra: {
      type: Sequelize.STRING,
    },

    cep: {
      type: Sequelize.STRING,
    },

    bairro: {
      type: Sequelize.STRING,
    },

    estado: {
      type: Sequelize.STRING,
    },

    endereco: {
      type: Sequelize.STRING,
    },

    email: {
      type: Sequelize.STRING,
    },

    proprietario: {
      type: Sequelize.STRING,
    },

    telefone: {
      type: Sequelize.STRING,
    },

    complemento: {
      type: Sequelize.STRING,
    },

    cidade: {
      type: Sequelize.STRING,
    },

    valor: {
      type: Sequelize.STRING,
    },

    status: {
      type: Sequelize.STRING,
    },
  });
<<<<<<< HEAD
=======

  return Construcao;
>>>>>>> parent of 2bb416e (SELECT FROM USERS row query)
};

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

    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Construcao;
};

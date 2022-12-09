module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define("materials", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nome: {
      type: Sequelize.STRING,
    },

    descricao: {
      type: Sequelize.STRING,
    },

    preco: {
      type: Sequelize.DOUBLE,
    },

    quantidade: {
      type: Sequelize.INTEGER,
    },

    categoria: {
      type: Sequelize.STRING,
    },

    status: {
      type: Sequelize.STRING,
    },

    fornecedor: {
      type: Sequelize.STRING,
    },

    data_entrada: {
      type: Sequelize.DATE,
    },

    data_saida: {
      type: Sequelize.DATE,
    },
  });

  return Produto;
};

module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define("produto", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nomeDoProduto: {
      type: Sequelize.STRING,
    },
    descricaoDoProduto: {
      type: Sequelize.STRING,
    },
    vaiUsarParaQue: {
      type: Sequelize.STRING,
    },
    qtdProduto: {
      type: Sequelize.STRING,
    },
  });
  return Produto;
};

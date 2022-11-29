module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define("produto", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nomeDoMaterial: {
      type: Sequelize.STRING,
    },

    quantidadeDoMaterial: {
      type: Sequelize.STRING,
    },

    valorDoMaterial: {
      type: Sequelize.STRING,
    },

    categoriaDoMaterial: {
      type: Sequelize.STRING,
    },

    fornecedorDoMaterial: {
      type: Sequelize.STRING,
    },

    dataDeEntradaDoMaterial: {
      type: Sequelize.DATE,
    },

    dataDeSaidaDoMaterial: {
      type: Sequelize.DATE,
    },

    dataDeValidadeDoMaterial: {
      type: Sequelize.DATE,
    },

    dataDeFabricacaoDoMaterial: {
      type: Sequelize.DATE,
    },

    descricaoDoMaterial: {
      type: Sequelize.STRING,
    },
  });
  return Produto;
};

module.exports = (sequelize, Sequelize) => {
    const Produto = sequelize.define("produto", {
        nome: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        preco: {
            type: Sequelize.STRING
        },
        quantidade: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });
    return Produto;
}
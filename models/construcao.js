module.exports = (sequelize, Sequelize) => {
    const Construcao = sequelize.define("construcao", {
        nome: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        dataInicio: {
            type: Sequelize.DATE
        },
        dataFim: {
            type: Sequelize.DATE
        }
    });

    return Construcao;
}
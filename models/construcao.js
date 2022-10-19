module.exports = (sequelize, Sequelize) => {
    const Construcao = sequelize.define("construcao", {

        descricao: {
            type: Sequelize.STRING
        },

        dataInicio: {
            type: Sequelize.DATE
        },

        dataFim: {
            type: Sequelize.DATE
        },

        horaInicio: {
            type: Sequelize.TIME
        },

        horaFim: {
            type: Sequelize.TIME
        }
    });

    return Construcao;
}
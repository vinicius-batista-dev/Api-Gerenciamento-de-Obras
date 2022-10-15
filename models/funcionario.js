module.exports = (sequelize, Sequelize) => {
    const Funcionario = sequelize.define("funcionario", {
        nome: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        telefone: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING
        },
        cargo: {
            type: Sequelize.STRING
        },
        salario: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });
    return Funcionario;
}
module.exports = (sequelize, Sequelize) => {
    const Funcionario = sequelize.define("funcionario", {

        nomeDoFuncionario: {
            type: Sequelize.STRING
        },

        emailDoFuncionario: {
            type: Sequelize.STRING
        },
        
        telefoneDoFuncionario: {
            type: Sequelize.STRING
        },

        cpfDoFuncionario: {
            type: Sequelize.STRING
        },

        cargoDoFuncionario: {
            type: Sequelize.STRING
        },

        salarioDoFuncionario: {
            type: Sequelize.STRING
        }

    });
    return Funcionario;
}
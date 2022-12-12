const database = require("../models");
const Funcionario = database.funcionario;
const emailValidator = require("email-validator");
const validarCpf = require("../utils/validarCpf");

// Path: controller/funcionario-controller.js
exports.create = (req, res) => {
  try {
    const funcionario = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      email: req.body.email,
      telefone: req.body.telefone,
      cargo: req.body.cargo,
      salario: req.body.salario,
      dataNascimento: req.body.dataNascimento,
      endereco: req.body.endereco,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      cep: req.body.cep,
      complemento: req.body.complemento,
    };

    if (!emailValidator.validate(funcionario.email)) {
      return res.status(400).send({
        message: "Email invalido",
      });
    }

    if (!validarCpf(funcionario.cpf)) {
      return res.status(400).send({
        message: "CPF invalido",
      });
    }

    Funcionario.create(funcionario)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error ao criar funcionario.",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error ao criar funcionario.",
    });
  }
};

exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Funcionario.findAll({ where: condition })
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error ao encontrar todos os funcionarios.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Funcionario.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error ao recuperar o funcionario com o id =" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Funcionario.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Funcionario atualizado com sucesso.",
        });
      } else {
        res.send({
          message: `Error ao atualizar o funcionario, talves o campo esta em branco`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error ao atualizar o funcionario com o id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Funcionario.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Funcionario deletado com sucesso",
        });
      } else {
        res.send({
          message: `Nao fui possivel deletar o funcionario`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error ao deletar o funcionario por id=" + id,
      });
    });
};

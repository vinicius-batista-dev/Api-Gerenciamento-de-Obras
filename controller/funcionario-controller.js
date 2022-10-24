const database = require("../models");
const Funcionario = database.funcionario;
const emailValidator = require("email-validator");
const validarCpf = require("../utils/validarCpf");

exports.create = (req, res) => {
  if (
    !req.body.nomeDoFuncionario ||
    !req.body.cpfDoFuncionario ||
    !req.body.emailDoFuncionario ||
    !req.body.cargoDoFuncionario ||
    !req.body.salarioDoFuncionario ||
    !req.body.telefoneDoFuncionario
  ) {
    res.status(400).send({
      message: "Nao pode estar vazio funcionario",
    });
    return;
  }

  if (!emailValidator.validate(req.body.emailDoFuncionario)) {
    res.status(400).send({
      message: "Email invalido",
    });
    return;
  }

  if (!validarCpf(req.body.cpfDoFuncionario)) {
    res.status(400).send({
      message: "Cpf invalido",
    });
    return;
  }

  const funcionario = {
    nomeDoFuncionario: req.body.nomeDoFuncionario,
    cpfDoFuncionario: req.body.cpfDoFuncionario,
    emailDoFuncionario: req.body.emailDoFuncionario,
    cargoDoFuncionario: req.body.cargoDoFuncionario,
    telefoneDoFuncionario: req.body.telefoneDoFuncionario,
    salarioDoFuncionario: req.body.salarioDoFuncionario,
  };

  Funcionario.create(funcionario)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error ao criar um funcionario.",
      });
    });
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

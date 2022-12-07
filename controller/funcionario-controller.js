const database = require("../models");
const Funcionario = database.funcionario;
const emailValidator = require("email-validator");
const validarCpf = require("../utils/validarCpf");

exports.create = (req, res) => {
  if (
    !req.body.nome ||
    !req.body.cpf ||
    !req.body.email ||
    !req.body.cargo ||
    !req.body.salario ||
    !req.body.telefone ||
    !req.body.data_nascimento ||
    !req.body.data_admissao ||
    !req.body.data_demissao ||
    !req.body.status
  ) {
    res.status(400).send({
      message: "O campo nao pode estar vazio!",
    });
    return;
  }

  if (!emailValidator.validate(req.body.email)) {
    res.status(400).send({
      message: "Email invalido",
    });
    return;
  }

  if (!validarCpf(req.body.cpf)) {
    res.status(400).send({
      message: "Cpf invalido",
    });
    return;
  }

  //funcionario esta relacionado com construcao
  const funcionario = {
    nome: req.body.nome,
    cpf: req.body.cpf,
    email: req.body.email,
    cargo: req.body.cargo,
    salario: req.body.salario,
    telefone: req.body.telefone,
    data_nascimento: req.body.data_nascimento,
    data_admissao: req.body.data_admissao,
    data_demissao: req.body.data_demissao,
    status: req.body.status,
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

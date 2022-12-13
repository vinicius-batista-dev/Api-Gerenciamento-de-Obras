const database = require("../models");
const Funcionario = database.funcionario;
const emailValidator = require("email-validator");
const validarCpf = require("../utils/validarCpf");

// Path: controller/funcionario-controller.js
exports.create = (req, res) => {
  //Deve validar todos os campos antes de criar um novo funcionario
  if (
    !req.body.nome ||
    !req.body.email ||
    !req.body.cargo ||
    !req.body.salario ||
    !req.body.cpf ||
    !req.body.dataNascimento ||
    !req.body.dataAdmissao ||
    !req.body.dataDemissao ||
    !req.body.status
  ) {
    res.status(400).send({
      message: "Todos os campos são obrigatórios!",
    });
    return;
  }

  //Criar um novo funcionario
  const funcionario = {
    nome: req.body.nome,
    email: req.body.email,
    cargo: req.body.cargo,
    salario: req.body.salario,
    cpf: req.body.cpf,
    dataNascimento: req.body.dataNascimento,
    dataAdmissao: req.body.dataAdmissao,
    dataDemissao: req.body.dataDemissao,
    status: req.body.status,
  };

  //Salvar o funcionario no banco de dados
  Funcionario.create(funcionario)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error ao criar o funcionario.",
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

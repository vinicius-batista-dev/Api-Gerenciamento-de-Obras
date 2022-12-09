const database = require("../models");
const Construcao = database.construcao;

// Path: controller/construcao-controller.js
exports.create = (req, res) => {
  //Deve validar todos os campos antes de criar um novo construcao
  if (
    !req.body.descricao ||
    !req.body.dataInicio ||
    !req.body.dataFim ||
    !req.body.horaInicio ||
    !req.body.horaFim ||
    !req.body.nomeDaObra ||
    !req.body.categoriaObra ||
    !req.body.cep ||
    !req.body.bairro ||
    !req.body.estado ||
    !req.body.endereco ||
    !req.body.email ||
    !req.body.proprietario ||
    !req.body.telefone ||
    !req.body.complemento ||
    !req.body.cidade ||
    !req.body.valor ||
    !req.body.status
  ) {
    res.status(400).send({
      message: "Nome nao pode ser vazio!",
    });
    return;
  }

  //O user esta relacionado com construcao
  const construcao = {
    descricao: req.body.descricao,
    dataInicio: req.body.dataInicio,
    dataFim: req.body.dataFim,
    horaInicio: req.body.horaInicio,
    horaFim: req.body.horaFim,
    nomeDaObra: req.body.nomeDaObra,
    categoriaObra: req.body.categoriaObra,
    cep: req.body.cep,
    bairro: req.body.bairro,
    estado: req.body.estado,
    endereco: req.body.endereco,
    email: req.body.email,
    proprietario: req.body.proprietario,
    telefone: req.body.telefone,
    complemento: req.body.complemento,
    cidade: req.body.cidade,
    valor: req.body.valor,
    status: req.body.status,
    userId: req.body.userId,
  };

  // Save Construcao in the database
  Construcao.create(construcao)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Construcao.",
      });
    });
};

exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Construcao.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error ao encontrar todas as construcoes.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Construcao.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error ao encontrar construcao com id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Construcao.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Construcao atualizada com sucesso.",
        });
      } else {
        res.send({
          message: `Nao foi possivel atualizar construcao com id=${id}. Talvez construcao nao tenha sido encontrada ou req.body esta vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error ao atualizar construcao com id=" + id,
        err,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Construcao.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Construcao deletada com sucesso!",
        });
      } else {
        res.send({
          message: `Nao foi possivel deletar construcao com id=${id}. Talvez construcao nao tenha sido encontrada!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Nao foi possivel deletar construcao com id=" + id,
      });
    });
};

const database = require("../models");
const Construcao = database.construcao;

exports.create = (req, res) => {
  if (
    !req.body.descricao ||
    !req.body.dataInicio ||
    !req.body.dataFim ||
    !req.body.horaInicio ||
    !req.body.horaFim
  ) {
    res.status(400).send({
      message: "Nao pode estar vazio construcao",
    });
    return;
  }

  const construcao = {
    descricao: req.body.descricao,
    dataInicio: req.body.dataInicio,
    dataFim: req.body.dataFim,
    horaInicio: req.body.horaInicio,
    horaFim: req.body.horaFim,
  };

  Construcao.create(construcao)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error ao criar uma construcao.",
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

const database = require("../models");
const Construcao = database.construcao;

// Path: controller/construcao-controller.js
exports.create = (req, res) => {
  try {
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
    };

    Construcao.create(construcao)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error ao criar construcao.",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error ao criar construcao.",
    });
  }
};

exports.findAll = (req, res) => {
  try {
    Construcao.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error ao encontrar construcao.",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error ao encontrar construcao.",
    });
  }
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

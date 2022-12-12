const database = require("../models");
const Construcao = database.construcao;

//deve salvar a construcao no banco de dados
exports.create = (req, res) => {
  try {
    // Create a Construcao
    const construcao = {
      nome: req.body.nome,
      endereco: req.body.endereco,
      dataInicio: req.body.dataInicio,
      dataFim: req.body.dataFim,
      horaInicio: req.body.horaInicio,
      horaFim: req.body.horaFim,
      nomeDaObra: req.body.nomeDaObra,
      categoria: req.body.categoria,
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

    // Save Construcao in the database
    Construcao.create(construcao)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Algum erro ocorreu ao criar a construcao.",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Algum erro ocorreu ao criar a construcao.",
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

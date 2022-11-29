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

  //Deve criar a construcao com o relacionamento com o funcionario
  const construcao = {
    bairro: req.body.bairro,
    categoriaObra: req.body.categoriaObra,
    cep: req.body.cep,
    cidade: req.body.cidade,
    cep: req.body.cep,
    cidade: req.body.cidade,
    complemento: req.body.complemento,
    dataFim: req.body.dataFim,
    dataInicio: req.body.dataInicio,
    descricao: req.body.descricao,
    email: req.body.email,
    endereco: req.body.endereco,
    estado: req.body.estado,
    horaFim: req.body.horaFim,
    horaInicio: req.body.horaInicio,
    imagem: req.body.imagem,
    nomeDaObra: req.body.nomeDaObra,
    proprietario: req.body.proprietario,
    telefone: req.body.telefone,
    valor: req.body.valor,
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

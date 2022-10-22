const database = require("../models");
const Produto = database.produto;

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    if (
      !req.body.nomeDoProduto ||
      !req.body.descricaoDoProduto ||
      !req.body.qtdProduto ||
      !req.body.valorDoProduto ||
      !req.body.vaiUsarParaQue
    ) {
      res.status(400).send({
        message: "Nao pode estar vazio produto",
      });    
    }

    const produto = {
      nomeDoProduto: req.body.nomeDoProduto,
      descricaoDoProduto: req.body.descricaoDoProduto,
      qtdProduto: req.body.qtdProduto,
      valorDoProduto: req.body.valorDoProduto,
      vaiUsarParaQue: req.body.vaiUsarParaQue,
    };

    await Produto.create(produto)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error ao criar um produto.",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Error ao criar um produto.",
    });
  }
};

exports.findAll = async (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  await Produto.findAll({ where: condition })
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Error ao encontrar todos os produtos.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Produto.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error ao encontrar o produto com id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Produto.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Produto foi atualizado com sucesso.",
        });
      } else {
        res.send({
          message: `Nao foi possivel atualizar o produto com id=${id}. Talvez o produto nao tenha sido encontrado ou req.body esta vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error ao atualizar o produto com id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Produto.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Produto foi deletado com sucesso!",
        });
      } else {
        res.send({
          message: `Nao foi possivel deletar o produto com id=${id}. Talvez o produto nao tenha sido encontrado!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Nao foi possivel deletar o produto com id=" + id,
      });
    });
};

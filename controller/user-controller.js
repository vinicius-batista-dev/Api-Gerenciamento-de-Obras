const database = require("../models");
const configuration = require("../database/config-jwt.js");
const validarEmail = require("email-validator");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const User = database.user;

//Deve criar o usuario e verificar se ele e admin ou nao
exports.signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send({ message: "Preencha todos os campos" });
    }
    if (!validarEmail.validate(email)) {
      return res.status(400).send({ message: "Email invalido" });
    }
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      return res.status(400).send({ message: "Email ja cadastrado" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hash,
      role: "USER",
    });

    const token = jwt.sign({ id: newUser.id }, configuration.secret, {
      expiresIn: "7d", // 24 hours
    });

    await User.update(
      {
        token,
      },
      {
        where: {
          id: newUser.id,
        },
      }
    );

    res.status(200).send({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      token: token,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Um usuario que logar nao podera ter acesso aos dados de outro usuario
exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(404).send({ message: "Usuario nao encontrado" });
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Senha invalida",
      });
    }
    const token = jwt.sign({ id: user.id }, configuration.secret, {
      expiresIn: 86400, // 24 hours
    });

    await User.update(
      {
        token,
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: token,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.userId } });
    if (!user) {
      return res.status(404).send({ message: "Usuario nao encontrado" });
    }
    await User.update(
      { token: "" },
      {
        where: {
          id: user.id,
        },
      }
    );
    return res.send({
      message: "deslogado",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Deve listar todos os usuarios
exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

//Deve deletar o usuario pelo id
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id },
  })

    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Usuario deletado com sucesso",
        });
      } else {
        res.send({
          message: "Nao foi possivel deletar o usuario",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Nao foi possivel deletar o usuario",
      });
    });
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.userId } });
    if (!user) {
      return res.status(404).send({ message: "Usuario nao encontrado" });
    }
    await User.destroy({ where: { id: req.userId } });
    res.send({ message: "Usuario deletado com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.userId } });
    if (!user) {
      return res.status(404).send({ message: "Usuario nao encontrado" });
    }
    await User.update(
      {
        username,
        email,
        password,
      },
      {
        where: {
          id: req.userId,
        },
      }
    );
    res.send({ message: "Usuario atualizado com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

function validateRequest(req) {
  if (!req.body) {
    res.status(400).send({
      message: "nao pode estar vazio",
    });
    return;
  }
}

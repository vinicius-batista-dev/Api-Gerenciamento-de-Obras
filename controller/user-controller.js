const database = require("../models");
const configuration = require("../database/config-jwt.js");
const validarEmail = require("email-validator");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const User = database.user;

exports.signup = async (req, res) => {
  console.log("Teste" + req.body);
  if (!req.body.email || !req.body.password || !req.body.username) {
    return res.status(400).send({
      message: "Nao pode estar vazio user",
    });
  }

  if (!validarEmail.validate(req.body.email)) {
    return res.status(400).send({
      message: "Email invalido",
    });
  }

  const userExists = await User.findOne({ where: { email: req.body.email } });

  if (userExists) {
    return res.status(400).send({
      message: "Email Ja cadastrado",
    });
  }
  try {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      token: "",
      role: "USER",
    });
    return res.status(200).send({ message: "Usuario registrado com sucesso!" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.signin = async (req, res) => {
  if (!req.body.email || !req.body.password)
    return res.status(400).send({
      message: "Nao pode estar vazio",
    });

  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res
        .status(404)
        .send({ token: null, message: "Usuario ou Senha Invalida" });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        token: null,
        message: "Usuario ou Senha Invalida",
      });
    }

    var token = jwt.sign({ id: user.id }, configuration.secret, {
      expiresIn: "7d",
    });

    await User.update(
      { token },
      {
        where: {
          id: user.id,
        },
      }
    );

    return res.status(200).send({
      id: user.id,
      email: user.email,
      token,
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

exports.UserById = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.userId } });
    if (!user) {
      return res.status(404).send({ message: "Usuario nao encontrado" });
    }
    return res.status(200).send({
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
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

function validateRequest(req) {
  if (!req.body) {
    res.status(400).send({
      message: "nao pode estar vazio",
    });
    return;
  }
}

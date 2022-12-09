const jwt = require("jsonwebtoken");
const configuration = require("../database/config-jwt.js");
const database = require("../models");

const User = database.user;

//Deve verificar se o usuario ja existee nao deixar acessar os dados de outro usuario
const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "Nenhum token fornecido!",
    });
  }

  if (token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token === "null") {
    return res.status(401).send({
      message: "Não autorizado!",
    });
  }

  jwt.verify(token, configuration.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Não autorizado!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const jwtAuth = {
  verifyToken: verifyToken,
};

module.exports = jwtAuth;

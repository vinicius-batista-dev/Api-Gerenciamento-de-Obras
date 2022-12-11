const jwt = require("jsonwebtoken");
const configuration = require("../database/config-jwt.js");
const database = require("../models");

const User = database.user;

//Voce nao esta autorizado para acessar os dados de outro usuario
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });

    jwt.verify(token, configuration.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
        });

        //Verifica se o usuario existe
        User.findByPk(decoded.id).then((user) => {
          if (!user) {
            return res.status(404).send({
              message: "User Not found.",
            });
          }
          next();
        });
      }
    });
  }
};

const jwtAuth = {
  verifyToken: verifyToken,
};

module.exports = jwtAuth;

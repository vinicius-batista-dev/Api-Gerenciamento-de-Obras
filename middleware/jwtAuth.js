const jwt = require("jsonwebtoken");
const configuration = require("../database/config-jwt.js");
const database = require("../models");

const User = database.user;

verifyToken = async (req, res, next) => {
  const authToken = req.headers["authorization"];

  if (authToken != undefined) {
    const bearer = authToken.split(" ");
    const token = bearer[1];
    try {
      const decoded = jwt.verify(token, configuration.secret);

      if (decoded.role == 1) {
        const bearer = authToken.split(" ");
        const token = bearer[1];

        try {
          const decoded = jwt.verify(token, configuration.secret);
          req.userId = decoded.id;
          next();
        } catch (err) {
          res.status(401).json({ message: "Token inválido" });
        }
      } else {
        res.status(401).json({ message: "Você não tem permissão" });
      }
    } catch (err) {
      res.status(401).json({ message: "Token inválido" });
    }
  } else {
    res.status(401).json({ message: "Você não está logado" });
  }
};

const jwtAuth = {
  verifyToken: verifyToken,
};

module.exports = jwtAuth;

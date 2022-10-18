const jwt = require("jsonwebtoken");
const configuration = require("../database/config-jwt.js");
const database = require("../models");

const User = database.user;

verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    //Se nao tiver o token ele nao vai deixar passar
    if (!token) {
      throw res.status(403).send({
        message: "token nao econtrado!",
      });
    }

    const jwtDecode = jwt.verify(token, configuration.secret);

    if (!jwtDecode) {
      throw res.status(403).send({
        message: "token nao invalido!",
      });
    }

    const tokenDecoded = jwt.decode(token, "random-key");

    User.findOne({
      where: {
        id: tokenDecoded.id,
      },
    }).then((user) => {
      if (!user) {
        return res.status(400).send({
          message: "usuario nao econtrado  econtrado",
        });
      }
      req.userId = tokenDecoded.id;
      next();
    });
  } catch (error) {
    throw res.status(403).send({
      message: "token nao econtrado!",
    });
  }
};

checkExistingEmail = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Email ja existe",
      });
      return;
    }
  });

  jwt.verify(token, configuration.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "User unauthorized!",
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

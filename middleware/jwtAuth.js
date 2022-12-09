const jwt = require("jsonwebtoken");
const configuration = require("../database/config-jwt.js");
const database = require("../models");

const User = database.user;

verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      throw res.status(403).send({
        message: "token nao econtrado!",
      });
    }

    const tokenExists = jwt.verify(token, configuration.secret);
    if (!tokenExists) {
      throw res.status(403).send({
        message: "token invalido!",
      });
    }

    //Deve verificar se outro usuario nao esta usando o token de outro usuario
    if (tokenExists.id !== req.params.id) {
      return res.status(403).send({
        message: "token invalido!",
      });
    }

    await User.findOne({
      where: {
        id: tokenExists.id,
      },
    }).then((user) => {
      if (!user) {
        return res.status(400).send({
          message: "usuario nao econtrado",
        });
      } else if (user.token !== token) {
        return res.status(400).send({
          message: "token expirado",
        });
      }
      req.userId = tokenExists.id;
      next();
    });
  } catch (error) {
    throw res.status(403).send({
      message: "token nao econtrado!",
    });
  }
};

const jwtAuth = {
  verifyToken: verifyToken,
};

module.exports = jwtAuth;

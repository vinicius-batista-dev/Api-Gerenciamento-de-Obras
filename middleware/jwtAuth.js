const jwt = require("jsonwebtoken");
const config = require("../database/config-jwt.js");
const database = require("../models");

const User = database.user;

verifyToken = (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  console.log(
    "🚀 ~ file: jwtAuth.js:9 ~ verifyToken= ~ authHeader",
    authHeader
  );
  const [, token] = authHeader.split(" ");
  console.log("🚀 ~ file: jwtAuth.js:11 ~ verifyToken= ~ token", token);

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
}; /* 

    const tokenExists = jwt.verify(token, configuration.secret);

    if (!tokenExists) {
      throw res.status(403).send({
        message: "token invalido!",
      });
    }
    console.log(tokenExists.exp);
  try {
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
      message: "token nao econtrado",
    });
  }
}; */

const jwtAuth = {
  verifyToken: verifyToken,
};

module.exports = jwtAuth;

const database = require("../models");
const User = database.user;

checkExistingUsername = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    if (user) {
      res.status(400).send({
        message: "Usuario ja existe"
      });
      return;
    }
    next();
  });
};

checkExistingEmail = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Email ja existe"
      });
      return;
    }
    next();
  });
};


  


const verifyUser = {
  checkExistingUsername: checkExistingUsername,
  checkExistingEmail : checkExistingEmail
};

module.exports = verifyUser;
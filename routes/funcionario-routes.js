const { jwtAuth } = require("../middleware");
const funcionarioController = require("../controller/funcionario-controller");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Authorization, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/funcionario",
    jwtAuth.verifyToken,
    funcionarioController.create
  );
  app.get(
    "/api/funcionario",
    jwtAuth.verifyToken,
    funcionarioController.findAll
  );
  app.get(
    "/api/funcionario/:id",
    jwtAuth.verifyToken,
    funcionarioController.findOne
  );

  app.put(
    "/api/funcionario/:id",
    jwtAuth.verifyToken,
    funcionarioController.update
  );
  app.delete(
    "/api/funcionario/:id",
    jwtAuth.verifyToken,
    funcionarioController.delete
  );

  // app.get(
  //   "/api/funcionario/{id}/construcao",
  //   jwtAuth.verifyToken,
  //   funcionarioController.random
  // );
};

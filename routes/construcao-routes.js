const construcaoController = require("../controller/construcao-controller");
const swaggerUi = require("swagger-ui-express");
const { jwtAuth } = require("../middleware");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Authorization, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/construcao", jwtAuth.verifyToken, construcaoController.create);
  app.get("/api/construcao", jwtAuth.verifyToken, construcaoController.findAll);
  app.get(
    "/api/construcao/:id",
    jwtAuth.verifyToken,
    construcaoController.findOne
  );
  app.put(
    "/api/construcao/atualizar/:id",
    jwtAuth.verifyToken,
    construcaoController.update
  );
  app.delete(
    "/api/construcao/deletar/:id",
    jwtAuth.verifyToken,
    construcaoController.delete
  );
};

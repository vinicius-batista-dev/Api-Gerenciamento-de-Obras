const produtosController = require("../controller/produtos-controller");
const { jwtAuth } = require("../middleware");

module.exports = (app) => {
  app.post("/api/produtos", jwtAuth.verifyToken, produtosController.create);
  app.get("/api/produtos", jwtAuth.verifyToken, produtosController.findAll);
  app.get("/api/produtos/:id", jwtAuth.verifyToken, produtosController.findOne);
  app.put("/api/produtos/:id", jwtAuth.verifyToken, produtosController.update);
  app.delete(
    "/api/produtos/:id",
    jwtAuth.verifyToken,
    produtosController.delete
  );
};

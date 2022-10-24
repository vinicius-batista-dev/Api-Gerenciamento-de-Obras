const produtosController = require("../controller/produtos-controller");
const { jwtAuth } = require("../middleware");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Authorization, Content-Type, Accept"
    );
    next();
  });

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

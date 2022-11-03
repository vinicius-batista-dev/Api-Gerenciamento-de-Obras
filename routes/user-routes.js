const userController = require("../controller/user-controller");
const { jwtAuth } = require("../middleware");

module.exports = (app) => {
  app.post("/api/auth/signup", userController.signup);
  app.post("/api/auth/signin", userController.signin);
  app.get("/api/auth/logout", jwtAuth.verifyToken, userController.logout);
  app.get("/api/auth/user", jwtAuth.verifyToken, userController.UserById);
};

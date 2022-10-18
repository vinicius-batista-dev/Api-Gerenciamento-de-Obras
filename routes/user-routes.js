const userController = require("../controller/user-controller");
const { jwtAuth } = require("../middleware");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signup", userController.signup);
  app.post("/api/auth/signin", userController.signin);
  app.delete(
    "/api/auth/signout/:id",
    [jwtAuth.verifyToken],
    userController.deleteUser
  );
};

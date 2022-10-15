const verificarUsuario = require('../middleware');
const userController = require('../controller/user-controller');

module.exports = (app) => {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post('/api/auth/signup', userController.signup);
    app.post('/api/auth/signin', userController.signin);
}
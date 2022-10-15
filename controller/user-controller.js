const database = require("../models");
const configuration = require("../database/config-jwt.js");
const validarEmail = require("email-validator")
const User = database.user;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


exports.signup = async (req, res) => {
    
    console.log("Processing func -> SignUp");


    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Nao pode estar vazio"
        });
        return;
    }

    if(!validarEmail.validate(req.body.email)){
        res.status(400).send({
            message: "Email invalido"
        });
        return;
    }




    try {
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });
        res.send({ message: "Usuario registrado com sucesso!" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.signin = async (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Nao pode estar vazio"
        });
        return;
    }

 

    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(404).send({ message: "Usuario nao encontrado" });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Senha invalida"
            });
        }

        var token = jwt.sign({ id: user.id }, configuration.secret, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user.id,
            email: user.email,
            password: user.password,
            accessToken: token
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

function validateRequest(req) {
    if (!req.body) {
        res.status(400).send({
            message: "nao pode estar vazio"
        });
        return;
    }
}
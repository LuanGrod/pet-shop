const express = require("express");
const route = express.Router();
const loginController = require("./src/controller/loginController")
const cadastroController = require("./src/controller/cadastroController")
const usuarioController = require("./src/controller/usuarioController")

route.post("/login", loginController.loginPost);

route.post("/cadastro", cadastroController.cadastroPost);

route.put("/usuario", usuarioController.usuarioPut);

route.delete("/usuario", usuarioController.usuarioDelete);

module.exports = route;
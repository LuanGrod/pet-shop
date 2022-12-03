const express = require("express");
const route = express.Router();
const loginController = require("./src/controller/loginController")
const cadastroController = require("./src/controller/cadastroController")
const usuarioController = require("./src/controller/usuarioController")
const produtosController = require("./src/controller/produtosController")

route.post("/login", loginController.loginPost)

route.post("/cadastro", cadastroController.cadastroPost);

route.post("/usuario", usuarioController.usuarioPost);

route.put("/usuario", usuarioController.usuarioPut);

route.delete("/usuario", usuarioController.usuarioDelete);

route.get("/produtos/:query?", produtosController.produtosGet)

route.post("/produtos", produtosController.produtosPost)

module.exports = route;
const express = require("express");
const route = express.Router();
const indexController = require("./src/controller/indexController");
const cadastroController = require("./src/controller/cadastroController");
const loginController = require("./src/controller/loginController");
const produtosController = require("./src/controller/produtosController");
const usuarioController = require("./src/controller/usuarioController");

route.get("/", indexController.paginaIndex);

route.get("/login", loginController.paginaLogin);

route.post("/login", loginController.loginPost);

route.get("/usuario", usuarioController.paginaUsuario);

route.get("/cadastro", cadastroController.paginaCadastro);

route.get("/produtos", produtosController.paginaProdutos);

module.exports = route;
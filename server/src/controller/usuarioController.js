const { response } = require("express");
const usuarioModel = require("../model/usuario");

exports.paginaUsuario = (request, response) => {
    const session = request.session;
    if (session.email) {
        const usuario = new usuarioModel(session.username, session.password, session.email);
        response.render("usuario", {usuario})
    } else {
        response.redirect("/login");
    }
};
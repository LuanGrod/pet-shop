const Usuario = require("../model/Usuario");

exports.usuarioPut = (request, response) => {   
    const usuario = new Usuario(request.body);
    usuario.atualizar().then( result => {
        response.send(result);
    }).catch(error => {
        response.send(error);
    });   
}

exports.usuarioDelete = (request, response) => {
    const usuario = new Usuario(request.body);
    usuario.remover().then( result => {
        response.send(result);
    }).catch(error => {
        response.send(error);
    });     
}

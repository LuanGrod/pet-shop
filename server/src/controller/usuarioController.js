const Usuario = require("../model/Usuario");

/**
 * Método para resposta de requisições "put" realizadas na rota /usuario
 * Invoca o método de atualização da classe Usuario.
 * Finaliza o encadeamento de promises e retorna uma resposta de sucesso ou falha.
*/
exports.usuarioPut = (request, response) => {   
    const usuario = new Usuario(request.body);
    usuario.atualizar().then( result => {
        response.send(result);
    }).catch(error => {
        response.send(error);
    });   
}

/**
 * Método para resposta de requisições "delete" realizadas na rota /usuario
 * Invoca o método de remoção da classe Usuario.
 * Finaliza o encadeamento de promises e retorna uma resposta de sucesso ou falha.
*/
exports.usuarioDelete = (request, response) => {
    const usuario = new Usuario(request.body);
    usuario.remover().then( result => {
        response.send(result);
    }).catch(error => {
        response.send(error);
    });     
}

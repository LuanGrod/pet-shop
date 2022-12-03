const Usuario = require("../model/Usuario");

/**
 * Método para resposta de requisições "post" realizadas na rota /login
 * Invoca o método de autenticação da classe Usuario.
 * Finaliza o encadeamento de promises e retorna uma resposta de sucesso ou falha.
*/
exports.loginPost = (request, response) => {
    const usuario = new Usuario(request.body);
    usuario.autenticar().then( result => {
        response.send(result);
    }).catch(error => {
        response.send(error);
    });   
};
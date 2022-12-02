const Usuario = require("../model/Usuario");

//Método para resposta de requisições "post" realizadas na rota /login
exports.loginPost = (request, response) => {
    const usuario = new Usuario(request.body);
    
    //Invoca o método de autenticação da classe Login.
    //Finaliza o encadeamento de promises e retorna uma resposta de sucesso ou falha.
    usuario.autenticar().then( result => {
        response.send(result);
    }).catch(error => {
        response.send(error);
    });   
}
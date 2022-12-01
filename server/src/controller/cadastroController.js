const Usuario = require("../model/Usuario");

//Método para resposta de requisições "post" realizadas na rota /cadastro
exports.cadastroPost = (request, response) => {
    const usuario = new Usuario(request.body);
    //Invoca o método de cadastro da classe Usuario.
    //Finaliza o encadeamento de promises e retorna uma resposta de sucesso ou falha.
    usuario.cadastrar().then( result => {
        response.send(result); 
    }).catch(error => {
        response.send(error)
    });   
}
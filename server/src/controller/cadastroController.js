const Cadastro = require("../model/Cadastro")

exports.cadastroPost = (request, response) => {
    const cadastro = new Cadastro(request.body);
    cadastro.cadastrar().then( result => {
        response.send(result); 
    }).catch(error => {
        response.send(error)
    });   
}
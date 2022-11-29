const CadastroDAO = require("../model/DAO")

exports.cadastroPost = (request, response) => {

    const cadastro = {
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    };

    if (cadastro.username == "" || cadastro.email == "" || cadastro.password == ""){
        response.send("Erro! Não podem existir dados em branco.")
    }
    else {
        CadastroDAO.cadastrar(cadastro).then( result => {
            response.send(result);
        })
    }    
}
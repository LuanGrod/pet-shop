const UsuarioDAO = require("../model/DAO");

exports.usuarioPut = (request, response) => {

    const atualizacao = {
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    };

    if (atualizacao.username == "" || atualizacao.email == "" || atualizacao.password == ""){
        response.send("Erro! Não podem existir dados em branco.")
    }
    else{
        UsuarioDAO.atualizar(atualizacao).then( result => {
            response.send(result);
        })
    }
}

exports.usuarioDelete = (request, response) => {

    UsuarioDAO.remover(request.body.username).then( result => {
        response.send(result);
    })
}

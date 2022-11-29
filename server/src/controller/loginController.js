const LoginDAO = require("../model/DAO");

exports.loginPost = (request, response) => {
    const login = {
        username: request.body.username, 
        password: request.body.password
    };
    LoginDAO.logar(login).then(result => {
        response.send(result);
    });
}
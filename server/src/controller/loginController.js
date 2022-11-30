const Login = require("../model/Login");

exports.loginPost = (request, response) => {
    const login = new Login(request.body);
    login.autenticar().then( result => {
        response.send(result);
    }).catch(error => {
        response.send(error);
    });   
}
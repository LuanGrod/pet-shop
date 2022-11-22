const dao = require("./dao");

class Login {
    constructor(body) {
        this.body = body;
        this.user = {};
    }
    consultaUsuario() {
        if (dao.checkUser(this.body.username, this.body.senha)){
            console.log(this.body.username + this.body.senha)
            console.log(dao.checkUser(this.body.username, this.body.senha))
            this.user.username = this.body.username;
            this.user.email = dao.read(this.body.username).email;
            return true;
        }
        return false;
    }
}

exports.sessionDestroyer = (request, response) => {
    const session = request.session;

    if (session.email) {
        session.destroy();
        response.send("Usuário desconectado");
    } else {
        response.redirect("/");
    }
}

module.exports = Login;
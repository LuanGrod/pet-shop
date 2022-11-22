const loginModel = require("../model/login");

exports.paginaLogin = (request, response) => {
    const session = request.session;
    if (session.email) {
        response.redirect("/usuario");
    } else {
        response.send(`    <form action="/login" method="post">
        <h2>Login</h2>
        <div class="input-field">
            <input type="text" name="username" id="username" placeholder="Enter Username">
        </div>
        <div class="input-field">
            <input type="password" name="password" id="password" placeholder="Enter Password">
        </div>
        <input type="submit" value="LogIn">
    </form>`);
    }
};

exports.loginPost = (request, response) => {
    const login = new loginModel(request.body);

    if (login.consultaUsuario()) {
        const session = request.session;

        session.username = login.user.nome
        session.email = login.user.email;

        response.redirect("/usuario");
    } else {
        response.send("Verifique suas credenciais...");
    }
};
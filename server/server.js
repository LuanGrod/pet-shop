const express = require("express");
const session = require("express-session");
const uuid = require("uuid").v4;
const app = express();
const routes = require("./routes");

//Calcula o tempo de um dia em milisegundos
const umDia = 1000*60*60*24;
//Configura as opções do express-session
app.use(session({
    genid: (request) => {
        return uuid();
    },
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: umDia}
}))

app.use(express.static("./public"));
//Permite manipular o corpo de uma requisição.
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(porta = 6969, () => {
    console.log(`Servidor executando na porta ${porta}`);
});
const express = require("express");
const app = express();
const routes = require("./routes");
const bodyParser = require('body-parser')

app.use(express.urlencoded({extended: true}));
app.use(routes);
app.use(express.json());

app.listen(porta = 6969, () => {
    console.log(`Servidor executando na porta ${porta}`);
});
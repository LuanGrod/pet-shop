const express = require("express");
const app = express();
const routes = require("./routes");

// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.urlencoded({extended: true}));
app.use(routes);
app.use(express.json());

app.listen(porta = 6969, () => {
    console.log(`Servidor executando na porta ${porta}`);
});


const Produto = require("../model/Produto")

exports.produtosGet = (request, response) => {
    const produto = new Produto();
    produto.consultar().then (result => {
        response.send(result);
    }).catch(error => {
        response.send(error)
    });
};
const Produto = require("../model/Produto")

exports.produtosGet = (request, response) => {  
    const produto = new Produto(request.query);
    if (!(typeof request.query.id === "undefined")){       
        produto.consultarId().then (result => {
            response.send(result);
        }).catch(error => {
            response.send(error)
        });
    }
    else {
        produto.consultar().then (result => {
            //console.log(result)
            response.send(result);
        }).catch(error => {
            response.send(error)
        });
    }   
};
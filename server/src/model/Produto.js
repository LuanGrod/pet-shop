const ProductsDAO = require("./ProductsDAO");

class Produto {
    consultar() {
        const promise = (resolve, reject) => {
            ProductsDAO.consultar().then( result => {
                resolve(result);
            }).catch( error => {
                reject(error)
            });              
        }
        return new Promise(promise);
    }
}

module.exports = Produto;
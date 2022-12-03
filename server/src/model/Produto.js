const ProductsDAO = require("./ProductsDAO");

class Produto {
    #id;

    get id() {
        return this.#id
    }

    set id(valor) {
        this.#id = valor;
    }

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

    consultarId() {
        const promise = (resolve, reject) => {
            ProductsDAO.consultarId(this.#id).then( result => {
                resolve(result);
            }).catch( error => {
                reject(error)
            });              
        }
        return new Promise(promise);
    }
}

module.exports = Produto;
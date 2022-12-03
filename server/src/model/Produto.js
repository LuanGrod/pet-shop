const ProductsDAO = require("./ProductsDAO");

class Produto {
    #id;
    #descricao;
    #preco;
    #imagem;
    #estoque;

    constructor (query) {
        this.#id = query.id;
        this.#descricao = query.descricao;
        this.#preco = query.preco;
        this.#imagem = query.imagem;
        this.#estoque = query.estoque;
    }

    get id() {
        return this.#id;
    }

    get descricao() {
        return this.#descricao;
    }
    
    get preco() {
        return this.#preco;
    }

    get imagem() {
        return this.#imagem;
    }

    get estoque() {
        return this.#estoque;
    }

    consultar() {
        const promise = (resolve, reject) => {
            if ((this.#id == "") || (typeof this.#id === "undefined")){
                const resposta = JSON.stringify("Erro! Não podem existir dados em branco.")
                reject(resposta)
            }
            else {
                ProductsDAO.consultar(this.#id).then( result => {
                    resolve(result);
                }).catch( error => {
                    reject(error)
                });          
            }
        }
        return new Promise(promise);
    }
}

module.exports = Produto;
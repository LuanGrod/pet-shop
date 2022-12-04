const ProductsDAO = require("./ProductsDAO");

class Produto {
    #id;
    #descricao;
    #preco;
    #imagem;

    constructor(query){
        this.#id = query.id;
        this.#descricao = query.descricao;
        this.#preco = query.preco;
        this.#imagem = query.imagem;
    }

    get id() {
        return this.#id
    }

    get descricao() {
        return this.#descricao
    }

    get preco() {
        return this.#preco
    }

    get imagem() {
        return this.#imagem
    }

    /**
     * Método de consulta de produtos. Retorna todos os produtos armazenados.
     * @returns Promise (Produtos || erro)
     */
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

    /**
     * Método de consulta de produto especifico.
     * @returns Promise (Produtos || erro)
     */
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
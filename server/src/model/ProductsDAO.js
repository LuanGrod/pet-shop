const fs = require('fs');

class ProductsDAO {
    //Diretório do arquivo de dados de produtos (é utilizado um arquivo.json para armazenamento)
    static #dir = (__dirname + '/products.json');
    //encoding utf-8 para escrever em pt-br
    static #encoding = "utf-8";

    get dir() {
        return this.#dir;
    }

    get encoding() {
        return this.#encoding;
    }

    /**
     * Método de carregamento do arquivo de dados de produtos.
     * É invocado em todo método que exige manipulação do arquivo.
     * @returns Promise (dados || erro)
     */
    static load() {
        const promise = (resolve, reject) => {
            fs.readFile(this.#dir, this.#encoding, (error, data) => {
                if (error) {
                    const erro = JSON.stringify(error);
                    reject(erro);
                    return;
                }
                try {
                    const dados = JSON.parse(data);
                    resolve(dados);
                } catch (e) {
                    const erroParse = JSON.stringify(e);
                    reject(erroParse);
                    return;
                }
            })
        }
        return new Promise(promise);
    }   

    /**
     * Método para consulta de produtos. Retorna seus dados em forma de promise.
     * @param {*} id 
     * @returns Promise (descricao, preco, imagem || erro)
     */
    static consultar(id) {
        const promise = (resolve, reject) => {
            ProductsDAO.load().then(dados => {           
                if(dados.hasOwnProperty(id)){
                    const resposta = {descricao: dados[id][0], preco: dados[id][1], imagem: dados[id][2]};
                    resolve(resposta);
                }
                else{
                    const resposta = JSON.stringify("Erro! Produto não existente...");
                    reject(resposta)
                    return
                }
            }).catch(error => {
                reject(error);
                return;
            });
        }
        return new Promise(promise);
    }    
}

module.exports = ProductsDAO
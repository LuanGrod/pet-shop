const DAO = require("./DAO");

//
/**
 * Classe de domínio. 
 * Realiza validação e utiliza os métodos da classe DAO. 
 * @returns promise
*/
class Usuario {
    #username;
    #email;
    #password;
    
    constructor (body) {
        this.#username = body.username;
        this.#email = body.email;
        this.#password = body.password;
    }

    get username() {
        return this.#username;
    }

    get email() {
        return this.#username;
    }

    get password() {
        return this.#password;
    }

    /**
     * Invoca o método "autenticar" da classe DAO, realizando validação. 
     * Consome a promise recebida e gera uma nova promise como resposta.
     * @returns promise
     */
    autenticar() {
        const promise = (resolve, reject) => {
            if ((this.#username == "") || (this.#password == "") || 
            (typeof this.#username === "undefined") || (typeof this.#password === "undefined")){
                const resposta = JSON.stringify("Erro! Não podem existir dados em branco.")
                reject(resposta)
            }
            else {
                DAO.autenticar(this.#username, this.#password).then( result => {
                    resolve(result);
                }).catch( error => {
                    reject(error)
                });          
            }
        }
        return new Promise(promise);
    }

    /**
     * Invoca o método "cadastrar" da classe DAO, realizando validação. 
     * Consome a promise recebida e gera uma nova promise como resposta. 
     * @returns promise
    */   
    cadastrar() {
        const promise = (resolve, reject) => {
            if ((this.#username == "") || (this.#email == "") || (this.#password == "") 
            || (typeof this.#username === "undefined") || (typeof this.#email === "undefined") || (typeof this.#password === "undefined")){
                const resposta = JSON.stringify("Erro! Não podem existir dados em branco.")
                reject(resposta)
            }
            else {
                DAO.cadastrar(this.#username, this.#email, this.#password).then(result => {
                    resolve(result);
                }).catch( error => {
                    reject(error)
                });
                
            }  
        }
        return new Promise(promise);
    }
    

    /**
     * Invoca o método "atualizar" da classe DAO, realizando validação. 
     * Consome a promise recebida e gera uma nova promise como resposta.
     * @returns promise
     */
    atualizar() {
        const promise = (resolve, reject) => {
            if ((this.#username == "") || (this.#email == "") || (this.#password == "") 
            || (typeof this.#username === "undefined") || (typeof this.#email === "undefined") || (typeof this.#password === "undefined")){
                const resposta = JSON.stringify("Erro! Não podem existir dados em branco.")
                reject(resposta)
            }
            else{
                DAO.atualizar(this.#username, this.#email, this.#password).then( result => {
                    resolve(result);
                }).catch( error => {
                    reject(error)
                });       
            }
        }
        return new Promise(promise);
    }

    /**
     * Invoca o método "remover" da classe DAO, realizando validação. 
     * Consome a promise recebida e gera uma nova promise como resposta.
     * @returns promise
     */
    remover() {
        const promise = (resolve, reject) => {
            if ((this.#username == "") || (typeof this.#username === "undefined")) {
                const resposta = JSON.stringify("Erro! Não podem existir dados em branco.")
                reject(resposta)
            }
            else{
                DAO.remover(this.#username).then ( result => {
                    resolve(result);
                }).catch( error => {
                    reject(error)
                });           
            }
        }
        return new Promise(promise);
    }
}

module.exports = Usuario;
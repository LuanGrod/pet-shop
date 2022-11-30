const DAO = require("./DAO");

class Usuario {
    #username;
    #email;
    #password;
    constructor (body) {
        if(typeof body.username === "undefined"){
            this.#username = "";
            this.#email = "";
            this.#password = "";
        }
        else {
            this.#username = body.username;
            this.#email = body.email;
            this.#password = body.password;
        } 
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

    atualizar() {
        const promise = (resolve, reject) => {
            if (this.#username == "" || this.#email == "" || this.#password == "" || typeof this.#email === "undefined" || typeof this.#password === "undefined"){
                reject("Erro! Não podem existir dados em branco.")
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

    remover() {
        const promise = (resolve, reject) => {
            if (this.#username == "") {
                reject("Erro! Não podem existir dados em branco.")
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
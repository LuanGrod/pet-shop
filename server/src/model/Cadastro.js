const DAO = require("./DAO");

class Cadastro {
    #username;
    #email;
    #password;
    constructor (body) {
        if((typeof body.username === "undefined") || (typeof body.email === "undefined") || (typeof body.password === "undefined")){
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

    cadastrar() {
        const promise = (resolve, reject) => {
            if (this.#username == "" || this.#email == "" || this.#password == ""){
                resolve("Erro! Não podem existir dados em branco.")
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
}

module.exports = Cadastro;
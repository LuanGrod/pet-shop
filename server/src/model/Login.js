const DAO = require("./DAO");

class Login {
    #username;
    #password;
    constructor (body) {
        if((typeof body.username === "undefined") || (typeof body.password === "undefined")){
            this.#username = "";
            this.#password = "";
        }
        else {
            this.#username = body.username;
            this.#password = body.password;
        }    
    }

    get username() {
        return this.#username;
    }

    get password() {
        return this.#password;
    }

    autenticar() {
        const promise = (resolve, reject) => {
            if (this.#username == "" || this.#password == ""){
                reject("Erro! Não podem existir dados em branco.")
            }
            else {
                DAO.logar(this.#username, this.#password).then( result => {
                    resolve(result);
                }).catch( error => {
                    reject(error)
                });          
            }
        }
        return new Promise(promise);
    }
}

module.exports = Login;
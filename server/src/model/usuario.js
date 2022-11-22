class Usuario {
    #username;
    #password;
    #email;
    constructor(username, password, email){
        this.#username = username;
        this.#password = password;
        this.#email = email;
    }

    get username() {
        return this.#username;
    }
    get password() {
        return this.#password;
    }
    get email() {
        return this.#email;
    }
    
    set username(value) {
        this.#username = value;
    }

    set password(value) {
        this.#password = value;
    }

      set email(value) {
        this.#email = value;
    }   
}

module.exports = Usuario;
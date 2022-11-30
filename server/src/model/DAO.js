const fs = require('fs');

class DAO {
    static #dir = (__dirname + '/users.json');
    static #encoding = "utf-8";

    get dir() {
        return this.#dir;
    }

    get encoding() {
        return this.#encoding;
    }

    static load() {
        const promise = (resolve, reject) => {
            fs.readFile(this.#dir, this.#encoding, (error, data) => {
                    if(error) {
                        reject(error);
                        return;
                    }
                    try{
                        const dados = JSON.parse(data);
                        resolve(dados);
                    } catch (e){
                        reject(e)
                        return;
                    }  
                })         
            }
            return new Promise(promise);       
    }
    
    static save(content) {
        const promise = (resolve, reject) => {
            fs.writeFile(this.#dir, JSON.stringify(content, null, 4), this.#encoding, (error) => {
                if(error) {
                    reject(error);
                    return;
                }
                resolve(true);
            });
        };
        return new Promise(promise)     
    };


   static logar(username, password) {

        const promise = (resolve, reject) => {
                DAO.load().then( dados => {
                    const check = dados.hasOwnProperty(username);
                    if (check && (dados[username][1] == password)){
                        const email = dados[username][0];
                        resolve([username, email]);
                    } 
                    else{
                        reject("Erro! Verifique suas credenciais...");
                        return;
                    }
                }).catch( error => {
                    reject(error);
                    return;
                });           
        }
        return new Promise(promise);
    }        

   static cadastrar(username, email, password) {
        const promise = (resolve, reject) => {
            DAO.load().then( dados => {
                const jsonLength = Object.keys(dados).length;
                
                for(let i=0;i<jsonLength;i++){
                    if(email == (Object.values(dados)[i][0])){
                        reject("Erro! Email já cadastrado.");
                        return;
                    }
                }
                if(dados.hasOwnProperty(username)){
                    reject("Erro! Usuário já cadastrado.");
                    return;
                }
                else {
                    dados[username] = [email, password]
                    DAO.save(dados).then(() => {
                        resolve("Usuário cadastrado com sucesso!")
                    }).catch( error => {
                        reject("Não foi possível salvar os dados: " + error)
                        return;
                    });  
                }
            }).catch( error => {
                reject(error);
                return;
            })
        }
        return new Promise(promise);
    }
    
  static atualizar(username, email, password) {
        const promise = (resolve, reject) => {
            DAO.load().then( dados => {
                if(dados.hasOwnProperty(username)){
                    dados[username] = [email, password]
                    DAO.save(dados).then(() => {
                        resolve("Usuário atualizado com sucesso!");
                    }).catch( error => {
                        reject("Não foi possível salvar os dados: " + error);
                        return;
                    });                     
                }
                else {
                    reject("Erro! Usuário não existente");
                    return;
                }
            }).catch( error => {
                reject(error);
                return;
            })
        }
        return new Promise(promise);
    }     

   static remover(username) {
        const promise = (resolve, reject) => {
            DAO.load().then( dados => {
                if(dados.hasOwnProperty(username)){
                    delete dados[username];
                    DAO.save(dados).then(() => {
                        resolve("Usuário removido com sucesso!")
                    }).catch( error => {
                        reject("Não foi possível salvar os dados: " + error)
                        return;
                    }); 
                }
                else {
                    reject ("Erro! Não foi possível remover o usuário.");
                    return;
                }
            }).catch( error => {
                reject(error);
                return;
            })
        }
        return new Promise(promise);               
    }   
}

module.exports = DAO;
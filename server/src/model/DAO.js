const fs = require('fs');

//Classe de acesso aos dados. Pelo fato de ser uma classe, para processamento assíncrono, seus métodos
//retornam promises, as quais são consumidas por outras funções (locais ou de outros módulos)
//que também retornam outras promises. Esse encadeamento acontece até a resposta ser enviada.
class DAO {
    //Diretório do arquivo de dados de usuários (é utilizado um arquivo.json para armazenamento)
    static #dir = (__dirname + '/users.json');
    //encoding utf-8 para escrever em pt-br
    static #encoding = "utf-8";

    get dir() {
        return this.#dir;
    }

    get encoding() {
        return this.#encoding;
    }

    //Método que carrega o arquivo de dados de usuário - Retorna uma promise.
    static load() {
        const promise = (resolve, reject) => {
            fs.readFile(this.#dir, this.#encoding, (error, data) => {
                if (error) {
                    reject(error);
                    return;
                }
                try {
                    const dados = JSON.parse(data);
                    resolve(dados);
                } catch (e) {
                    reject(e)
                    return;
                }
            })
        }
        return new Promise(promise);
    }

    //Método para salvar modificações no arquivo de dados de usuário - Retorna uma promise.
    static save(content) {
        const promise = (resolve, reject) => {
            fs.writeFile(this.#dir, JSON.stringify(content, null, 4), this.#encoding, (error) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(true);
            });
        };
        return new Promise(promise)
    };

    //Método para autenticação. Utiliza o método de carregamento de arquivo, consumindo sua promise e
    //gerando uma nova promise como resposta.
    static autenticar(username, password) {
        const promise = (resolve, reject) => {
            DAO.load().then(dados => {
                const check = dados.hasOwnProperty(username);
                if (check && (dados[username][1] == password)) {
                    const email = dados[username][0];
                    resolve({ username, email });
                    console.log(username, email);
                }
                else {
                    const resposta = JSON.stringify("Erro! Verifique suas credenciais...");
                    reject(resposta)
                }
            }).catch(error => {
                reject(error);
                return;
            });
        }
        return new Promise(promise);
    }

    //Método para cadastro. Utiliza o método de carregamento e salvamento de arquivos, consumindo suas promises,
    //gerando uma nova promise como resposta.
    static cadastrar(username, email, password) {
        const promise = (resolve, reject) => {
            DAO.load().then(dados => {
                const jsonLength = Object.keys(dados).length;

                for (let i = 0; i < jsonLength; i++) {
                    if (email == (Object.values(dados)[i][0])) {
                        const resposta = JSON.stringify("Erro! Email já cadastrado.")
                        reject(resposta);
                        return;
                    }
                }
                if (dados.hasOwnProperty(username)) {
                    const resposta = JSON.stringify("Erro! Usuário já cadastrado.")
                    reject(resposta);
                    return;
                }
                else {
                    dados[username] = [email, password]
                    DAO.save(dados).then(() => {
                        const resposta = JSON.stringify("Usuário cadastrado com sucesso!")
                        resolve(resposta)
                    }).catch(error => {
                        const resposta = JSON.stringify("Não foi possível salvar os dados: " + error)
                        reject(resposta)
                        return;
                    });
                }
            }).catch(error => {
                reject(error);
                return;
            })
        }
        return new Promise(promise);
    }

    //Método para atualização de dados de usuário. Princípios similares aos do método de cadastro.
    //Utiliza os métodos de carregamento e salvamendo de dados, consumindo suas promises e
    //gerando uma nova promise como resposta.
    static atualizar(username, email, password) {
        const promise = (resolve, reject) => {
            DAO.load().then(dados => {
                if (dados.hasOwnProperty(username)) {
                    dados[username] = [email, password]
                    DAO.save(dados).then(() => {
                        const resposta = JSON.stringify("Usuário atualizado com sucesso!")
                        resolve(resposta)
                    }).catch(error => {
                        const resposta = JSON.stringify("Não foi possível salvar os dados: " + error)
                        reject(resposta)
                        return;
                    });
                }
                else {
                    const resposta = JSON.stringify("Erro! Usuário não existente")
                    reject(resposta);
                    return;
                }
            }).catch(error => {
                reject(error);
                return;
            })
        }
        return new Promise(promise);
    }

    //Método de remoção de usuário. 
    //Utiliza os métodos de carregamento e salvamendo de dados, consumindo suas promises e
    //gerando uma nova promise como resposta.
    static remover(username) {
        const promise = (resolve, reject) => {
            DAO.load().then(dados => {
                if (dados.hasOwnProperty(username)) {
                    delete dados[username];
                    DAO.save(dados).then(() => {
                        const resposta = JSON.stringify("Usuário removido com sucesso!")
                        resolve(resposta)
                    }).catch(error => {
                        const resposta = JSON.stringify("Não foi possível salvar os dados: " + error)
                        reject(resposta)
                        return;
                    });
                }
                else {
                    const resposta = JSON.stringify("Erro! Não foi possível remover o usuário.")
                    reject(resposta);
                    return;
                }
            }).catch(error => {
                reject(error);
                return;
            })
        }
        return new Promise(promise);
    }
}

module.exports = DAO;
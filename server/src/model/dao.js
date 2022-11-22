const fs = require('fs');

const dir = "./database.json";

function load() {
    try{
        const data = fs.readFileSync(dir, "utf-8")
        return JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
}

function save(content) {
    const contentString = JSON.stringify(content, null, 4)
    return fs.writeFileSync(dir, contentString);
}

exports.checkUser = (username, password) => {
    try{
        const dados = load();
        if ((dados[username] != null) && (dados[username][1] == password)){
            return true;
        }
        else {
            return false;
        }
    } catch (e) {
        console.log(e);
    }
}

exports.read = (username) => {
    try{
        const dados = load();
        return dados[username];
    } catch (e) {
        console.log(e);
        return false;
    }
}

exports.create = (username, email, password) => {
    try{
        const dados = load();
        const jsonLength = Object.keys(dados).length;
        
        for(i=0;i<jsonLength;i++){
            if(email == (Object.values(dados)[i][0])){
                console.log("Erro! Email já cadastrado.");
                return false;
            }
        }
        if(dados.hasOwnProperty(username)){
            console.log("Erro! Usuário já cadastrado.");
            return false;
        }
        else {
            dados[username] = [email, password]
            save(dados);
            console.log("success")
            return true;
        }  
    } catch (e) {
        console.log(e);
        return false;
    }   
}

exports.update = (username, email, password) => {
    try{
        const dados = load();
        dados[username] = [email, password]
        save(dados);
        return true;
    } catch (e) {
        return false;
    }   
}

exports.remove = (username) => {
    const dados = load();
    if(dados.hasOwnProperty(username)){
        delete dados[username];
        save(dados);
        return true;
    }
    return false;
}







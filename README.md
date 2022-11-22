# Pet Shop - Tudo para o seu pet
[![status](https://img.shields.io/badge/status-indo...-green)](https://github.com/LuanGrod/pet-shop)
[![licence](https://img.shields.io/badge/licença-MIT-red)](https://github.com/LuanGrod/pet-shop/blob/main/LICENSE)

## Sobre o projeto
~Depois a gente faz isso~
* Objetivo
* Caracteristicas
* Falar sobre o MVC
* Orientação a objetos
* Tudo que achar pertinente pode por aqui
* Sempre que for trabalhar nisso tenta dar um `git pull` antes de começar e quando der um `git push` da um toque no grupo pra nao precisar ficar usando um milhão de branchs diferentes

## Tutorial básico para a instalação e configuração do ambiente de desenvolvimento

### Instalando o projeto em sua máquina

Primeiro você tem que baixar o repositório remoto em sua máquina, pegue a URL assim como na imagem

![github](https://github.com/LuanGrod/pet-shop/blob/main/assets/ss1.JPG)

Com a URL em sua área de transferência use o terminal de sua escolha (aqui eu estou usando o Git Bash, mas você pode usar o nativo do VScode, Prompt de comando do Windows, Powershell, enfim... vai na fé) para clonar o repositório.

![github](https://github.com/LuanGrod/pet-shop/blob/main/assets/ss2.JPG)

Feito isso você terá em mãos a versão mais atualizada do projeto, de modo que agora só falta baixar as dependências utilizadas.

Para ver quais dependências estão sendo usadas, basta acessar o arquivo `package.json` (do client e do server), arquivo de configuração utilizado para estipular e configurar dependências do  projeto e scripts automatizados.

``` json
client ->
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
```

``` json
server ->
  "dependencies": {
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "uuid": "^9.0.0"
  }

```

Na versão do dia 22/11/22 a lista ainda está pequena, mas conforme o projeto é desenvolvido mais dependências serão adicionadas.

Para instalar essas belezinhas basta digitar no terminal dentro de cada pasta o comando `npm install`, criando assim a famosa pasta `node_modules` onde estarão os arquivos com as dependências do projeto.

### Pontos a se considerar

Primeiro de tudo você precisa entender que ambas aplicações rodam em portas diferentes, a do client (ReactJs) por padrão roda na porta `:3000` e a do server foi escolhida manualmente para a porta `:6969`.

Para rodar o projeto você precisará de alguns scripts que estão no arquivo `package.json`.

``` json
client ->
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

``` json
server ->
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  }

```

No próprio VScode, basta abrir dois terminais em paralelo e digitar o script `npm start` em cada pasta, rodando assim as aplicações.

![github](https://github.com/LuanGrod/pet-shop/blob/main/assets/ss3.JPG)

### ~Por enquanto é isso, conforme a gente for fazendo isso vamos atualizando esse README.md~

# Ferramentas e Tecnologias
### Front-end
- React
- JSX

### Back-end
- NodeJs
- Express

### Banco de dados
- JSON

# Autores
Arthur Gonçalves Luiz - https://www.linkedin.com/in/arthur-gonçalves-luiz-3a5abb191/

Luan Guilherme Rodrigues - https://www.linkedin.com/in/luan-grod/

~põe o linkedin de vocês aqui~

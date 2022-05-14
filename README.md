# Back-end Challenge 🏅 2021 - Space Flight News #

# Introdução #

Esse projeto é a realização de um desafio da Coodesh, o qual fora desenvolvida uma API REST ulitlizando o Framework Express e o banco de dados relacional PostgreSQL.

## Tecnologias ##

- [PostgreSQL](https://www.postgresql.org)
- [Node.js](https://nodejs.org/en/)
  - [Express (Node.js Web Framework)](https://expressjs.com/pt-br/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Axios](https://github.com/axios/axios)
  - [Eslint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [Jest](https://jestjs.io/)
- [Insomnia Documenter](https://www.npmjs.com/package/insomnia-documenter)
- [Docker](https://www.docker.com/)

# Execução #

Esse projeto pode ser executado de duas formas, através do Docker, facilitado pelo arquivo *compose* na raíz do projeto:

```bash
docker-compose up
```

Ou por meio do npm, que pode ser executado na raíz da pasta *space-flight-news* da seguinte forma:

```bash
npm install
```

*ou*

```bash
yarn
```

Para execução em ambiente de desenvolvimento:

```bash
npm run dev
```

*ou*

```bash
yarn dev
```

É necessário inserir as variáveis de ambiente:  

- SPACE_FLIGHTS_API_URL(URL da API Space Flight News)

## Documentação ##

Para execução da documentação:

```bash
npm run doc
```

*ou*

```bash
yarn doc
```

Se os passos anteriores foram executados com sucesso, o acesso estará disponível em: [http://localhost:3000/](http://localhost:3000/)

# Testes #

Para execução dos testes, na raíz da pasta *space-flight-news*, execute o seguinte comando:

```bash
npm run test
```

*ou*

```bash
yarn test
```

> This is a challenge by Coodesh

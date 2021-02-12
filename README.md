# Bookshelf
<img src="https://i.imgur.com/4uMDtP4.png" width=500 />
## Sobre o Projeto

Nesse projeto foi criado uma SPA para listar livros. Foi criado no backend uma api utilizando NodeJS/Express/Typescript, pensada para ser escalavel, onde é feita a criação e listagem de Livros utilizando SQLITE. No front-end foi utilizado VanillaJS/Webpack/Sass para realizar a integração com a api, foi pensado em um modelo de pastas que pudesse ser escálavel para futuras novas features.
## Criado com

[Javascript](http://vanilla-js.com)  
[WebPack](https://webpack.js.org)  
[Sass](https://sass-lang.com)  
[Jasmine](https://jasmine.github.io)  
[NodeJS](https://nodejs.org/en/)

### Pré requisitos
Node.Js 14.x
npm
```sh
npm install npm@latest -g
```
Yarn
```
npm install -g yarn
```
node-gyp instalado
https://github.com/nodejs/node-gyp/blob/master/README.md
Pré requisito para o sqlite3
## Instalação

1. Clone esse repositório
```sh
git clone https://github.com/andlipe/booksCatalog
```
2. Faça a instalação dos pacotes na pasta de back-end e front-end
```sh
cd /backend
yarn install  

cd /frontend
yarn install
```
3. Rode as migrations no diretório do backend
```sh
yarn typeorm migration:run
```
4. Inicie o backend e após o front-end
backend:
```
yarn dev:server
```
frontend:
```
yarn start
```
5. Endereços:
backend:
```
http://localhost:3000
```
frontend:
```
http://localhost:9000
```
6.  Para rodar os testes de backend:
```
yarn test
```
# Api

## Listar todos Livros
### Request
`GET /books`

### Response
```json
{
    "id": "5adfb10b-df47-4b6c-b8c5-cd896e5571fc",
    "ISBN": "978-8532530806",
    "title": "Harry Potter",
    "subtitle": "e o prisioneiro de Azkaban",
    "price": 28,
    "description": "As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no    expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos   Alfeneiros foi triste e solitária. Com muita ação, humor e magia, 'Harry Potter e o prisioneiro de    Azkaban' traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a  exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes   surpresas para Harry.",
}
```

## Criar um livro
### Request
`POST /books/create`

####  Body
```json
    ISBN: string,
    title: string,
    subtitle: string,
    price: number,
    description: string
```
### Response
```json 
    {
  "ISBN": "978-8532530806",
  "title": "Harry Potter",
  "subtitle": "e o prisioneiro de Azkaban",
  "price": 28,
  "description": "As aulas estão de volta à Hogwarts e Harry Potter não vê a hora de embarcar no expresso a vapor que o levará de volta à escola de bruxaria. Mais uma vez suas férias na rua dos Alfeneiros foi triste e solitária. Com muita ação, humor e magia, 'Harry Potter e o prisioneiro de Azkaban' traz de volta o gigante atrapalhado Rúbeo Hagrid, o sábio diretor Alvo Dumbledore, a exigente professora de transformação Minerva MacGonagall e o novo mestre Lupin, que guarda grandes surpresas para Harry.",
  "id": "fc454511-0d37-407c-a781-4ad9c2509264"
}

```


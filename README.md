
## Descrição

[Nest](https://github.com/nestjs/nest) Framework utilizanda nesse projeto.

## Migração de banco

Para criação de scripts para migração do banco de dados é necessario entrar dentro da pasta /migration e utilizar o comando:
$ typeorm migration:create -n {descricao}

Para rodar o script de migração, primeiramente deve dar start no servidor para atualizar o dist e após isso:
$ npm run typeorm migration:run


## Instalação

```bash
$ npm install
```

## Rodando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Teste

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

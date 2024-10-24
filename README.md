
# Dashboard

O `Dashboard` mostra todas as admissões criadas, com as opções de aprovar, reprovar e excluir.

Dashboard com a listagem das admissões.

![Screenshot 2024-06-11 at 1 52 35 PM](https://github.com/caju-beneficios/caju-front-teste-1/assets/31169925/3b002341-454b-4b24-82cb-6390656b56cc)

A tela de `Cadastro` exibe um formulário simples que será utilizado para criar as admissões.

![Screenshot 2024-06-11 at 11 48 47 AM](https://github.com/caju-beneficios/caju-front-teste-1/assets/31169925/bbbb211c-165f-40e5-b2af-61adafd61398)

## Configuração

```shell
npm install
# ou
yarn install

```

Inicie o servidor do Json Web Server para consumir a API

```shell
npm init:db
# ou
yarn init:db
```

Execute a aplicação

```shell
npm run dev
# ou
yarn dev
```

Se tudo ocorreu bem os seguintes serviços estarão disponiveis em:
<br/>

Aplicação http://localhost:3001/
<br/>

## Servidor JSON
```bash
npm run json-server
# ou
yarn json-server
```
Json Web Server http://localhost:3000/

## Testes
Caso necessite executar a suíte de testes use o comando abaixo:

```shell
npm run test:dev
# ou
yarn test:dev
```

## Estrutura do Projeto
O projeto está organizado da seguinte forma:
```bash 
public
src
├── api
├── components
├── const
├── hooks
├── interface
├── page
│ ├── Dashboard
│ ├── NewUser
├── router
├── utils
├── page
```

## Tecnologias Utilizadas
- React: Library para desenvolvimento web.
- TypeScript: Linguagem de programação que é um superconjunto de JavaScript.
- React Hook Forms: Biblioteca para criação de formulários em React.
- React Query: Biblioteca para gerenciamento de estado de dados assíncronos em React, como requisições de dados de APIs
- React input mask: Biblioteca para adicionar máscaras em inputs
- JSON Server: Ferramenta para criar um servidor REST simulado utilizando um arquivo JSON.
- Testing Library: Conjunto de ferramentas para teste de interfaces de usuário.
- Jest: Framework de testes em JavaScript.


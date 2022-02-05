# Aplicação WEB Desktop de Delivery de Cervejas

## Índice

- [Descrição](#Descrição)
- [Como Usar Online](#Como-Usar-Online)
- [Como Usar Localmente](#Como-usar-no-ambiente-local)
- [Desenvolvimento](#Desenvolvimento)
- [Arquitetura](#Arquitetura)
- [Outros Scripts da Aplicação](#outros-scripts-configurados-na-aplicação)
- [Deploy](#Deploy)
- [Contato](#Contato)

## Descrição

Repositório com o código de uma **Aplicação WEB Desktop**, em React.js.

Esta aplicação foi desenvolvida para o trabalho de conclusão do módulo de back-end da Trybe, projeto App de Delivery.

O objetivo era criar uma aplicação para uma cliente que tinha um depósito de bebidas e fazia entrega.
Com o crescimento da demanda por entregas em várias partes da cidade, ficou difícil fazer o controle apenas por meio de tabelas.
Dessa forma ela solicitou uma aplicação para a venda, controle de entregas e administração dos usuários.

Foi desenvolvida a aplicação front-end para para que fosse possível fazer toda a dinâmica de:

- Fluxo do cliente
  - Apresentar produtos; 
  - Fazer pedidos;
  - Acompanhar pedidos;
- Fluxo do vendedor
  - Gerenciar pedidos (mudando o status dele);
- Fluxo do administrador
  - Gerenciar usuários;

Foi desenvolvida uma aplicação back-end que se encontra [nesse repositório](https://github.com/rslfilho/delivery-back-end).

## Como usar online

Para acessar a página da aplicação rodando e/ou testar a aplicação, basta clicar [aqui](https://beersdelivery.vercel.app/).

Para logar, você pode usar os dados abaixo:

```
Admin:
- email: adm@deliveryapp.com
- senha: --adm2@21!!--

Vendedor:
- email: fulana@deliveryapp.com
- senha: fulana@123

Consumidor:
- email: zebirita@email.com
- senha: $#zebirita#$
```

## Como usar no ambiente local

1 - Para clonar o repositório, vá até o diretório onde deseja clonar, execute o `git clone` e depois entre no diretório criado:

```bash
git clone git@github.com:rslfilho/delivery-front-end.git
cd delivery-front-end
```

2- Já dentro do diretório, instale as depedências:

```bash
npm install
```

3 - Mude os endpoints do back para localhost:

`/src/context/order/order.js`
```javascript
(...)
const socket = io('http://localhost:3001');
(...)
```

`/src/services/orderAPI.js`
```javascript
(...)
const URL = 'http://localhost:3001/';
(...)
```

`/src/services/productAPI.js`
```javascript
(...)
const baseURL = 'http://localhost:3001/';
(...)
```

`/src/services/userAPI.js`
```javascript
(...)
const baseURL = 'http://localhost:3001/';
(...)
```

4 - Depois de instaladas as depedências, inicie a aplicação:

```bash
npm start
```

5 - A aplicação estárá rodando e acessível em `http://localhost:3000/`. A aplicação depende do back-end já mencionado anteriormente.
Para acessar pode utilizar os seguintes dados de login:

```
Admin:
- email: adm@deliveryapp.com
- senha: --adm2@21!!--

Vendedor:
- email: fulana@deliveryapp.com
- senha: fulana@123

Consumidor:
- email: zebirita@email.com
- senha: $#zebirita#$
```

## Desenvolvimento

A aplicação foi desenvolvida em React.js, com ContextAPI para gerenciamento de estado.

Além disso, as dependências da aplicação são:

- `axios` para requisições http;
- `joi` para validação de `schemas` e dados;
- `react-router-dom` para configuração de rotas;
- `md5` para codificar a senha dos usuários em hash;
- `socket.io-client` para comunicação instatânea entre back e front e múltiplos clientes;

No ambiente de desenvolvimento ainda são usadas as dependências:

- `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/jest-dom` e `puppeteer` para os testes;
- `eslint`, `eslint-config-trybe-frontend`, para configuração do ESLint
- `stylelint` para configuração do StyleLint

## Arquitetura

A aplicação está contida na pasta `/src` dentro da raiz do repositório, nela temos:

- `/components` arquivos com todos os componentes e suas estilizações;
- `/context` arquivos de configuração da ContextAPI;
- `/helpers` funções ou dados auxiliares
- `/images` arquivos de imagem;
- `/pages` arquivos das rotas da aplicação;
- `/routes` configuração de rotas da aplicação;
- `/services` arquivos de conexão com back-end e `localStorage`;
- `/tests` arquivos de testes de integração;

## Outros Scripts configurados na aplicação

* `npm run build` para buildar a aplicação React;
* `npm run test` para rodar todos os testes;
* `npm run test:coverage` para rodar todos os testes e gerar o relatório de cobertura na tela do terminal;
* `npm run test:coverage:json` para rodar todos os testes e gerar o relatório de cobertura em json, acessível na pasta `/coverage`;
* `npm run test:coverage:report` para rodar todos os testes e gerar o relatório de cobertura em html, acessível na pasta `/coverage/lcov-report/`;
* `npm run lint` para rodar o ESLint;
* `npm run lint:styles` para rodar o StyleLint;

## Deploy

Esta aplicação está rodando na plataforma do Vercel, usando a integração direta com o GitHub.

Esta acessível pelo endpoint `https://beersdelivery.vercel.app/`.

## Contato

Desenvolvido por Roberval Filho

Email: rslfilho@gmail.com

Github: https://github.com/rslfilho

LinkedIn: https://www.linkedin.com/in/rslfilho/

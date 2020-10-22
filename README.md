# CE Test - Web Server

## Running the server

Run `npm start` or `yarn start` to run the server on `http://localhost:3000/`. The server will **not** automatically reload if you change any of the source files.


## Inicializção do Arquivo

    Projeto inicia no http://localhost:3000/admin
    A Navegação é feita com <botões> e com um elemento <nav>.



#   O Desafio

    O projeto proposto consiste em elaborar uma funcionalidade de visualização de clientes e
    suas oportunidades disponíveis para cada um deles, podendo estas também serem
    alteradas. A ideia é que sejam implementados os seguintes itens:
    ● Front-end:
    ○ Uma listagem de clientes;
    ○ Uma tela de visualização de cliente, mostrando suas informações e também
    uma lista com suas oportunidades;
    ○ Uma interface de controle que permita alterar o status da oportunidade do
    cliente, cabendo ao candidato decidir o formato mais adequado.
    ● Back-end:
    ○ Uma API que implementa as chamadas necessárias para uso pelo front-end,
    utilizando obrigatoriamente as funções fornecidas para acesso e
    manipulação dos dados.


#   Especificações e dicas
    Para a realização do teste você receberá dois repositórios:
    
    ● Um projeto Angular iniciado e com modificações mínimas.

    ● A estrutura de uma API em Node.js usando Express, um arquivo JSON contendo os
    dados de exemplo simulando um banco NoSQL e uma biblioteca que realiza as
    operações de leitura e escrita nesse arquivo (getAll, getOne, set, update, delete).
    Nesse caso, o uso da API fornecida se faz obrigatório, porém o front-end pode ser
    implementado usando outro framework/biblioteca ou até mesmo de forma nativa, sendo o
    uso do projeto fornecido seja altamente recomendado. Todo o código deve estar
    organizado e comentado, atendendo aos padrões recomendados para as tecnologias
    adotadas.
    
    ● Restrições:
        ○ As funções de acesso e manipulação dos dados (arquivo functions.js na
        pasta database) no repositório do back-end, deverão permanecer
        inalteradas.
        ○ Qualquer biblioteca (seja de código, interface ou assets) pode ser utilizada,
        desde que seja pública, com permissão para uso ou de autoria do candidato.
        ○ A cópia de código, em parte ou totalmente, de testes realizados por outros
        candidatos acarretará na penalização do candidato.

#   introdução
    Apos o Recebimento do projeto no dia 13, notei que a ideia inicial era desenvolver em dois frameworks
    Angular: onde nunca desenvolvi
    Express: onde acredito ter uma facilidade maior
    Optei por seguir a opçao apontada em [Especificões e dicas] da possibilidade de desenvolver de forma nativa usando o mesmo projeto Express 
    
## Dependencias

Express

body-Parser

Morgan

handlebars


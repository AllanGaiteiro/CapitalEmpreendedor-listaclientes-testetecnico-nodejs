# CE Test - Web Server

projeto hospedado  no  link abaixo:

````
https://github.com/AllanGaiteiro/CE--Teste-Tecnico.git
````

## Inicializção do Arquivo

    * Execute o comando `npm start` ou `yarn start` no terminal da pasta do projeto

    * Abrir Navegador em http://localhost:3000/admin
    A Navegação é feita com <botões> e com um elemento <nav>.

    A rota `http://localhost:3000/` nao tem nada no momento  entao nao abra nela  



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
    
    Resumindo não usei angular pois não avia tempo de aprender, porem estou a disposição para aprender o angular 

    Visual: 
        
        Os Arquivos de Design inicial estão na pasta Design, eles sao a base do visual do site.

        Vale resaltar a base.

    Linguagen do Site: Inglês
        
        o arquivo fornecido estava com todos os itens em inglês então optei por dar continuidade.
    
    Tradutor
        Chrome: traduzindo a  pagina perfeitamente
        
        Mozila: presisa baixar extensão pra traduzir

        Edge: traduzindo a  pagina perfeitamente

    
    Acessibilidade:

        A leitura da pagina por aplicativos de audio:
            A leitura dos componentes esta quase perfeita.
    
        Navegação:
            A navegaçao via tab esta boa, o unico problema é que não esta lendo os valores da lista antes de ir para o botão

            Para uma pessoa sem visão ela fica sem acesso ao nome de cada cliente na lista


## Dependencias

Express

body-Parser

Morgan

handlebars

## Bugs

* Bugs 01: Deletar Oportunidades: logo depois de excluir uma oportunidade voce deve carregar a pagina do cliente mesmo se você tiver usando a opção voltar pagina

* Bugs 02: Deletar Usuario: Se voce voltar a pagina depois de excluir o usuario, vai mostra o usuario ainda

## futuras melhorias

* Implementação do responsivo

* Acrescentar mais opções de acessibilidade( apesar da movimentaçao do teclado ser bem agil )

* Implementação de teclas atalhos

* atualização para um html semantico

* Correção dos Bugs


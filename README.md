# adventure-web

O projeto tem como objetivo criar uma plataforma web intuitiva e envolvente que permite aos viajantes criar roteiros personalizados, explorar destinos incríveis e descobrir experiências únicas. Os usuários podem planejar suas viagens de acordo com seus gostos e interesses, tornando o processo mais fácil e divertido. Além disso, a plataforma oferece a oportunidade de descobrir destinos e experiências únicas que talvez não seriam encontrados de outra maneira. Em resumo, o projeto busca enriquecer a forma como as pessoas viajam, tornando o processo de planejamento e exploração mais personalizado e emocionante. Vale mencionar que o frontend da aplicação foi desenvolvido com Angular, enquanto o backend foi simulado por meio da implementação de uma API fictícia, utilizando o JSON Server.

## Endereço de Deploy - GitHub Pages

https://tgobmdev.github.io/adventure-web/

## Protótipo

https://www.figma.com/file/aGjosAFWlm40GUgbWsjoLH/mockup-adventure-web?type=design&node-id=0%3A1&mode=design&t=fj8Blo1kaQQwVYYe-1

## Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de framework CSS (Bootstrap, Materialize, PrimeNG).
- [x] Apresentar as telas com layout responsivo.
- [x] Desenvolver o layout da aplicação com componentes, tornando o cabeçalho e o rodapé componentes reutilizáveis.
- [x] Aplicar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [x] Validar os campos do formulário com expressões regulares (REGEX) e apresentar as mensagens de erro.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade usando uma API (JSON Server).
- [x] Aplicar a diretiva ngFor para apresentar uma lista dinâmica de dados.
- [x] Usar a diretiva ngIf para controlar a exibição ou ocultação de elementos.
- [x] Formatar a apresentação de dados com Pipes.
- [x] Build e deploy da aplicação.

## Manual de execução

- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- (Opcional) Instalar o JSON Server globalmente disponível em `https://www.npmjs.com/package/json-server`
  - Comando: `npm i -g json-server`
  - É opcional porque a dependência já vem cadastrada no arquivo `package.json` para instalação local na pasta `node_modules`
- Executar a API Fake (JSON Server) via um dos seguintes comandos:
  - Execução via script registrado no `package.json`: `npm run json:server`
  - Ou via Execução explícita: `json-server --watch db.json`
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s -o`

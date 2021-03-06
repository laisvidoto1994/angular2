# angular2


Exemplo com angular ->
https://www.youtube.com/watch?v=XxPjcMTZz5w&list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G&index=3

mostra as atualizações->
http://es6-features.org/#Constants

mostra componentes prontos do botstrap->
https://bootswatch.com/journal/

pre-requisitos:

baixar o nodejs para a maquina

npm install -g @angular/cli

npm install -g typescript	


 # Passos para executar o projeto

1º) abra o terminal, e execulte o seguinte comando abaixo:

#### npm install

2º) em seguida, execulte o comando abaixo:

#### ng serve


### Tela Principal

![image](https://github.com/laisvidoto1994/angular2/blob/master/imagens%20das%20telas/Loiane%20Groner/primeiro-projeto/tela%20inicial.PNG)

# Descrição de comandos

> angular cli  
### npm install -g @angular/cli

> Typescript   
### npm install -g typescript

> testar se esta com o angular cli instalado e ver á versão do angular e do node instalado  
### ng v

> comando de criação de um projeto  
### ng new projeto-projeto

> redirecione para á pasta do novo projeto criado  
### cd projeto-projeto

> para testar á aplicação  
### ng serve --open

> criação de componente  
### ng generate component meu-primeiro2

> Criação de modulos  
### ng generate module cursos 

> Criação de Serviços  
### ng generate service cursos 

> é á raiz do projeto  
### app.module.ts 

# Crud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

# Armazenamento de dados

Os dados foram armazenados locamente utilizando a [API JSON-SERVER](https://github.com/typicode/json-server).

# Framework CSS

Para estilizar as páginas foi utilizado o Framework [Bootswatch](https://bootswatch.com/).

# Instruções para rodar o projeto

Inicialmente é usar o comando:
#### npm i

Por fim deve utilizar o comando:
#### ng serve

# evento(hooks)

antes do ngOnInit e quando o valor property-binding é atualizado

#### ngOnChanges

quando componente é inicializado

#### ngOnInit


a cada ciclo de verificação de mudanças

##### ngDoCheck
 
 depois de inserir conteudo externo via view
 
 #### ngAfterContentInit
 
a cada verificação de conteudo inserido

#### ngAfterContentChecked


a cada veirificação de conteudo/conteudo filho

#### ngAfterViewChecked


antes da diretiva/component ser destruido

#### ngOnDestroy

 
# PrimeiroProjeto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

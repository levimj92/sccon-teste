# Teste para SCCON

Construído em Angular 11, CLI versão 11.0.1


## Como funciona?

Aplicação que busca dados de CEP com base no input do usuário e apresenta de maneira facil em uma tabela.


## Tecnologias

 * A aplicação utiliza Angular Material 11.0 para seus componentes de tabela, form, toolbar, sidenav, botões, etc.
 * Angular Flex Layout 11.0 utilizado para responsividade e layout das telas com flex box
 * SCSS como pré-processador CSS, emulando algumas classes helpers do Bootstrap 4
 * RXJS usado amplamente de maneira a otimizar a programacão reativa e funcional
 * Pattern de serviços e uma pequena gestão de estado foram escolhidos ao invés do padrão de comunicação entre pais e filhos
 * Lazy Loading nos módulos Home e CEP
 
 ## Instruções para execução
 
 1- Atualizar `@angular/cli` para a versão 11.0.x
 
 2- Dentro da pais do projeto executar `ng serve`

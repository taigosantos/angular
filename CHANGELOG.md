# CHANGELOG

## 0.7.0

- Substituição do framework UI `ng2-materialize` pelo framework oficial [Angular Material](https://material.angular.io)
- Adição dos scripts de configurações para publicação no serviço de hosting do [Firebase](https://firebase.google.com)

## 0.6.0

- Adição do módulo `SharedModule`, módulo reponsável por compartilhar components, modules, pipes, services e directives comuns entre os outros módulos
- Organização do Layout da aplicação
- Atualização nas variáveis de internationalization (i18n)

## 0.5.0

- Adição dos scripts personalizados no arquivo `package.json`
- Adição do suporte à biblioteca UI [ng2-materialize](https://sherweb.github.io/ng2-materialize)

## 0.4.0

- Adição dos arquivos de linguagem de exemplo: `src/locales/messages.en-US.xlf` e `src/locales/messages.pt-BR.xlf`
- Adição do suporte à internationalization (i18n)
- Adição do suporte à localization (l10n)

## 0.3.0

- Adição do suporte à rotas
- Criação dos módulos `commercial` e `core` como exemplos para a utilização do suporte à rotas
- Adição do suporte à `Lazy Loading`
- Criação dos módulos `commercial/products`, `core/dashboard`, `core/not-found`, `core/internal-error`
- Criação dos componentes de layout `core/page-layout` e `core/panel-layout`

## 0.2.0

- Adição do novo ambiente de desenvolvimento `Homologação (environment.stag.ts)`
- Adição e suporte à testes com diferentes ambientes `Devenvolvimento (dev)`, `Homologação (stag)` e `Produção (prod)`

## 0.1.0

- Criação do template básico utilizando `Angular CLI`
- Adição do suporte a estilos `SCSS`
- Estruturação dos estlos globais na pasta `/assets/styles`
- Adição de suporte à coleção de ícones `Font Awesome`
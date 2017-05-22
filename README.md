# Angular Application

Repositório com uma arquitetura completa base utilizando Angular a partir da versão 4+

## Funcionalidades Suportadas

Segue abaixo as funcionalidades suportadas pela aplicação:

| Funcionalidade                                            | Status        |
| :---------------------------------------------------------|:-------------:|
| Suporte à multi-ambiente (desenvolvimento e produção)     | Concluído     |
| Suporte a compiladores de estilo SCSS                     | Concluído     |
| Lazy-Loading                                              | Concluído     |
| AOT                                                       | Concluído     |
| Internationalization (i18n)                               | Desenvolvendo |
| Localization (l10n)                                       | Desenvolvendo |

## Considerações

### Aot

Para a utilização da complicação Ahead of Time (AoT), deve-se usar o comando: `ng build --prod --aot` ou `ng serve --prod --aot`

### Custom Environments

A aplicação possui um amiente de Homologação (Stage) que é representado pelo arquivo `environments/environment.stage.ts`
Para utilização dessa configuração deve-se usar o comando:

Para compilação ou dos arquivos em modo de **desenvolvimento**, sem minificação e utilizando as configurações do ambiente de homologação:
```
ng build -e stage
```

Para compilação dos arquivos em modo de **produção**, com minificação e utilizando as configurações do ambiente de homologação:

```
ng build --prod -e stage
```
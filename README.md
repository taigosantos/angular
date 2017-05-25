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

Para a utilização da compilação Ahead of Time (AoT), deve-se usar o comando: `ng build --prod --aot` ou `ng serve --prod --aot`

### Custom Environments

A aplicação possui um ambiente de Homologação (Staging) que é representado pelo arquivo `environments/environment.stag.ts`
Para utilização dessa configuração deve-se usar o comando:

Para compilação ou dos arquivos em modo de **desenvolvimento**, sem minificação e utilizando as configurações do ambiente de homologação:

```bash
ng build -e stag
```

Para compilação dos arquivos em modo de **produção**, com minificação e utilizando as configurações do ambiente de homologação:

```bash
ng build --prod -e stag
```

# Internationalization e Localization

Foi criado um arquivo `index.html` responsável por detectar a linguagem do browser e redirecionar o usuário para a aplicação de sua linguagem padrão.
O arquivo se encontra na pasta `samples/sample-index-detect-browser-language/index.html` e também possui uma versão minificada `index.min.html`.

Ao usar o arquivo `index.min.html`, renomear para `index.html` e coloca-lo na raiz do diretório de produção.

A ferramenta recomendada para editar os arquivos `XLIFF` é a [Virtaal](https://github.com/translate/virtaal)

# Hospedando a aplicação em servidores IIS

Copiar o arquivo `web.config` localizado em `samples/sample-iis-config-file/web.config` e colocar na raiz do diretório de produção.

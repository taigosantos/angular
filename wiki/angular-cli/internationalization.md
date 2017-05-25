# Internationalization (i18n)

O padrão de formato de arquivos de tradução utilizado será o `XLIFF (.xlf)` por ser mais completo e também ser o padrão de arquivos de tradução do Angular.

Os arquivos de linguagens são hospedados no caminho `./src/locales` e o comando para gerar ou atualizar os arquivos de linguagem é:

## Comando Angular CLI

```bash
ng xi18n --output-path src/locales
```

Testando a aplicação em **pt-BR**:

```bash
ng serve --aot --i18n-file=src/locales/messages.pt-BR.xlf --locale=pt-BR
```

Gerando a versão de produção em **pt-BR**:

```bash
ng build --output-path=dist/pt-br --aot -prod --bh /pt-br/ --i18n-file=src/locales/messages.pt-BR.xlf --locale=pt-BR
```

Gerando a versão de produção em **en-US**:

```bash
ng build --output-path=dist/en-us --aot -prod --bh /en-us/ --i18n-file=src/locales/messages.en-US.xlf --locale=en-US
```

## Detectando a Linguagem do Browser

Foi criado um arquivo `index.html` responsável por detectar a linguagem do browser e redirecionar o usuário para a aplicação de sua linguagem padrão.
O arquivo se encontra na pasta `samples/sample-index-detect-browser-language/index.html` e também possui uma versão minificada `index.min.html`.

Ao usar o arquivo `index.min.html`, renomear para `index.html` e coloca-lo na raiz do diretório de produção.

## Editor XLIFF

A ferramenta recomendada para editar os arquivos `XLIFF` é a [Virtaal](https://github.com/translate/virtaal)
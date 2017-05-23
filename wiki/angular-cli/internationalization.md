# Internationalization (i18n)

O padrão de formato de arquivos de tradução utilizado será o `XLIFF (.xlf)` por ser mais completo e também ser o padrão de arquivos de tradução do Angular.

Os arquivos de linguagens são hospedados no caminho `./src/locales` e o comando para gerar ou atualizar os arquivos de linguagem é:

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
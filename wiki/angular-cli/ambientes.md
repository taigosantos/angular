# Ambientes de Desenvolvimento

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
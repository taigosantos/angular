# Publicando no Firebase

1 - Usar o comando para instalar o firebase globalmente:

```bash
npm install -g firebase-tools
```

2 - Utilizar o comando para efetuar login na sua conta do firebase:

```bash
firebase login
```

3 - Utilizar o comando abaixo e seguir o wizard do firebase CLI:

```bash
firebase init
```

4 - Utilizar as seguintes configurações para *URL Rewrite* no arquivo de configuração do `firebase.json`:

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "/pt-br/**",
        "destination": "/pt-br/index.html"
      },
      {
        "source": "/en-us/**",
        "destination": "/en-us/index.html"
      }
    ]
  }
}
```

5 - Compilar a aplicação, criar o pacote de distribuição e utilizar o seguinte comando para publicar a aplicação:

```bash
firebase deploy
```
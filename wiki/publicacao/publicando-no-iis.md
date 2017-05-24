# Publicando no Servidor IIS

Para configurar o servidor IIS para rodar a aplicação em Angular, deve-se executar os seguintes passos:

1. Instalar o módulo **Microsoft URL Rewrite Module** no servidor.
1. Criar um arquivo **web.config** com as seguintes configurações de regras:

```xml
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="AngularJS" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```
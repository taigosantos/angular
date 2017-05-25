# Publicando no Servidor IIS

Para configurar o servidor IIS para rodar a aplicação em Angular, deve-se executar os seguintes passos:

1 - Instalar o módulo **Microsoft URL Rewrite Module** no servidor.

2 - Criar um arquivo **web.config** com as seguintes configurações de regras:

```xml
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Angular" stopProcessing="true">
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

3 - Caso esteja usando a opção de aplicação multi-linguagem, as regras precisam ser divididas para cada linguagem:

```xml
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="AngularPtBR" stopProcessing="true">
          <match url="^pt-br/*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/pt-br/" />
        </rule>
        <rule name="AngularEnUS" stopProcessing="true">
          <match url="^en-us/*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/en-us/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

## Bonus

Para facilitar, pode copiar o arquivo pronto `web.config` ou `web.multi-language.config` (renomear este para web.config) ambos localizados no diretório `samples/sample-iis-config-file/` e colocar na raiz do diretório de produção.

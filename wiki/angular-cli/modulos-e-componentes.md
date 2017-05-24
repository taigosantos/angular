# Exemplos Para Criação de Módulos e Componentes

## Modules

Exemplo 1: Criando um módulo de *products* dentro do módulo *commercial* com um arquivo de routing:

```bash
ng g m commercial/products --routing
```

## Componentes

Exemplo 1: criando um módulo *products-list* dentro do módulo *products*:

```bash
ng g c commercial/products/products-list -m commercial/products/products.module.ts
```

Exemplo 2: criando um módulo *products-form* dentro do módulo *products*:

```bash
ng g c commercial/products/products-form -m commercial/products/products.module.ts
```
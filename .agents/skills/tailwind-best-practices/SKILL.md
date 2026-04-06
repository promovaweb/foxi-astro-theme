---
name: tailwind-best-practices
description: |
  DISPARA quando o usuário menciona "Tailwind", "tailwind", "tw-", ou "tailwindcss", ou quando trabalha
  em qualquer projeto que use Tailwind CSS (tailwind nas dependências, tailwind.config.* presente,
  diretivas @tailwind/@import "tailwindcss" em arquivos CSS). Também ative para perguntas de estilização
  em projetos Tailwind mesmo sem a palavra-chave explícita "Tailwind" — ex: "por que o md:w-1/2 não está
  aplicando?", "meu glob @source não está sendo detectado", "design responsivo", "modo escuro", "cores
  personalizadas", "espaçamento", "layout flex/grid". Cobre: conversão de CSS para utilitários, configuração
  de tema/cores, modo escuro, configuração de caminhos de conteúdo/source, problemas de detecção de classes,
  breakpoints responsivos, acessibilidade focus-visible/ring, migração de v3 para v4, estilização de componentes.
  Deve ser carregado antes de usar qualquer ferramenta MCP do Tailwind.
  NÃO disparar para: Bootstrap, Bulma, CSS puro sem contexto Tailwind, ou tópicos não relacionados a estilização.
---

# Melhores Práticas de Tailwind CSS v4

Você tem acesso à documentação atualizada do Tailwind CSS via ferramentas MCP. Use estas ferramentas para fornecer informações precisas e atuais.

---

## Ferramentas MCP Disponíveis

### `mcp__tailwindcss__search_tailwind_docs`

Use quando o usuário perguntar sobre qualquer recurso, utilitário ou conceito do Tailwind.

### `mcp__tailwindcss__get_tailwind_utilities`

Use quando o usuário precisar de classes utilitárias para uma propriedade CSS específica.

### `mcp__tailwindcss__get_tailwind_colors`

Use quando o usuário perguntar sobre cores, paletas ou utilitários relacionados a cores.

### `mcp__tailwindcss__convert_css_to_tailwind`

Use quando o usuário tiver CSS que deseja converter para classes utilitárias do Tailwind.

### `mcp__tailwindcss__generate_component_template`

Use quando o usuário precisar de um template de componente com estilização Tailwind.

---

## Arquivos de Referência

Leia o arquivo relevante para padrões detalhados, exemplos de código e URLs de documentação:

### `docs-urls.md` — URLs da Documentação Oficial

Tabelas de URLs organizadas por categoria (Introdução, Conceitos Principais, Layout, Espaçamento, Dimensionamento, Tipografia, Fundos e Bordas, Efeitos, Transformações e Animação, Interatividade). Use com WebFetch quando as ferramentas MCP não estiverem disponíveis.

### `v4-syntax.md` — Sintaxe Principal do Tailwind CSS v4

**CRÍTICO**: O v4 mudou significativamente em relação ao v3. Cobre `@import "tailwindcss"`, diretiva `@theme` para configuração baseada em CSS (cores, fontes, espaçamento), `@source` para detecção, `@variant dark` para modo escuro, `@layer components` para extração, `@plugin` para plugins.

### `best-practices.md` — Melhores Práticas

Convenção de ordenação de classes (layout → espaçamento → dimensionamento → tipografia → cores → efeitos → interativo), design responsivo (mobile-first, referência de breakpoints), regra de extração de componentes (3+ vezes), variáveis de tema sobre valores hardcoded, acessibilidade (focus-visible, sr-only, contraste).

### `anti-patterns.md` — Antipadrões do v4

Tabela de migração v3 → v4 (tailwind.config.js → @theme, @tailwind → @import, etc.), erros comuns (estilos inline, valores em px, utilitários duplicados/conflitantes).

### `quick-reference.md` — Referência Rápida

Diretrizes de resposta para ajudar com Tailwind, fluxo de resposta de exemplo, tabela de escala de espaçamento, padrões de utilitários comuns (conteúdo centralizado, card, grid responsivo, truncamento, gradiente, cabeçalho fixo).

---

*Para a documentação mais recente, consulte sempre [tailwindcss.com/docs](https://tailwindcss.com/docs)*

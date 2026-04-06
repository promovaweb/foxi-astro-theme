---
name: astro-rules
description: Guia de arquitetura, hidratação e regras do Astro 4+. Use obrigatoriamente para todo e qualquer desenvolvimento de componente (.astro) ou página inteira.
---

# Astro Rules Skill

Esta skill assegura a conformidade de novos componentes, integrações e rotas com as melhores práticas do framework Astro no **Foxi Astro Theme**.

## Fluxo Obrigatório

### 1. Leitura de Referência

Sempre leia o conteúdo do arquivo `ASTRO.md` localizado na raiz do projeto. Ele é o guia consolidado de práticas avançadas do Astro.

### 2. Regras de Hidratação

- **Zero-JS Padrão**: Não adicione JS interativo no cliente a menos que seja solicitado ou necessário.
- **Diretivas Estritas**: Se usar framework client-side, escolha a menor diretiva possível (ex: `client:visible` para conteúdos abaixo da dobra, `client:load` para componentes críticos no carregamento).
- **Server Islands**: Para dados dinâmicos pesados no servidor (carrinho, perfil de usuário), use `server:defer`.

### 3. Gestão de Estado e Ciclo de Vida

- **Nano Stores**: O gerenciamento de estado entre diferentes componentes ou "ilhas" na página DEVE usar Nano Stores.
- **Roteador no Cliente (`<ClientRouter />`)**:
  - Evite usar `DOMContentLoaded` pois a página não recarrega tradicionalmente.
  - Use `document.addEventListener('astro:page-load', () => {})` para inicializar ou reinicializar scripts Vanilla.
  - Para persistência de componentes interativos (como players de áudio/vídeo) durante a navegação, use `transition:persist`.

### 4. Busca de Dados e Endpoints

- **Astro Actions**: Prefira criar e enviar dados via *Actions* (`astro:actions`) em vez de criar endpoints HTTP manuais em `src/pages/api`.
- **Zod**: Toda e qualquer *Content Collection* (seja local ou remota via *loader* na Content Layer API) deve usar validação estrita com esquemas Zod.

### 5. Paginação e i18n

- **i18n**: Utilize a configuração nativa e pastas separadas dentro de `src/content/` para organizar dados de múltiplos idiomas, filtrando com `Astro.currentLocale`.
- **Paginação**: Sempre utilize a função nativa `paginate()` no retorno de `getStaticPaths()` para rotas dinâmicas SSG. Nunca aplique `slice()` manual em arrays maciços no frontmatter.

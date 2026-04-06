---
name: ui-component
description: Guia para criação ou uso de componentes UI/UX seguindo o Design System. Use obrigatoriamente para TODO e QUALQUER trabalho com UI, novos componentes, páginas ou modificação de interface.
---

# UI Component Skill

Esta skill garante que todo componente ou alteração de interface no **Foxi Astro Theme** siga rigorosamente o `DESIGN.md` e os padrões estabelecidos no codebase.

## Fluxo de Trabalho Obrigatório

### 1. Pesquisa e Varredura
Antes de escrever qualquer código:
- Leia o arquivo `DESIGN.md` na raiz do projeto.
- **Consulte o Inventário**: Leia [references/components.md](references/components.md) para ver a lista de componentes disponíveis.
- **Varra o diretório `src/components/`**: Use ferramentas de busca (`glob` ou `list_directory`) para encontrar componentes similares e entender o padrão de implementação.

### 2. Decisão: Reuso vs. Criação
- **Reuso**: Se um componente existente puder ser usado ou estendido via props, prefira esta abordagem. Não reinvente a roda.
- **Criação**: Se for necessário um novo componente, siga rigorosamente os padrões encontrados nos componentes de `src/components/ui/`.

### 3. Checklist de Criação (Obrigatório)
Ao criar um novo componente `.astro`:
- [ ] **Cabeçalho**: Inicie com um bloco de comentário descrevendo o componente e suas props.
- [ ] **TypeScript**: Defina `type Props = { ... }` e use JSDoc em cada propriedade.
- [ ] **HTML**: Use tags semânticas e classes padrão BEM (`.block__element--modifier`).
- [ ] **Estilo**: Use bloco `<style>` com `@apply`. Variáveis CSS semânticas (`--accent`, etc.) do `src/styles/global.css` são obrigatórias.
- [ ] **Dark Mode**: Garanta suporte total usando variantes `dark:` ou variáveis semânticas.
- [ ] **Imagens**: Use o componente `<Image />` do Astro para ativos locais.
- [ ] **Aliases**: Use `@components/`, `@layouts/`, `@config/`, `@type/`, etc.

### 4. Registro do Novo Componente (Obrigatório)
Sempre que criar um novo componente:
- **Você DEVE adicionar o novo componente ao arquivo [references/components.md](references/components.md)** na categoria correspondente, incluindo uma breve descrição.
- Se for um componente de bloco reutilizável, mencione-o também no `DESIGN.md`.

## Referência de Pastas
- `src/components/ui/`: Componentes atômicos e primitivos.
- `src/components/blocks/`: Seções e blocos de página complexos.
- `src/components/ui/cards/`: Padrões de cards.
- `src/components/ui/forms/`: Elementos de formulário.
- `src/components/ui/slides/`: Sliders e carrosséis.
- `src/components/ui/podcast/`: UI específica para podcast.
- `src/components/ui/blog/`: UI específica para blog.
- `src/components/ui/pricing-tables/`: Tabelas de preço.

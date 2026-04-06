---
name: ui-component
description: Guia para criação ou uso de componentes UI/UX seguindo o Design System. Use sempre que for solicitado a criação de novos componentes, páginas ou modificação de interface.
---

# UI Component Skill

Esta skill garante que todo componente ou alteração de interface no **Foxi Astro Theme** siga rigorosamente o `DESIGN.md` e os padrões estabelecidos no codebase.

## Fluxo de Trabalho

### 1. Pesquisa e Varredura
Antes de escrever qualquer código:
- Leia o arquivo `DESIGN.md` na raiz do projeto.
- **Varra o diretório `src/components/`**: Use ferramentas de busca (`glob` ou `list_directory`) para encontrar componentes similares.
- Todos os arquivos existentes são referências de padrão de código, uso de slots e estilização.

### 2. Decisão: Reuso vs. Criação
- **Reuso**: Se um componente existente puder ser usado ou estendido via props, prefira esta abordagem. Não reinvente a roda.
- **Criação**: Se for necessário um novo componente, siga rigorosamente os padrões encontrados nos componentes de `src/components/ui/`.

### 3. Checklist de Criação (Obrigatório)
Ao criar um novo componente `.astro`:
- [ ] **Cabeçalho**: Inicie com um bloco de comentário descrevendo o componente e suas props.
- [ ] **TypeScript**: Defina `type Props = { ... }` e use JSDoc em cada propriedade.
- [ ] **HTML**: Use tags semânticas e classes padrão BEM (`.block__element--modifier`).
- [ ] **Estilo**: Use bloco `<style>` com `@apply`. Variáveis CSS semânticas (`--accent`, etc.) são obrigatórias.
- [ ] **Dark Mode**: Garanta suporte total usando variantes `dark:` ou variáveis semânticas.
- [ ] **Imagens**: Use o componente `<Image />` do Astro para ativos locais.
- [ ] **Aliases**: Use `@components/`, `@layouts/`, `@config/`, `@type/`, etc.

### 4. Atualização da Documentação
Se criar um componente de bloco reutilizável, mencione-o no `DESIGN.md` se necessário para futura referência.

## Referência de Pastas
- `src/components/ui/`: Componentes atômicos e primitivos.
- `src/components/blocks/`: Seções e blocos de página complexos.
- `src/components/ui/cards/`: Padrões de cards.
- `src/components/ui/forms/`: Elementos de formulário.

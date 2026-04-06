---
name: ui-component
description: Guia para criação ou uso de componentes UI/UX seguindo o Design System. Use obrigatoriamente para TODO e QUALQUER trabalho com UI, novos componentes, páginas ou modificação de interface.
---

# UI Component Skill

> Esta skill garante que todo componente ou alteração de interface no Foxi Astro Theme siga rigorosamente o DESIGN.md e o inventário em UI-COMPONENTS.md.

---

## Fluxo de Trabalho Obrigatório

### 1. Pesquisa e Varredura

Antes de escrever qualquer código:

- Leia o arquivo `DESIGN.md` na raiz do projeto.
- **Consulte o Inventário**: Leia `UI-COMPONENTS.md` na raiz do projeto.
- **Varra o diretório `src/components/`**: Encontre componentes similares para entender o padrão de implementação.

---

### 2. Decisão: Reuso vs. Criação

- **Reuso**: Se um componente existente puder ser usado ou estendido via props, prefira esta abordagem.
- **Criação**: Se for necessário um novo componente, siga rigorosamente os padrões de `UI-COMPONENTS.md`.

---

### 3. Checklist de Criação (Obrigatório)

Ao criar um novo componente `.astro`:

- [ ] **Cabeçalho**: Inicie com um bloco de comentário descrevendo o componente e suas props.
- [ ] **TypeScript**: Defina `type Props = { ... }` e use JSDoc em cada propriedade.
- [ ] **HTML**: Use tags semânticas e classes padrão BEM.
- [ ] **Estilo**: Use bloco `<style>` com `@apply`. Use as variáveis semânticas do `global.css`.
- [ ] **Dark Mode**: Garanta suporte total.
- [ ] **Imagens**: Use o componente `<Image />` do Astro.
- [ ] **Aliases**: Use `@components/`, `@layouts/`, `@config/`, `@type/`, etc.

---

### 4. Registro do Novo Componente (Obrigatório)

Sempre que criar um novo componente:

- **Você DEVE adicionar o novo componente ao arquivo UI-COMPONENTS.md** na categoria correspondente.
- Se for um componente de bloco reutilizável, mencione-o também no `DESIGN.md`.

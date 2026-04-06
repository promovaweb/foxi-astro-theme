---
name: ui-component
description: Guia para criação ou uso de componentes UI/UX seguindo o Design System. Use sempre que for solicitado a criação de novos componentes, páginas ou modificação de interface.
---

# UI Component Skill

Esta skill garante que todo componente ou alteração de interface no **Foxi Astro Theme** siga rigorosamente o `DESIGN.md`.

## Fluxo de Trabalho

### 1. Pesquisa e Consulta
Antes de escrever qualquer código, leia o arquivo `DESIGN.md` na raiz do projeto. Identifique:
- Se já existe um componente que atende à solicitação.
- Quais tokens de cor, tipografia e espaçamento devem ser usados.
- Quais as convenções de nomenclatura (BEM) e estruturação (Scoped Styles).

### 2. Decisão: Reuso vs. Criação
- **Reuso**: Se um componente existente (ex: `<Button>`, `<Section>`, `<Feature>`) puder ser usado ou estendido via props, prefira esta abordagem.
- **Criação**: Se for necessário um novo componente, siga o **Checklist de Criação** abaixo.

### 3. Checklist de Criação (Obrigatório)
Ao criar um novo componente `.astro`:
- [ ] Inicie com um bloco de comentário descrevendo o componente e suas props.
- [ ] Tipagem TypeScript: Defina `type Props = { ... }`.
- [ ] Estrutura HTML: Use tags semânticas e classes padrão BEM.
- [ ] Estilização: Use bloco `<style>` com `@apply` e utilitários Tailwind.
- [ ] Variáveis CSS: Use os tokens semânticos (`--accent`, `--text-body`, etc.) do `global.css`.
- [ ] Dark Mode: Garanta suporte total ao modo escuro.
- [ ] Aliases: Use `@components/`, `@layouts/`, `@config/`, `@type/`, etc. nos imports.

### 4. Atualização da Documentação
Sempre que criar um novo componente reutilizável ou alterar significativamente um existente, **você deve atualizar o DESIGN.md** na seção correspondente para incluir a nova referência.

## Referência Rápida
- **Cores**: `src/styles/global.css` (Tokens RGB).
- **Tipagem**: `src/types/config.ts` e `TYPESCRIPT.md`.
- **Configurações**: `src/config/`.

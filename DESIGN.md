# Foxi — Design System

> Este documento é a fonte única de verdade para a linguagem visual e a arquitetura de componentes do **Foxi Astro Theme**. Todo novo componente, página ou bloco criado neste projeto deve seguir as regras e convenções aqui descritas.

---

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | Astro 6 |
| Estilização | Tailwind CSS 3 (utility-first) |
| Arquitetura CSS | Variáveis CSS (RGB) configuráveis via `src/styles/global.css` |
| Ícones | `astro-icon` (sprites SVG em `src/icons/`) |
| Imagens | Astro `<Image>` + `sharp` |
| Tipografia (corpo) | Inter Variable (`@fontsource-variable/inter`) |
| Tipografia (títulos) | Outfit Variable (`@fontsource-variable/outfit`) |
| Modo escuro | Estratégia `selector` do Tailwind (classe `.dark` no `<html>`) |

---

## Configuração Centralizada (`src/styles/global.css`)

Todo o design system é controlado através do arquivo `src/styles/global.css`. Este arquivo define as variáveis de cores no formato de canais RGB, permitindo que o Tailwind aplique modificadores de opacidade (ex: `bg-primary-500/50`).

### Sincronização Obrigatória

Qualquer alteração estrutural em `src/styles/global.css` **DEVE** ser documentada neste arquivo para manter a consistência entre o código e o manual de design.

---

## Estrutura de Componentes como Referência

**Todos os arquivos em `src/components/` são referências canônicas de implementação.** Antes de criar um novo componente, explore as pastas abaixo para entender padrões de código, slots e estilos:

- `src/components/ui/`: Primitivos de interface (Botões, inputs, modais, seções, colunas).
- `src/components/blocks/`: Seções complexas e blocos de página (Heros, Features, Pricing, CTA).
- `src/components/ui/cards/`: Padrões de cards reutilizáveis.
- `src/components/ui/forms/`: Elementos e estruturas de formulário.

> **Importante:** Para decisões arquiteturais sobre a construção dos componentes, diretivas de hidratação (Astro Islands), gerenciamento de estado no cliente (ex: Nano Stores) ou resolução de problemas técnicos do framework, sempre consulte a referência obrigatória **[ASTRO.md](./ASTRO.md)**.

---

## Paleta de Cores (Tokens RGB)

### Primárias (Marca)

- `--primary-50` até `--primary-950`
- Exemplo: `--primary-500: 226 24 125`

### Neutras (Cinzas)

- `--neutral-50` até `--neutral-950`
- Exemplo: `--neutral-500: 100 116 139`

### Tokens Semânticos (Claro/Escuro)

Estes tokens são redefinidos automaticamente via classe `.dark` no `<html>`:

| Contexto | Variável CSS | Uso |
| --- | --- | --- |
| Fundo da página | `--bg-page` | `background-color` principal do body |
| Texto de corpo | `--text-body` | Cor de texto padrão para parágrafos e UI |
| Texto de título | `--text-heading` | Cor para H1-H6 e elementos de destaque |
| Destaque/Marca | `--accent` | Cor da marca aplicada a links, ícones e bordas |
| Borda / divisor | `--border-color` | Cor para bordas de tabelas, cards e divisores |

---

## Tipografia e Estilos Base

### Escala Tipográfica (Mobile / Desktop)

- **H1**: `text-4xl` / `text-6xl` (`font-bold`)
- **H2**: `text-3xl` / `text-5xl` (`font-bold`)
- **H3**: `text-2xl` / `text-3xl` (`font-bold`)
- **H4-H6**: Variantes de `text-xl` a `text-base` com `font-semibold`.
- **Corpo**: `text-base` / `text-base` (`font-normal`)

### Regras de Elementos Base

- **Body**: Usa `--bg-page` e `--text-body`. Ativa `antialiased` e `scroll-smooth`.
- **Headings**: Usam `--text-heading` e `font-headings`.
- **Strong**: Dentro de títulos, usa `--accent` sem aumentar o peso da fonte.
- **Links**: Em `main`, usam `--accent` com hover de opacidade 80%.

---

## Utilitários de Texto Rico (`.basic-text`)

A classe `.basic-text` é usada para estilizar conteúdo Markdown ou vindo de CMS.

- **Parágrafos**: Margem inferior `mb-8`, leading `1.8`.
- **Blockquotes**: Borda lateral `--accent` de 4px, padding lateral `pl-10`, texto em itálico e cor `--text-heading`.
- **Listas (UL/OL)**: Marcadores na cor `--accent`.
- **Imagens**: Bordas arredondadas `rounded-3xl` e sombra `shadow-lg`.
- **Tabelas**: Bordas arredondadas `rounded-2xl`, borda `--border-color`, listras zebra em linhas pares.
- **Código**:
  - Inline: Fundo claro/escuro com texto na cor `--accent`.
  - Blocos (`pre`): Fundo `neutral-900`, texto claro, scroll horizontal.

---

## Espaçamento e Layout

### Sistema de Grid (12 Colunas)

Use sempre os primitivos `<Section>`, `<Row>` e `<Col>` para manter a consistência de grid e padding.

| Breakpoint | Colunas | Componentes |
| --- | --- | --- |
| Mobile | 4 | `<Col spanMobile="4">` |
| Tablet | 8 | `<Col spanMobile="8">` |
| Desktop | 12 | `<Col span="12">` |

### Tokens de Espaçamento Configuráveis

- `--container-px`: Padding lateral do container (padrão: `1.5rem`).
- `--section-py`: Padding vertical mobile (padrão: `3rem`).
- `--section-py-lg`: Padding vertical desktop (padrão: `6rem`).

---

## Funcionalidades Especiais de CSS

### Animações de Scroll

- Classe `.scroll-animation`: Quando ativa no `<html>`, aplica `translate-y-4` e `opacity-0` às colunas.
- Transição escalonada (staggered delay) de 50ms a 875ms para os primeiros 12 filhos.

### Copiar Código

- `.code-wrapper`: Contêiner relativo para blocos de código.
- `.copy-button`: Botão flutuante que aparece ao hover, com feedback visual `.copied`.

---

## Convenções de Implementação (Obrigatório)

1. **BEM Naming**: Classes CSS seguem `.block`, `.block__element`, `.block--modifier`.
2. **Scoped Styles**: Use blocos `<style>` com `@apply`. Evite estilos inline.
3. **Dark Mode**: Todo elemento deve ter variantes `dark:` ou usar variáveis semânticas.
4. **Component Header**: Todo componente deve iniciar com um bloco de comentário descrevendo props e finalidade.
5. **Typescript**: Props devem ser tipadas com `type Props = {}`.
6. **Astro Image**: Use sempre `<Image />` para ativos locais.
7. **Aliases**: Sempre use `@components/`, `@layouts/`, `@config/`, `@type/`, etc.
8. **Documentação JSDoc**: Documente cada prop e estrutura conforme `TYPESCRIPT.md`.

---

## Empty States e Fallbacks

Todos os componentes que consomem dados dinâmicos (listas, posts, feeds) devem prever estados de fallback:

1. **Empty States**: Se a lista estiver vazia, exiba uma mensagem amigável. Padrão: `Não há [itens] disponíveis no momento.`
2. **Fallbacks de Imagem**: Use imagens de placeholder se o ativo original falhar.
3. **Skeleton Screens**: Para carregamentos complexos, mantenha a estrutura do layout.

---

## Sincronização DESIGN.md / global.css

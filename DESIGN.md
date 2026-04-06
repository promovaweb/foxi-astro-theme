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

## Configuração Centralizada

Todo o design system é controlado através do arquivo `src/styles/global.css`. As cores e fontes são definidas como variáveis CSS no formato de canais RGB para suportar modificadores de opacidade do Tailwind (ex: `bg-primary-500/50`).

---

## Paleta de Cores

As cores são mapeadas no `tailwind.config.mjs` a partir das variáveis do `global.css`.

### Primária (Cor da Marca)

| Token | Variável CSS | Uso |
| --- | --- | --- |
| `primary-50` | `--primary-50` | Fundos muito claros, tingimentos sutis |
| `primary-500` | `--primary-500` | **Cor da marca — CTA principal, destaques, links, ícones** |
| `primary-600` | `--primary-600` | Estados de hover em ações primárias |

### Neutra (Escala de Cinzas)

| Token | Variável CSS | Uso |
| --- | --- | --- |
| `neutral-50` | `--neutral-50` | Fundos de página (claro), divisores sutis |
| `neutral-500` | `--neutral-500` | Texto de corpo padrão (modo claro) |
| `neutral-950` | `--neutral-950` | **Fundo de página (modo escuro)** |

### Tokens Semânticos

O projeto utiliza tokens que se adaptam automaticamente ao tema (Claro/Escuro):

| Contexto | Variável CSS | Valor (Claro) | Valor (Escuro) |
| --- | --- | --- | --- |
| Fundo da página | `--bg-page` | `white` | `neutral-950` |
| Texto de corpo | `--text-body` | `neutral-500` | `neutral-400` |
| Texto de título | `--text-heading` | `neutral-700` | `neutral-50` |
| Destaque/Marca | `--accent` | `primary-500` | `primary-500` |
| Borda / divisor | `--border-color` | `neutral-100` | `neutral-800` |

---

## Tipografia

### Famílias de fontes (Variáveis CSS)

```css
--font-sans: "Inter Variable", sans-serif;
--font-headings: "Outfit Variable", sans-serif;
```

### Escala Tipográfica

| Elemento | Mobile | Desktop | Peso |
| --- | --- | --- | --- |
| `h1` | `text-4xl` | `text-6xl` | `font-bold` |
| `h2` | `text-3xl` | `text-5xl` | `font-bold` |
| `h3` | `text-2xl` | `text-3xl` | `font-bold` |
| `h4` | `text-xl` | `text-2xl` | `font-semibold` |
| Corpo (`p`) | `text-base` | `text-base` | `font-normal` |

**Regra:** `<strong>` dentro de títulos renderiza na cor `--accent` (`text-primary-500`), sem negrito extra.

---

## Espaçamento e Layout

### Sistema de Grid

O layout utiliza um **grid CSS de 12 colunas** construído com os componentes `Row` + `Col`.

| Breakpoint | Colunas |
| --- | --- |
| Mobile (`< md`) | 4 colunas |
| Tablet (`md`) | 8 colunas |
| Desktop (`lg+`) | 12 colunas |

### Tokens de Espaçamento (Configuráveis)

| Variável CSS | Token Tailwind | Uso |
| --- | --- | --- |
| `--container-px` | `spacing-container-px` | Padding lateral do container |
| `--section-py` | `spacing-section-py` | Padding vertical de seções (Mobile) |
| `--section-py-lg` | `spacing-section-py-lg` | Padding vertical de seções (Desktop) |

---

## Componentes

### Primitivos de Layout

#### `<Section>` — `src/components/ui/Section.astro`
Seção de página de nível superior. Envolve o conteúdo em um `<section>` com um `.container`.

#### `<Row>` — `src/components/ui/Row.astro`
Linha do grid de 12 colunas. Filhos devem ser `<Col>`.

#### `<Col>` — `src/components/ui/Col.astro`
Coluna dentro de um `<Row>`. Usa utilitários `col-span-*`.

---

### Componentes Interativos

#### `<Button>` — `src/components/ui/Button.astro`
Estilos: `primary`, `secondary`, `neutral`, `white`. Variações: `outline`, `link`.

#### `<Accordion>` — `src/components/ui/Accordion.astro`
Widget expansível usando `<details>`.

#### `<Modal>` — `src/components/ui/Modal.astro`
Diálogo de sobreposição em tela cheia.

---

### Componentes de Exibição

- `<Badge>`: Etiqueta inline.
- `<Feature>`: Ícone + Título + Texto.
- `<Testimonial>`: Depoimento com avatar e rating.
- `<Card>`: Variantes `BasicCard`, `FeatureCard`, `BlogCard`.
- `<Rating>`: Avaliação por estrelas (0-5).

---

## Convenções de Implementação (Obrigatório)

1. **BEM Naming**: Classes CSS seguem `.block`, `.block__element`, `.block--modifier`.
2. **Scoped Styles**: Use blocos `<style>` com `@apply`. Evite estilos inline.
3. **Dark Mode**: Todo elemento deve ter variantes `dark:` ou usar variáveis semânticas.
4. **Component Header**: Todo componente deve iniciar com um bloco de comentário descrevendo props e finalidade.
5. **Typescript**: Props devem ser tipadas com `type Props = {}`.
6. **Aliases**: Sempre use `@components/`, `@layouts/`, `@config/`, `@type/`, etc.

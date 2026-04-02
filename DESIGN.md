# Foxi — Design System

Este documento é a fonte única de verdade para a linguagem visual e a arquitetura de componentes do **Foxi Astro Theme**. Todo novo componente, página ou bloco criado neste projeto deve seguir as regras e convenções aqui descritas.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Astro 6 |
| Estilização | Tailwind CSS 3 (utility-first) |
| Ícones | `astro-icon` (sprites SVG em `src/icons/`) |
| Imagens | Astro `<Image>` + `sharp` |
| Tipografia (corpo) | Inter Variable (`@fontsource-variable/inter`) |
| Tipografia (títulos) | Outfit Variable (`@fontsource-variable/outfit`) |
| Modo escuro | Estratégia `selector` do Tailwind (classe `.dark` no `<html>`) |

---

## Paleta de Cores

Definida em `tailwind.config.mjs` → `theme.extend.colors`.

### Primária (cor da marca — Rosa/Magenta)

| Token | Hex | Uso |
|---|---|---|
| `primary-50` | `#fdf2f8` | Fundos muito claros, tingimentos sutis |
| `primary-100` | `#fce7f3` | Fundo de hover em botões secundários |
| `primary-200` | `#fbcfe8` | Estados desabilitados |
| `primary-300` | `#f9a8d4` | Acentos claros |
| `primary-400` | `#f472b6` | Tons intermediários |
| `primary-500` | `#E2187D` | **Cor da marca — CTA principal, destaques, links, ícones** |
| `primary-600` | `#db2777` | Estados de hover em ações primárias |
| `primary-700` | `#be185d` | Estados de foco, estados pressionados |
| `primary-800` | `#9d174d` | Acentos profundos |
| `primary-900` | `#831843` | Tons muito escuros |
| `primary-950` | `#500724` | Tingimento mais escuro |

### Neutra (escala baseada em Slate)

| Token | Hex | Uso |
|---|---|---|
| `neutral-50` | `#f8fafc` | Fundos de página (claro), divisores sutis |
| `neutral-100` | `#f1f5f9` | Bordas de card, fundos de seção |
| `neutral-200` | `#e2e8f0` | Bordas, divisores |
| `neutral-300` | `#cbd5e1` | Texto de placeholder |
| `neutral-400` | `#94a3b8` | Texto silenciado, rótulos pequenos |
| `neutral-500` | `#64748b` | **Texto de corpo padrão (modo claro)** |
| `neutral-600` | `#475569` | Texto de corpo ligeiramente mais escuro |
| `neutral-700` | `#334155` | **Texto de título (modo claro)**, fundo de botão neutro |
| `neutral-800` | `#1e293b` | Hover em botões neutros |
| `neutral-900` | `#0f172a` | Foco em botões neutros |
| `neutral-950` | `#020617` | **Fundo de página (modo escuro)** |

### Mapeamento semântico

| Contexto | Claro | Escuro |
|---|---|---|
| Fundo da página | `white` | `neutral-950` |
| Texto de corpo | `neutral-500` | `neutral-400` |
| Texto de título | `neutral-700` | `neutral-50` |
| Borda / divisor | `neutral-100` | `neutral-800` |
| Marca / destaque | `primary-500` | `primary-500` |

---

## Tipografia

### Famílias de fontes

```css
font-sans: "Inter Variable"        /* corpo, UI, rótulos */
font-headings: "Outfit Variable"   /* h1–h6, logo, marcas */
```

### Escala (definida em `src/styles/global.css`)

| Elemento | Mobile | Desktop | Peso |
|---|---|---|---|
| `h1` | `text-4xl` (36px) | `text-6xl` (60px) | `font-bold` |
| `h2` | `text-3xl` (30px) | `text-5xl` (48px) | `font-bold` |
| `h3` | `text-2xl` (24px) | `text-3xl` (30px) | `font-bold` |
| `h4` | `text-xl` (20px) | `text-2xl` (24px) | `font-semibold` |
| `h5` | `text-lg` (18px) | `text-xl` (20px) | `font-semibold` |
| `h6` | `text-base` (16px) | `text-lg` (18px) | `font-semibold` |
| Corpo (`p`) | `text-base` | `text-base` | `font-normal` |
| Pequeno | `text-sm` | `text-sm` | `font-normal`, `text-neutral-400` |

**Regra importante:** `<strong>` dentro de títulos renderiza em `text-primary-500` (destaque da marca), sem negrito — é um acento visual, não uma ênfase semântica. O peso é herdado do título.

### Classes especiais

```css
.highlight  /* text-primary-500 — destaque inline na cor da marca */
.small      /* text-sm text-neutral-400 dark:text-neutral-500 */
.basic-text /* Estilização de conteúdo rich text / Markdown (blockquotes, imagens, listas) */
```

---

## Espaçamento e Layout

### Sistema de grid

O layout utiliza um **grid CSS de 12 colunas** construído com os componentes `Row` + `Col`.

| Breakpoint | Colunas |
|---|---|
| Mobile (`< md`) | 4 colunas |
| Tablet (`md`) | 8 colunas |
| Desktop (`lg+`) | 12 colunas |

### Padding de seção

| Valor da prop | Classes aplicadas |
|---|---|
| `both` (padrão) | `py-12 lg:py-24` |
| `top` | `pt-12 lg:pt-24` |
| `bottom` | `pb-12 lg:pb-24` |
| `none` | Sem padding |

### Container

```css
.container: mx-auto px-6    /* largura total: max-w-full px-0 */
```

---

## Componentes

### Primitivos de layout

#### `<Section>` — `src/components/ui/Section.astro`

Seção de página de nível superior. Envolve o conteúdo em um `<section>` com um `.container` centralizado dentro.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `id` | `string` | — | ID âncora da seção |
| `fullWidth` | `boolean` | `false` | Remove a largura máxima do container |
| `stickyCol` | `boolean` | `false` | Habilita coluna sticky dentro da seção |
| `mode` | `'dark' \| 'light'` | — | Força modo escuro/claro para esta seção |
| `padding` | `'both' \| 'top' \| 'bottom' \| 'none'` | `'both'` | Padding vertical |
| `bg` | `BgProps` | — | Objeto de imagem de fundo |
| `bgPosition` | `string` | `'center'` | CSS background-position |
| `bgHeight` | `string` | `'100%'` | Altura do fundo |
| `classes` | `string` | — | Classes Tailwind extras |

#### `<Row>` — `src/components/ui/Row.astro`

Linha do grid de 12 colunas. Os filhos diretos devem ser componentes `<Col>`.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `flex` | `boolean` | `false` | Usa flexbox em vez de grid |
| `mode` | `string` | — | Força sobrescrita de modo |
| `classes` | `string` | — | Classes Tailwind extras |

#### `<Col>` — `src/components/ui/Col.astro`

Coluna dentro de um `<Row>`. Usa utilitários `col-span-*` do Tailwind.

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `span` | `string` | — | Span desktop (1–12) |
| `spanMobile` | `string` | `'12'` | Span mobile (1–12) |
| `align` | `string` | — | Alinhamento de texto (`left`, `center`, `right`) |
| `classes` | `string` | — | Classes Tailwind extras |

---

### Componentes interativos

#### `<Button>` — `src/components/ui/Button.astro`

Renderiza como `<a>` quando `type="link"` ou quando a prop `link` é fornecida; caso contrário renderiza como `<button>`.

| Prop | Tipo | Padrão | Opções |
|---|---|---|---|
| `type` | `string` | `'button'` | `'link' \| 'button' \| 'submit' \| 'reset'` |
| `size` | `string` | `'base'` | `'lg' \| 'base' \| 'sm'` |
| `link` | `string` | — | href para botões âncora |
| `modal` | `string` | — | ID do modal a acionar |
| `style` | `string` | `'primary'` | `'primary' \| 'secondary' \| 'neutral' \| 'white'` |
| `variation` | `string` | — | `'outline' \| 'link'` |
| `elevated` | `boolean` | — | Adiciona sombra |
| `classes` | `string` | — | Classes extras |

**Matriz de estilos:**

| Estilo | Aparência padrão | Variação `outline` | Variação `link` |
|---|---|---|---|
| `primary` | Fundo rosa sólido, texto branco | Borda rosa, fundo transparente | Texto rosa, fundo transparente |
| `secondary` | Fundo rosa claro, texto rosa | Borda rosa, fundo transparente | Texto rosa, fundo transparente |
| `neutral` | Fundo slate escuro, texto branco | Borda slate, fundo transparente | Texto slate escuro |
| `white` | Fundo branco | Borda branca | Texto branco |

#### `<Accordion>` — `src/components/ui/Accordion.astro`

Widget de divulgação expansível usando `<details>/<summary>` nativos.

| Prop | Tipo | Padrão |
|---|---|---|
| `title` | `string` | obrigatório |
| `text` | `string` | obrigatório |
| `open` | `boolean` | `false` |
| `classes` | `string` | — |

#### `<Modal>` — `src/components/ui/Modal.astro`

Diálogo de sobreposição em tela cheia. Acionado por `<Button modal="id">`.

| Prop | Tipo | Padrão |
|---|---|---|
| `id` | `string` | — |
| `title` | `string` | — |
| `classes` | `string` | — |

#### `<Toast>` — `src/components/ui/Toast.astro`

Notificação fixa no canto inferior direito. Exibida automaticamente após 3s de delay. Estado de dispensa é persistido no `localStorage` por 7 dias.

---

### Componentes de exibição

#### `<Badge>` — `src/components/ui/Badge.astro`

Etiqueta/rótulo inline pequeno. Renderiza como `<a>` se `link` for fornecido.

| Prop | Tipo | Padrão |
|---|---|---|
| `name` | `string` | obrigatório |
| `link` | `string` | — |
| `type` | `'neutral' \| 'primary'` | `'neutral'` |
| `classes` | `string` | — |

#### `<Feature>` — `src/components/ui/Feature.astro`

Unidade de ícone + título + texto de corpo. Usado em listas de funcionalidades e blocos de destaque.

| Prop | Tipo | Padrão | Opções |
|---|---|---|---|
| `type` | `string` | `'top-icon'` | `'top-icon' \| 'side-icon'` |
| `title` | `string` | — | |
| `icon` | `string` | `'rocket'` | Qualquer ícone de `src/icons/` |
| `iconStyle` | `string` | — | `'normal' \| 'square'` |
| `align` | `string` | — | `'left' \| 'center'` |
| `classes` | `string` | — | |

**Estilos de ícone:**
- `normal` → `size-6 text-primary-500` (ícone de contorno, cor da marca)
- `square` → `size-10 bg-primary-500 rounded p-2 text-white` (quadrado preenchido, ícone branco)

#### `<Testimonial>` — `src/components/ui/Testimonial.astro`

Bloco de citação de cliente com avatar e avaliação por estrelas opcionais.

| Prop | Tipo | Padrão |
|---|---|---|
| `blockquote` | `string` | obrigatório |
| `figcaption` | `string` | obrigatório |
| `cite` | `string` | — |
| `link` | `string` | — |
| `avatar` | `any` | — |
| `size` | `string` | `'base'` |
| `mobileSize` | `string` | `size` |
| `align` | `'left' \| 'center'` | `'left'` |
| `rating` | `0–5` | — |
| `quoteSize` | `number` | `64` |
| `classes` | `string` | — |

#### `<Avatar>` — `src/components/ui/Avatar.astro`

Imagem de usuário envolta em um link.

| Prop | Tipo | Padrão | Opções |
|---|---|---|---|
| `size` | `string` | `'base'` | `'lg'(48px) \| 'base'(40px) \| 'sm'(32px) \| 'xs'(24px)` |
| `link` | `string` | `'#'` | |
| `radius` | `string` | — | Qualquer classe `rounded` do Tailwind |
| `image` | `{src, alt}` | obrigatório | |
| `classes` | `string` | — | |

#### `<AvatarGroup>` — `src/components/ui/AvatarGroup.astro`

Grupo empilhado de componentes Avatar.

#### `<Rating>` — `src/components/ui/Rating.astro`

Avaliação por estrelas (0–5) usando ícones SVG preenchidos/vazios.

#### `<List>` — `src/components/ui/List.astro`

Lista vertical de itens.

| Prop | Tipo | Padrão | Opções |
|---|---|---|---|
| `type` | `string` | `'basic'` | `'basic' \| 'checklist'` |
| `listItems` | `Array<{listItem: string}>` | obrigatório | |
| `listColor` | `string` | `'primary'` | `'primary' \| 'neutral' \| 'white'` |
| `classes` | `string` | — | |

**Tipo `checklist`** usa um ícone de check-circle de `src/icons/` na posição do marcador.

#### `<ChipNotification>` — `src/components/ui/ChipNotification.astro`

Elemento inline em formato de pílula para anúncios ou indicadores de status. Possui dois slots: `button` (ação à esquerda) e padrão (texto do corpo).

| Prop | Tipo | Padrão |
|---|---|---|
| `elevated` | `boolean` | — |
| `radius` | `string` | `'rounded'` |
| `classes` | `string` | — |

#### `<Highlight>` — `src/components/ui/Highlight.astro`

Destaque de texto inline usando `text-primary-500`.

#### `<Breadcrumbs>` — `src/components/ui/Breadcrumbs.astro`

Trilha de navegação (breadcrumb).

#### `<Spacer>` — `src/components/ui/Spacer.astro`

Bloco de espaço vertical.

#### `<CTA>` — `src/components/ui/CTA.astro`

Seção de texto de call-to-action (título + slot de corpo).

---

### Cards

Todos os cards estão em `src/components/ui/cards/`.

#### `<BasicCard>` — `src/components/ui/cards/BasicCard.astro`

Card de uso geral com imagem, ícone, título e subtítulo opcionais.

| Prop | Tipo | Padrão | Opções |
|---|---|---|---|
| `title` | `string` | `''` | |
| `subtitle` | `string` | — | |
| `titleSize` | `string` | `'lg'` | `'sm' \| 'base' \| 'lg' \| 'xl'` |
| `image` | `any` | — | Import de imagem Astro |
| `icon` | `string` | — | Nome do ícone em `src/icons/` |
| `link` | `string` | — | Torna o card um link |
| `type` | `string` | — | `'image-top' \| 'image-bottom'` |
| `classes` | `string` | — | |

#### `<FeatureCard>` — `src/components/ui/cards/FeatureCard.astro`

Card especializado para destaque de funcionalidades.

#### `<BlogCard>` — `src/components/ui/cards/BlogCard.astro`

Card para prévia de posts do blog com imagem, título, data e tags.

---

### Formulários

Componentes de formulário em `src/components/ui/forms/`.

#### `<Form>` — `src/components/ui/forms/Form.astro`

Wrapper de formulário com slot.

#### `<InputField>` — `src/components/ui/forms/form-elements/InputField.astro`

Campo de entrada de texto, e-mail ou senha com rótulo.

#### `<TextArea>` — `src/components/ui/forms/form-elements/TextArea.astro`

Campo de texto multilinha com rótulo.

#### `<Toggle>` — `src/components/ui/forms/form-elements/Toggle.astro`

Chave de alternância liga/desliga.

---

### Precificação

#### `<PricingTable>` — `src/components/ui/pricing-tables/PricingTable.astro`

Card completo de plano de preços.

| Prop | Tipo | Padrão |
|---|---|---|
| `data` | `PricingTableProps` | obrigatório |
| `id` | `string` | — |
| `listType` | `'basic' \| 'checklist'` | — |
| `classes` | `string` | — |

Tipos:
- `basic` — card branco, botão primário
- `featured` — fundo rosa (`bg-primary-500`), texto invertido

---

### Navegação

#### `<NavigationBar>` — `src/components/ui/NavigationBar.astro`

Navegação superior sticky. Lê dados de `src/config/navigationBar.ts`. Contém logo, links de navegação (com dropdowns opcionais), alternador de tema e botões de CTA.

#### `<Footer>` — `src/components/ui/Footer.astro`

Rodapé em duas linhas: colunas principais (marca + grupos de links) e sub-rodapé (copyright + ícones sociais). Lê dados de `src/config/footerNavigation.ts` e `src/config/socialLinks.ts`.

#### `<ModeSwitcher>` — `src/components/ui/ModeSwitcher.astro`

Botão alternador de modo claro/escuro/automático.

---

### Componentes de bloco

Blocos compostos de nível de página estão em `src/components/blocks/`.

| Caminho | Descrição |
|---|---|
| `blocks/hero/HomeCTA.astro` | Hero da homepage com título e botões CTA |
| `blocks/hero/PageHeader.astro` | Banner hero de páginas internas |
| `blocks/hero/ContactHero.astro` | Hero da página de contato |
| `blocks/hero/CentredHero.astro` | Hero centralizado com blobs decorativos |
| `blocks/hero/SplitHero.astro` | Hero dividido com texto e screenshot do app |
| `blocks/features/FeatureCards.astro` | Grid de cards de funcionalidades |
| `blocks/features/FeatureList.astro` | Seção de funcionalidades em lista |
| `blocks/features/FeatureSticky.astro` | Seção de funcionalidades com scroll sticky |
| `blocks/highlights/HightlightRows.astro` | Linhas alternadas de imagem + texto |
| `blocks/testimonials/BasicDark.astro` | Bloco de depoimentos em fundo escuro |
| `blocks/pricing/PricingColumns.astro` | Seção de preços em múltiplas colunas |
| `blocks/FAQ/Basic.astro` | Lista de FAQ em accordion |
| `blocks/FAQ/FaqSticky.astro` | FAQ com imagem lateral sticky |
| `blocks/blog/BlogPosts.astro` | Grid de posts do blog |
| `blocks/blog/BlogPostHero.astro` | Seção hero de post do blog |
| `blocks/CTA/BasicDark.astro` | Banner CTA com fundo escuro |
| `blocks/CTA/BasicLight.astro` | Banner CTA com fundo claro |
| `blocks/contact/BasicForm.astro` | Seção com formulário de contato |
| `blocks/contact/ContactCards.astro` | Cards de informações de contato |
| `blocks/socialproof/Basic.astro` | Faixa de logos / prova social |
| `blocks/feeds/BasicFeed.astro` | Feed de changelog / atividade |
| `blocks/modal/SignUp.astro` | Modal de cadastro |
| `blocks/basic/TextImage.astro` | Bloco de duas colunas: texto + imagem |
| `blocks/basic/StickySidebar.astro` | Conteúdo com barra lateral sticky |

---

## Ícones

Ícones são arquivos SVG em `src/icons/`. Renderizados com `<Icon name="nome-do-icone" />` do `astro-icon`.

Ícones disponíveis:

`rocket`, `bolt`, `light-bulb`, `shield-check`, `bell`, `trophy`, `cube-transparent`, `rectangle-stack`, `shopping-cart`, `document-text`, `document-chart-bar`, `chat-bubbles`, `chat-bubble-left-ellipsis`, `user-group`, `arrow-path-rounded-square`, `clipboard-document-list`, `cliboard-document-check`, `credit-card`, `device-phone-mobile`, `quotes`, `filled-star`, `empty-star`, `chevron-down`, `chevron-left`, `plus`, `x-mark`, `eye`, `eye-slash`, `long-arrow-right`, `google-logo`, `twitter-icon`

---

## Animações

Keyframes personalizados definidos em `tailwind.config.mjs`:

| Classe | Descrição |
|---|---|
| `animate-dropdown` | 300ms ease-in-out, desliza para baixo de -1rem com opacidade 0 |
| `animate-fadeInShadowLight` | 500ms, aparece sombra sutil de caixa (modo claro) |
| `animate-fadeInShadowDark` | 500ms, aparece sombra mais profunda de caixa (modo escuro) |
| `animate-fadeUp` | 500ms ease-in-out, desliza para cima de 1rem com opacidade 0 |

### Animações de scroll

Quando `configData.scrollAnimations = true`, a classe `.scroll-animation` é adicionada ao `<body>`. Todos os elementos `.col` iniciam como `opacity-0 translate-y-4` e fazem transição para opacidade total ao entrar na viewport (escalonado por índice de filho, delay de 50ms–875ms).

Para **desabilitar** as animações de scroll, defina `scrollAnimations: false` em `src/config/config.ts`.

---

## Modo Escuro

- Estratégia: `selector` (baseado em classe via `.dark` no `<html>`)
- Controlado pelo `<ModeSwitcher>` que alterna: `auto → light → dark → auto`
- Modo armazenado na chave `foxiTheme` do `localStorage`
- Modo padrão configurado em `src/config/config.ts` → `configData.mode: 'auto' | 'light' | 'dark'`
- Seção/Row pode sobrescrever o modo local com a prop `mode="dark"` ou `mode="light"`
- No CSS: use o prefixo `dark:` para sobrescritas no modo escuro. A variante customizada `.dark_&` também está disponível como `dark-me`.

---

## Arquivos de Configuração

| Arquivo | Finalidade |
|---|---|
| `src/config/config.ts` | Título do site, descrição, OG image, logo, modo, animações de scroll |
| `src/config/navigationBar.ts` | Logo, itens de navegação (com submenus opcionais), botões de ação |
| `src/config/footerNavigation.ts` | Texto sobre / logo do rodapé, colunas de links, copyright |
| `src/config/socialLinks.ts` | Links de redes sociais e ícones |
| `src/config/analytics.ts` | IDs do Google Analytics / Tag Manager |

---

## Convenções

1. **Cabeçalho do arquivo de componente** — Todo componente `.astro` começa com um bloco de comentário descrevendo o que é, suas props e uma URL de referência do Wind UI opcional.
2. **Estilos escopados** — Componentes usam blocos `<style>` com nomes de classe no padrão BEM (`.component`, `.component__element`, `.component--modifier`). Todos os estilos usam `@apply` com utilitários Tailwind.
3. **Padrão de Props** — Props são tipadas com TypeScript `type Props = {}` e desestruturadas com valores padrão no frontmatter.
4. **Padrão de Slot** — Conteúdo é passado via `<slot />` do Astro ou slots nomeados.
5. **Sem estilos inline** — Toda estilização passa por classes Tailwind ou blocos `<style>` escopados.
6. **Modo escuro** — Todo componente que tenha cor de fundo ou de texto deve incluir variantes `dark:`.
7. **Responsivo** — Mobile-first. Estilos padrão são para mobile; o prefixo `lg:` aponta para desktop.
8. **Ícones** — Sempre usar `<Icon name="..." />` do `astro-icon`. Nunca usar emoji ou SVG inline diretamente.
9. **Imagens** — Sempre usar o componente `<Image>` do Astro para imagens estáticas, para habilitar otimização.
10. **Dados** — Dados de nível de página (nav, rodapé, FAQs, funcionalidades, preços, changelog) ficam em `src/config/` ou `src/data/json-files/`. Nunca hardcodar conteúdo repetido dentro de componentes.

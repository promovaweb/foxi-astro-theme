# Gemini — Instruções do Projeto Foxi Astro Theme

> Este documento é a fonte única de verdade para instruções do projeto e diretrizes para o agente Gemini.

---

## Idioma

**Todo o código, comentários, documentação, nomes de variáveis descritivas, textos de interface e respostas geradas para este projeto devem estar em Português do Brasil (pt-BR).** Isso inclui comentários em arquivos `.astro`, `.ts` e `.css`, conteúdo de componentes, mensagens de erro e qualquer texto visível ao usuário.

**Regra importante: Não é permitido traduzir termos técnicos (ex: props, slot, layout, frontmatter, etc.). Mantenha os termos técnicos em sua forma original.**

---

## Referência aos Padrões de Markdown

**Antes de criar ou modificar qualquer arquivo `.md` neste projeto, leia o `MARKDOWN.md`.**

O `MARKDOWN.md` é a fonte única de verdade para formatação, linting e boas práticas de Markdown. Ele documenta todas as regras do markdownlint ativas, convenções de frontmatter para coleções de conteúdo (changelog, blog, podcast), padrões de tabelas, links, blocos de código e idioma.

---

## Referência ao TypeScript e Tipagem

**Antes de criar ou modificar qualquer código TypeScript ou arquivo de configuração, leia o `TYPESCRIPT.md`.**

O `TYPESCRIPT.md` define as regras de tipagem, modularização de configurações em `src/config/`, uso de aliases de path e padrões de nomenclatura que garantem a integridade técnica do projeto.

---

## Referência às Instruções para Agentes

**Este projeto possui diretrizes específicas para agentes de IA documentadas em `AGENTS.md`.**

Os arquivos `GEMINI.md`, `CLAUDE.md` e `AGENTS.md` devem estar sempre sincronizados. Qualquer alteração em um destes arquivos **DEVE** ser replicada nos outros dois para manter a consistência das diretrizes.

---

## Referência ao Design System

**Antes de criar, modificar ou estender qualquer componente, página, bloco ou estilo neste projeto, leia o `DESIGN.md`.**

O `DESIGN.md` é a fonte única de verdade para a linguagem visual deste projeto. Ele documenta a paleta de cores, a escala tipográfica, as regras de espaçamento, o sistema de layout, todos os componentes existentes (com suas props), as convenções e os arquivos de configuração.

### Quando consultar o DESIGN.md

- Criar um novo componente `.astro` → verificar convenções de componentes, padrões de classe BEM, estilo de tipagem de props, padrão de slot
- Adicionar uma nova cor → sempre usar um token existente das escalas `primary-*` ou `neutral-*`; nunca introduzir valores hex arbitrários
- Adicionar um novo tamanho de fonte ou nível de título → seguir a escala tipográfica estabelecida exatamente
- Criar uma nova página ou seção → usar os primitivos de layout `<Section>`, `<Row>`, `<Col>`; não criar wrappers de grid customizados
- Adicionar elementos interativos → preferir os componentes existentes `<Button>`, `<Accordion>`, `<Modal>` antes de criar novos
- Lidar com modo escuro → todo elemento visual deve ter variantes `dark:` do Tailwind conforme documentado
- Adicionar ícones → usar apenas ícones SVG de `src/icons/` via `<Icon name="..." />` do `astro-icon`

---

## Regras Absolutas (Nunca Quebrar)

1. **Idioma pt-BR** — Todos os comentários, textos, documentação e respostas devem estar em Português do Brasil.
2. **Apenas tokens de cor** — Usar tokens `primary-*` e `neutral-*` de `tailwind.config.mjs`. Não adicionar valores hex brutos nem novas escalas de cores.
3. **Estilos escopados com @apply** — Estilos de componentes ficam em um bloco `<style>` usando `@apply`. Sem atributos `style=""` inline para propriedades de design.
4. **Nomenclatura BEM** — Classes CSS de componentes seguem o padrão `.block`, `.block__element`, `.block--modifier`.
5. **Props TypeScript** — Todo componente deve tipar suas props com `type Props = {}` no frontmatter do Astro.
6. **Responsivo mobile-first** — Estilos padrão para mobile. Usar `lg:` para sobrescritas no desktop. Nunca inverter isso.
7. **Modo escuro sempre** — Qualquer cor de fundo ou de texto deve ter um par `dark:`.
8. **Primitivos de layout** — Usar `<Section>` → `<Row>` → `<Col>` para todos os layouts de página. Não criar wrappers customizados de seção/linha/grid.
9. **Dados em config** — Conteúdo repetido (itens de nav, links do rodapé, listas de funcionalidades, dados de preços) deve ficar em `src/config/` ou `src/data/json-files/`. Nunca hardcodar nos componentes.
10. **Webinars e Hangouts via JSON** — A gestão de conteúdos em vídeo deve ser separada por status:
    - **Webinars (Gravados)**: DEVEM ser gerenciados através da coleção `webinars.json`.
    - **Hangouts (Ao Vivo)**: DEVEM ser gerenciados através da coleção `hangouts.json`.
    As páginas `.astro` devem consumir os dados dinamicamente de suas respectivas coleções.
11. **Changelog em Markdown** — O histórico de alterações (changelog) é gerenciado via arquivos Markdown na coleção de conteúdo em `src/content/changelog/`. Novas versões devem ser adicionadas como arquivos `.md` nesta pasta. O tamanho da paginação pode ser configurado em `src/config/config.ts` através da propriedade `changelogPageSize`.
12. **Padrões de Markdown** — Todo arquivo `.md` criado ou modificado em qualquer lugar do projeto (recursivamente) deve obedecer às regras do `MARKDOWN.md`. Use a skill `markdown-format` ao final de qualquer tarefa que envolva arquivos Markdown.
13. **Materiais de Marketing** — Materiais para geração de leads (ebooks, webinars, etc.) são gerenciados como páginas Astro individuais em `src/pages/materiais/`. Cada página deve utilizar um dos layouts especializados de `src/layouts/landing/` e os componentes modulares de `src/components/blocks/landing/`.
14. **Astro Image** — Usar o componente `<Image>` do Astro para todas as imagens estáticas. Nunca usar `<img>` bruto para novo conteúdo (o `<img>` legado nos logos de navegação/rodapé é aceitável).
15. **Modularização de Configurações** — As configurações do site devem ser modularizadas em `src/config/`. O arquivo `src/config/config.ts` atua como um agregador central. Configurações de identidade e SEO ficam em `siteSettings.ts`, enquanto comportamentos do aplicativo e UI ficam em `appSettings.ts`. Todas as interfaces e tipos devem ser centralizados em `src/types/config.ts`.
16. **Documentação Obrigatória (JSDoc)** — Todos os arquivos de definição em `src/types/` e arquivos de configuração em `src/config/` **DEVEM** conter documentação JSDoc em cada propriedade e estrutura (em pt-BR).

---

## Criação de Landing Pages de Materiais

Para criar um novo material de marketing (ex: `/materiais/novo-ebook`):

1. **Escolha o Layout:** Use um layout de `src/layouts/landing/` (ex: `EbookLanding.astro`).
2. **Componentes Modulares:** Utilize os blocos de `src/components/blocks/landing/`:
   - `<LandingHero>`: Para a seção principal com título, descrição e imagem/capa.
   - `<LandingForm>`: Para o formulário de captura de leads.
   - `<LandingFooter>`: Para o rodapé minimalista da landing page.
3. **Suporte a Dark Mode:** Todos os componentes de landing page suportam Dark Mode automaticamente.
4. **SEO:** Passe as props `title` e `description` para o Layout para configurar as metatags via `astro-seo`.
5. **Atualização da Listagem:** Adicione o novo material ao arquivo `src/data/json-files/materialsData.json` para que ele apareça automaticamente na central de materiais.
6. **Página de Agradecimento:** Toda landing page deve obrigatoriamente ter uma página de agradecimento correspondente com uma URL separada (ex: `src/pages/materiais/nome-do-material-obrigado.astro`). Não use subpáginas.

### Exemplo de Estrutura

```astro
---
import Layout from '@layouts/landing/EbookLanding.astro'
import LandingHero from '@components/blocks/landing/LandingHero.astro'
import LandingForm from '@components/blocks/landing/LandingForm.astro'
import LandingFooter from '@components/blocks/landing/LandingFooter.astro'
---
<Layout title="Título SEO" description="Descrição SEO">
  <LandingHero tag="Ebook" title="Título Chamativo" text="Descrição..." image="/path/to/cover.png">
    <div slot="after-text"><LandingForm title="Baixe Agora" buttonText="Enviar" /></div>
  </LandingHero>
  <LandingFooter />
</Layout>
```

1. **Famílias de fontes** — Texto de corpo usa `font-sans` (Inter). Títulos, logos, marcas usam `font-headings` (Outfit). Não introduzir outras famílias de fontes.
2. **Documentação Obrigatória** — Sempre que um componente for criado ou alterado, o seu design system deve ser documentado ou atualizado no `DESIGN.md`.
3. **SEO e Metatags** — Toda nova página deve utilizar o componente `Layout` que integra o plugin `astro-seo`. Certifique-se de passar as props `title` e `description` adequadas para cada página para garantir uma boa indexação.
4. **Aliases de path obrigatórios** — Todo `import` deve usar os aliases definidos no `tsconfig.json`. Nunca usar caminhos relativos com `../` ou `../../`. Use `@components/`, `@layouts/`, `@styles/`, `@config/`, `@data/` ou `@/` (aponta para `src/`).
5. **Git e Versionamento** — Nunca realizar `git add`, `git commit` ou `git push` automaticamente. Estas ações devem ser executadas APENAS quando solicitadas explicitamente pelo usuário.

---

## Checklist de Criação de Componente

Ao criar um novo componente:

- [ ] Ler `DESIGN.md` para verificar componentes similares existentes antes de criar um novo
- [ ] Iniciar o arquivo com um bloco de comentário: `// NomeDoComponente`, `// Descrição:`, `// Propriedades:` (ver componentes existentes para o formato)
- [ ] Tipar todas as props com `type Props = {}`
- [ ] Usar `<slot />` para injeção de conteúdo
- [ ] Escrever `<style>` escopado com classes BEM e `@apply`
- [ ] Incluir variantes `dark:` para todas as classes de cor
- [ ] Usar `primary-500` como cor da marca/destaque
- [ ] Verificar se o nome do ícone existe em `src/icons/` antes de referenciá-lo
- [ ] Comentários e textos de interface em pt-BR
- [ ] Documentar o novo componente no `DESIGN.md` (tabela de componentes de bloco ou UI)
- [ ] Usar aliases de path nos imports (`@components/`, `@layouts/`, `@config/`, `@data/`, etc.). Nunca usar `../` ou `../../`

---

## Aliases de Path

O projeto usa aliases TypeScript/Vite configurados no `tsconfig.json`. **Todo import deve usar aliases — nunca caminhos relativos.**

| Alias | Aponta para | Exemplo de uso |
| --- | --- | --- |
| `@/*` | `src/*` | `import Layout from '@/layouts/Layout.astro'` |
| `@components/*` | `src/components/*` | `import Button from '@components/ui/Button.astro'` |
| `@layouts/*` | `src/layouts/*` | `import Layout from '@layouts/Layout.astro'` |
| `@styles/*` | `src/styles/*` | `import '@styles/global.css'` |
| `@config/*` | `src/config/*` | `import { navigationBarData } from '@config/navigationBar'` |
| `@data/*` | `src/data/*` | `import features from '@data/json-files/featuresData.json'` |

**Nunca usar:**

```ts
// ❌ Errado — caminho relativo
import Button from '../../components/ui/Button.astro'
import { socialLinks } from '../config/socialLinks'

// ✅ Correto — alias de path
import Button from '@components/ui/Button.astro'
import { socialLinks } from '@config/socialLinks'
```

---

## Localização dos Arquivos

| O quê | Onde |
| --- | --- |
| Primitivos de UI | `src/components/ui/` |
| Blocos de página | `src/components/blocks/` |
| Estilos globais | `src/styles/global.css` |
| Config do Tailwind | `tailwind.config.mjs` |
| Config Agregadora | `src/config/config.ts` |
| Config de Identidade/SEO | `src/config/siteSettings.ts` |
| Config de Comportamento/App | `src/config/appSettings.ts` |
| Tipos de Configuração | `src/config/types.ts` |
| Config da navegação | `src/config/navigationBar.ts` |
| Config do rodapé | `src/config/footerNavigation.ts` |
| Links sociais | `src/config/socialLinks.ts` |
| Dados JSON | `src/data/json-files/` |
| Ícones | `src/icons/` |
| Páginas | `src/pages/` |
| Layouts | `src/layouts/` |

---

## Contexto importante para o Gemini

Este projeto é construído com **Astro 6 + Tailwind CSS 3**. O Astro usa arquivos `.astro` com uma seção de frontmatter (entre delimitadores `---`) para lógica TypeScript e uma seção de template para HTML. O CSS fica colocado em blocos `<style>` dentro de cada arquivo `.astro`.

As classes Tailwind são o principal mecanismo de estilização. Tokens de design customizados (cores, fontes, animações) são definidos em `tailwind.config.mjs`. Estilos base globais ficam em `src/styles/global.css`.

O projeto suporta **modo claro e escuro** via estratégia `selector` do Tailwind (classe `.dark` no `<html>`). O componente `<ModeSwitcher>` gerencia a alternância. Todo componente visual deve suportar ambos os modos.

O layout de página segue uma hierarquia estrita: `Layout` → `Section` → `Row` → `Col` → conteúdo do componente.

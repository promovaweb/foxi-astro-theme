# Foxi — Guia de Componentes e Blocos

> Este documento é o inventário oficial e manual de referência para todos os componentes do **Foxi Astro Theme**. Ele define padrões de estrutura, reuso e as melhores práticas para expansão da interface.

---

## 🏗️ Arquitetura de Componentes

Todos os componentes seguem os princípios definidos no [DESIGN.md](./DESIGN.md) e [TYPESCRIPT.md](./TYPESCRIPT.md).

1. **Nomenclatura BEM**: Classes CSS devem seguir o padrão `.bloco__elemento--modificador`.
2. **Estilos Escopados**: Use sempre o bloco `<style>` com `@apply`. Evite estilos inline.
3. **Tipagem Estrita**: Todo componente deve ter seu tipo `Props` documentado com JSDoc.
4. **Astro Primitives**: Use `<Image />` para performance e `<Icon />` para iconografia.
5. **Dark Mode**: Suporte nativo via variáveis CSS semânticas (`--accent`, `--bg-page`) ou variantes `dark:`.

---

## 🗂️ Inventário de Componentes

### 1. Primitivos de UI (`src/components/ui/`)

Componentes atômicos e fundamentais para construção de layouts.

| Componente | Descrição | Insights de Uso |
| :--- | :--- | :--- |
| `Section.astro` | Seção de nível superior com container. | Use como wrapper principal de cada bloco de página. |
| `Row.astro` | Linha do grid de 12 colunas. | Props: `rows` e `rowsLg` para definir `grid-rows-{n}` e `lg:grid-rows-{n}`. Deve conter apenas filhos `<Col />`. |
| `Col.astro` | Coluna do sistema de grid. | Props de span: `span`, `lg`, `spanMobile`. Props de row: `rowSpan` e `rowSpanLg` para `row-span-{n}` e `lg:row-span-{n}`. |
| `Button.astro` | Botão versátil (link, submit, modal). | Suporta estilos `primary`, `secondary`, `neutral`. |
| `NavigationBar.astro` | Cabeçalho principal sticky. | Consome dados de `@config/navigationBar.ts`. |
| `Footer.astro` | Rodapé completo. | Consome dados de `@config/footerNavigation.ts`. |
| `Accordion.astro` | Widget de expansão nativo. | Ótimo para FAQs e listas de detalhes. |
| `Modal.astro` | Diálogo de sobreposição. | Acionado via prop `modal` no componente `Button`. |
| `Avatar.astro` | Foto de perfil com fallback. | Use `AvatarGroup.astro` para empilhar múltiplos. |
| `Badge.astro` | Etiqueta de status ou categoria. | Disponível em cores `neutral` e `primary`. |
| `Breadcrumbs.astro` | Trilha de navegação. | Melhora o SEO e a navegabilidade. |
| `ModeSwitcher.astro` | Alternador de tema. | Alterna entre Claro, Escuro e Sistema. |
| `VideoPlayer.astro` | Embed responsivo do YouTube. | Mantém a proporção 16:9 automaticamente. |

### 2. Blocos de Página (`src/components/blocks/`)

Seções complexas pré-montadas para construção rápida de páginas.

#### Heros

- `hero/HomeCTA.astro`: Versão principal com título impactante e CTAs duplos.
- `hero/CentredHero.astro`: Design limpo com foco centralizado.
- `hero/SplitHero.astro`: Conteúdo de um lado e screenshot do app/produto do outro.
- `hero/HalfImageHero.astro`: Imagem de fundo ocupando 50% da largura.

#### Funcionalidades (Features)

- `features/FeatureCards.astro`: Grid de ícones e descrições curtas.
- `features/FeatureList.astro`: Lista detalhada com ícones laterais.
- `features/FeatureSticky.astro`: Layout moderno com scroll lateral fixo.
- `features/ScreenshotFeature.astro`: Foco em visualização de interface.

#### Equipe (Team)

- `team/TeamGrid.astro`: Grid de cards de membros da equipe com imagem, cargo e links sociais.

#### Podcast

- `podcast/PodcastBento.astro`: Vitrine em estilo Bento Grid para o podcast na Home e Blog.
- `podcast/EpisodeBento.astro`: Grid bento para exibir episódios relacionados ou recomendados.

#### Precificação (Pricing)

- `pricing/PricingColumns.astro`: Comparação de 3 a 4 planos.
- `pricing/PricingToggle.astro`: Alternância dinâmica entre cobrança mensal e anual.
- `pricing/PricingComparison.astro`: Tabela técnica detalhada de recursos.

#### Conversão (CTA & Newsletter)

- `CTA/BrandCTA.astro`: Banner de fundo colorido na cor da marca.
- `CTA/CenteredCTA.astro`: Banner centralizado com gradiente.
- `newsletter/NewsletterCentered.astro`: Formulário centralizado com título, descrição e nota de privacidade.
- `newsletter/NewsletterSplit.astro`: Texto à esquerda e formulário à direita em layout dividido.
- `newsletter/NewsletterWithImage.astro`: Fundo colorido `primary-500` com imagem decorativa à direita.
- `newsletter/NewsletterGrid.astro`: Título à esquerda e formulário à direita com link de política de privacidade.
- `newsletter/NewsletterFeatures.astro`: Formulário à esquerda e lista de benefícios (ícone + texto) à direita.
- `newsletter/PodcastNewsletter.astro`: Bloco grande e impactante para podcast com exibição da capa.

### 3. Cards e Formulários

- `ui/cards/BasicCard.astro`: Card genérico com suporte a imagem e ícone.
- `ui/cards/BlogCard.astro`: Especializado para listagens de blog.
- `ui/forms/Form.astro`: Wrapper com validação e acessibilidade.
- `ui/forms/form-elements/InputField.astro`: Campo de texto padrão.

---

## 💡 Insights e Recomendações

- **Reuso Primeiro**: Antes de criar, verifique se o componente `BasicCard` ou `Feature` pode ser estendido com novos slots ou props.
- **Performance**: Sempre use a prop `loading="lazy"` em componentes que ficam abaixo da dobra (fold).
- **Acessibilidade**: Certifique-se de que todos os componentes interativos tenham `aria-label` e estados de foco visíveis.
- **Empty States**: Sempre trate listas vazias. Nunca deixe o usuário sem feedback visual se não houver dados para exibir.

---

## 🏗️ Separação de Lógica (Utils & Lib)

Se um componente precisar de cálculos ou transformações de dados, mova-os para:

- `src/utils/`: Funções puras.
- `src/lib/`: Integrações e lógica pesada.

---

## 📝 Regra de Documentação

Sempre que um novo componente for criado no diretório `src/components/`, ele **DEVE** ser adicionado a este arquivo na categoria correta, acompanhado de uma breve descrição e insight de uso.

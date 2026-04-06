# Inventário de Componentes e Blocos

Este arquivo lista todos os componentes disponíveis no projeto **Foxi Astro Theme**. Use-o como referência antes de criar qualquer novo componente para garantir o reuso.

---

## 1. Primitivos de UI (`src/components/ui/`)

| Componente | Descrição |
| --- | --- |
| `Accordion.astro` | Widget expansível (details/summary). |
| `Avatar.astro` | Imagem de perfil de usuário. |
| `AvatarGroup.astro` | Grupo de avatares empilhados. |
| `Badge.astro` | Etiqueta/rótulo pequeno. |
| `Breadcrumbs.astro` | Trilha de navegação. |
| `Button.astro` | Botão versátil (link, submit, modal). |
| `ChipNotification.astro` | Pílula de notificação inline. |
| `Col.astro` | Coluna do sistema de grid. |
| `Countdown.astro` | Contador regressivo. |
| `CTA.astro` | Bloco de Call to Action básico. |
| `EbookCover.astro` | Capa estilizada para ebooks. |
| `ExitIntentPopup.astro` | Popup disparado na intenção de saída. |
| `Feature.astro` | Bloco de funcionalidade (ícone + texto). |
| `Feed.astro` | Componente de feed de atividades. |
| `Footer.astro` | Rodapé completo do site. |
| `Highlight.astro` | Destaque de texto na cor da marca. |
| `List.astro` | Listas (básica ou checklist). |
| `Main.astro` | Wrapper principal de conteúdo. |
| `Modal.astro` | Diálogo de sobreposição (overlay). |
| `ModeSwitcher.astro` | Alternador de modo claro/escuro. |
| `NavigationBar.astro` | Barra de navegação superior. |
| `Pagination.astro` | Paginação para listas. |
| `Rating.astro` | Avaliação por estrelas (0-5). |
| `Row.astro` | Linha do sistema de grid. |
| `Section.astro` | Seção de página com container. |
| `SocialIcon.astro` | Ícone de rede social individual. |
| `SocialLinks.astro` | Grupo de ícones de redes sociais. |
| `Spacer.astro` | Espaçamento vertical configurável. |
| `Testimonial.astro` | Citação/Depoimento de cliente. |
| `Toast.astro` | Notificação temporária no canto da tela. |
| `VideoPlayer.astro` | Embed de vídeo (YouTube). |

---

## 2. Blocos de Página (`src/components/blocks/`)

### Heros
- `hero/HomeCTA.astro`: Hero principal da homepage.
- `hero/CentredHero.astro`: Hero com conteúdo centralizado.
- `hero/SplitHero.astro`: Hero dividido (Texto \| Imagem/App).
- `hero/HalfImageHero.astro`: Hero com imagem ocupando metade da tela.
- `hero/PageHeader.astro`: Cabeçalho simples para páginas internas.
- `hero/ContactHero.astro`: Hero específico para página de contato.

### Funcionalidades (Features)
- `features/FeatureCards.astro`: Grid de cards de funcionalidades.
- `features/FeatureList.astro`: Lista vertical de funcionalidades.
- `features/FeatureSticky.astro`: Funcionalidades com scroll fixo.
- `features/SplitFeature.astro`: Texto e imagem lado a lado.
- `features/ScreenshotFeature.astro`: Destaque com screenshot central.
- `features/FeatureWithTestimonial.astro`: Funcionalidade com depoimento integrado.

### Bento Grids
- `highlights/BentoGrid.astro`: Grid estilo Bento básico.
- `highlights/BentoBalanced.astro`: Bento equilibrado.
- `highlights/BentoHighlight.astro`: Bento com destaque central.
- `highlights/BentoThreeColumns.astro`: Bento em 3 colunas.
- `highlights/BentoAlternative.astro`: Variação de Bento.
- `highlights/BentoMixed.astro`: Bento com tipos mistos de conteúdo.
- `highlights/HightlightRows.astro`: Linhas de destaque alternadas.

### Precificação (Pricing)
- `pricing/PricingColumns.astro`: Colunas de preço padrão.
- `pricing/PricingTable.astro`: Card de plano individual.
- `pricing/PricingToggle.astro`: Tabela com switch mensal/anual.
- `pricing/PricingComparison.astro`: Tabela comparativa de recursos.
- `pricing/PricingDetails.astro`: Detalhes avançados de planos.
- `pricing/PricingTwoTiers.astro`: Dois planos lado a lado.
- `pricing/PricingThreeColumns.astro`: Três colunas com destaque.
- `pricing/PricingOverlapping.astro`: Cards sobrepostos.
- `pricing/PricingLifetime.astro`: Plano vitalício.
- `pricing/PricingGrowing.astro`: Tabela para planos escaláveis.
- `pricing/PricingFullFeatured.astro`: Tabela completa com recursos.
- `pricing/PricingSplitDarkFreq.astro`: Variação escura com frequência.

### Newsletter
- `newsletter/NewsletterCentered.astro`
- `newsletter/NewsletterSplit.astro`
- `newsletter/NewsletterGrid.astro`
- `newsletter/NewsletterFeatures.astro`
- `newsletter/NewsletterWithImage.astro`

### CTA (Call to Action)
- `CTA/SimpleCTA.astro`
- `CTA/BasicDark.astro`
- `CTA/BasicLight.astro`
- `CTA/BrandCTA.astro`: CTA na cor da marca.
- `CTA/CenteredCTA.astro`
- `CTA/CenteredTextCTA.astro`
- `CTA/SplitCTA.astro`

### Outros Blocos
- `FAQ/Basic.astro`: FAQ em accordion.
- `FAQ/FaqSticky.astro`: FAQ com barra lateral fixa.
- `blog/BlogPosts.astro`: Grid de posts.
- `blog/BlogPostHero.astro`: Cabeçalho de post.
- `contact/BasicForm.astro`: Formulário de contato.
- `contact/ContactCards.astro`: Cards de info de contato.
- `socialproof/Basic.astro`: Logos de parceiros/clientes.
- `feeds/BasicFeed.astro`: Feed de novidades.
- `basic/TextImage.astro`: Bloco simples de texto e imagem.
- `basic/StickySidebar.astro`: Layout com sidebar fixa.

---

## 3. Landing Pages de Materiais (`src/components/blocks/landing/`)

- `LandingHero.astro`: Hero otimizado para conversão.
- `LandingForm.astro`: Formulário de captura.
- `LandingFooter.astro`: Rodapé minimalista.
- `MaterialCard.astro`: Card para listagem de materiais.
- `DownloadDetails.astro`: Info técnica do download.
- `ContentList.astro`: Lista de benefícios com check.
- `SplitLiveHero.astro`: Hero para webinars/hangouts.
- `ImageSlider.astro`: Slider de imagens de suporte.

---

## 4. Sub-componentes Especializados

### Cards (`src/components/ui/cards/`)
- `BasicCard.astro`, `FeatureCard.astro`, `BlogCard.astro`.

### Forms (`src/components/ui/forms/`)
- `Form.astro`, `InputField.astro`, `TextArea.astro`, `Toggle.astro`, `PhoneInput.astro`.

### Slides (`src/components/ui/slides/`)
- `SlidesBasic.astro`, `SlidesSplit.astro`, `SlidesFull.astro`.

### Podcast (`src/components/ui/podcast/`)
- `EpisodeEntry.astro`, `RelatedEpisodes.astro`, `NewsletterWidget.astro`, `AboutSection.astro`.

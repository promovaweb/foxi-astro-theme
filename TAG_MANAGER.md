# Google Tag Manager & DataLayer

Este documento descreve como o Google Tag Manager (GTM) e a camada de dados (DataLayer) estão configurados no projeto **Foxi Astro Theme**.

## Configuração Inicial

Para habilitar o GTM no seu site, você deve configurar o ID do seu container no arquivo de configuração de analytics.

**Arquivo:** `src/config/analytics.ts`

```ts
// Substitua pelo seu ID do GTM (ex: "GTM-XXXXXXX")
export const googleTagManagerID = 'GTM-XXXXXXX'
```

## Estrutura do DataLayer

O projeto utiliza um componente centralizado para inicializar o `window.dataLayer` com metadados ricos antes que o script principal do GTM seja carregado. Isso garante que as informações da página estejam disponíveis para o evento de visualização de página inicial.

### Tipos de Dados

As informações enviadas ao DataLayer seguem a interface `DataLayerInfo`.

**Localização:** `src/types/analytics.ts`

| Propriedade | Tipo | Descrição |
| :--- | :--- | :--- |
| `page_type` | `string` | Tipo de conteúdo: `home`, `blog`, `podcast`, `material`, `page`, `thanks`, `error`. |
| `page_title` | `string` | Título amigável da página. |
| `page_description`| `string` | Descrição curta da página. |
| `author` | `string` | Autor do conteúdo (especialmente para Blog e Podcast). |
| `publish_date` | `string` | Data de publicação (ISO 8601). |
| `category` | `string` | Categoria principal do conteúdo. |
| `tags` | `string[]` | Lista de tags associadas. |
| `material_type` | `string` | Tipo de material rico (ex: `ebook`, `webinar`, `hangout`). |

### Evento Padrão

Sempre que uma página é carregada, o seguinte evento é disparado no DataLayer:
- **Evento:** `page_view_metadata`

## Como Implementar em Novas Páginas/Layouts

Para adicionar metadados ao DataLayer em uma nova página, você deve passar a prop `dataLayer` para o layout principal.

### Exemplo em uma Página de Blog

```astro
---
import Layout from '@layouts/PostLayout.astro'
const { frontmatter } = Astro.props
---
<Layout
  title={frontmatter.title}
  dataLayer={{
    pageType: 'blog',
    pageTitle: frontmatter.title,
    author: frontmatter.author,
    publishDate: frontmatter.pubDate.toISOString(),
    tags: frontmatter.tags
  }}
>
  <!-- Conteúdo -->
</Layout>
```

### Exemplo em uma Landing Page de Material

```astro
---
import Layout from '@layouts/landing/EbookLanding.astro'
---
<Layout
  title="Título do Ebook"
  dataLayer={{
    pageType: 'material',
    materialType: 'ebook',
    pageTitle: 'Guia de Produtividade Foxi',
    category: 'Ebook'
  }}
>
  <!-- Conteúdo -->
</Layout>
```

## Componentes Relacionados

- `src/components/scripts/DataLayer.astro`: Responsável por injetar o script de inicialização do DataLayer no `<head>`.
- `src/components/scripts/googleTagManagerHead.astro`: Script principal do container GTM.
- `src/components/scripts/googleTagManagerBody.astro`: No-script fallback para o corpo da página.
- `src/components/blocks/head/Header.astro`: Agregador que garante a ordem correta de carregamento (DataLayer → GTM Head).

## Dicas para Configuração no GTM

No painel do Google Tag Manager, você pode criar **Variáveis de Camada de Dados** para capturar estas informações:

1. Vá em **Variáveis** > **Nova**.
2. Escolha **Variável de Camada de Dados**.
3. Nomeie como `dlv - page_type`, `dlv - author`, etc.
4. Use o nome exato da propriedade (ex: `page_type`) no campo "Nome da Variável de Camada de Dados".

Estas variáveis podem então ser usadas em Tags (ex: Google Analytics 4) ou Acionadores (Triggers).

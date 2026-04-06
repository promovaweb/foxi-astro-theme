# Guia Extensivo do Astro Framework: Regras, Diretrizes e Boas Práticas

> Fonte única de verdade para desenvolvimento com Astro Framework neste projeto.

Este documento serve como um guia consolidado de boas práticas, diretrizes arquiteturais, truques e regras essenciais para o desenvolvimento de projetos utilizando o **Astro Framework**. Ele foi elaborado com base nas documentações oficiais atualizadas e nas práticas recomendadas da comunidade para garantir performance extrema, manutenibilidade e escalabilidade.

---

## 1. Filosofia e Arquitetura Base

### 1.1. Zero-JS por Padrão (Estático por Natureza)

- **Regra de Ouro:** O Astro renderiza tudo em HTML puro por padrão. Nenhum JavaScript é enviado ao cliente a menos que você solicite explicitamente.
- **Prática:** Construa a maior parte da sua interface usando apenas HTML e CSS. Evite usar frameworks (React, Vue, Svelte) para renderizar conteúdo estático (como headers, rodapés, textos ou imagens).

### 1.2. Astro Islands (Arquitetura de Ilhas)

Quando você precisar de interatividade (um carrossel, um botão de like, um formulário de busca), você cria uma "Ilha de Interatividade" usando um framework de UI.

- **Diretivas de Hidratação:** Sempre use a diretiva mais restritiva possível:
  - `client:load`: Carrega e hidrata imediatamente. Use **apenas** para elementos críticos de UI acima da dobra (ex: menu de navegação mobile).
  - `client:idle`: Hidrata quando a thread principal do navegador estiver ociosa. Ótimo para componentes não essenciais (ex: widgets laterais, analytics customizado).
  - `client:visible`: Hidrata apenas quando o componente entra na tela (Intersection Observer). **A melhor escolha** para componentes abaixo da dobra (ex: carrossel no meio da página, lazy-loading de comentários).
  - `client:media="{query}"`: Hidrata baseado em media queries (ex: `client:media="(max-width: 768px)"`). Útil para menus hambúrguer que só funcionam no mobile.
  - `client:only="{framework}"`: Ignora a renderização no servidor (SSR) e renderiza 100% no cliente. Use para componentes que dependem estritamente de APIs do navegador (ex: `window`, `localStorage`) logo na montagem.

---

## 2. Estrutura do Projeto e Roteamento

### 2.1. Organização Padrão

Siga rigorosamente a convenção do Astro para tirar proveito do roteamento automático:

- `src/pages/`: Cada arquivo `.astro` ou `.md` aqui se torna uma rota (Roteamento baseado em arquivos).
- `src/components/`: Componentes reutilizáveis (Astro, React, Vue, etc.). Podem ser organizados em subpastas (`ui/`, `blocks/`).
- `src/layouts/`: Componentes que servem como "casca" para as páginas (contém `<html>`, `<head>`, `<body>` e o `<slot />`).
- `src/content/`: Onde residem suas Content Collections (Markdown/MDX/JSON) e seus schemas.
- `public/`: Arquivos estáticos puros que não passam pelo Vite (ex: `robots.txt`, `favicon.svg`, fontes locais e imagens legadas não otimizadas).

### 2.2. Roteamento Dinâmico

- Use colchetes para rotas dinâmicas: `src/pages/blog/[slug].astro`.
- Para SSG (Static Site Generation), você **deve** exportar a função `getStaticPaths()` informando todos os caminhos possíveis.
- Para SSR (Server-Side Rendering), `getStaticPaths()` não é necessário; use o objeto global `Astro` (`Astro.params` e `Astro.request`) para buscar dados em tempo real.

---

## 3. Gestão de Dados: Content Collections

As **Content Collections** são a forma oficial e recomendada de gerenciar conteúdo (Markdown, MDX, YAML, JSON) no Astro.

### 3.1. Tipagem Forte com Zod

- **Regra:** Sempre defina schemas no arquivo `src/content.config.ts` usando a biblioteca Zod embutida no Astro (`astro:schema`).
- **Benefício:** Isso garante autocompletar e verificação de erros no Frontmatter de todos os seus arquivos de conteúdo. O build falhará se o conteúdo não respeitar o schema.

### 3.2. Buscando Dados

- Use `getCollection('nome-da-colecao')` para buscar múltiplos arquivos.
- Use `getEntry('nome-da-colecao', 'slug')` para buscar um arquivo específico.
- **Atenção:** Evite usar `Astro.glob()` ou `import.meta.glob()` para conteúdo Markdown; prefira **sempre** Content Collections pelo ganho de performance e segurança de tipos.

---

## 4. Estilização e CSS

### 4.1. Estilos Escopados

- Por padrão, qualquer tag `<style>` dentro de um componente `.astro` é **escopada** para aquele componente. Ela não vazará para outras partes do site.
- Para afetar elementos filhos dentro de um `<slot>`, você precisará usar o seletor pseudo-classe `:global()`. Exemplo: `p :global(a) { color: red; }`.
- Para definir CSS global, use `<style is:global>` em seu Layout principal, ou importe um arquivo `.css` (ex: `import '../styles/global.css';`).

### 4.2. Classes Dinâmicas

- Use a diretiva `class:list` para gerenciar classes condicionais de forma elegante (funciona de forma semelhante à biblioteca `clsx`).

```astro
<div class:list={['btn', { 'btn-primary': isPrimary, 'btn-disabled': isDisabled }]} />
```

---

## 5. Otimização de Imagens

O Astro possui um processamento de imagens poderoso e nativo.

### 5.1. O Componente `<Image />`

- **Regra:** Sempre que possível, substitua a tag HTML `<img>` pelo componente `<Image />` do pacote `astro:assets`.
- **Benefícios:** Ele previne *Cumulative Layout Shift (CLS)*, infere automaticamente `width` e `height`, converte imagens para WebP/AVIF para menor peso e aplica `loading="lazy"` por padrão.

```astro
---
import { Image } from 'astro:assets';
import minhaImagem from '../assets/foto.png';
---
<Image src={minhaImagem} alt="Descrição da imagem" quality="high" />
```

### 5.2. Onde guardar imagens?

- Imagens que precisam de otimização devem ficar na pasta `src/assets/`.
- Apenas imagens que devem ser servidas exatamente como são (sem otimização e com caminhos absolutos imutáveis) devem ir para a pasta `public/`.

---

## 6. Scripts e Interatividade Nativa

Se você não quer usar um framework (React/Vue) para uma interatividade simples (ex: abrir um menu ou alternar tema), use Vanilla JS no Astro.

### 6.1. O Processamento da tag `<script>`

- Qualquer tag `<script>` em um arquivo `.astro` é empacotada, minificada e anexada ao fim do documento via Vite pelo padrão (com `type="module"`).
- Se um componente Astro é usado 5 vezes na página, seu `<script>` é executado apenas **uma vez**. Use `document.querySelectorAll()` para selecionar todos os elementos relevantes do componente.

### 6.2. Evite `define:vars`

- Passar variáveis do frontmatter para o `<script>` usando `define:vars` tem um custo: o script perde o empacotamento do Vite e é injetado inline.
- **Prática Recomendada:** Passe dados usando atributos `data-*` no HTML e leia-os no script.

```astro
---
const message = "Olá do servidor!";
---
<button data-message={message} id="my-btn">Clique-me</button>

<script>
  const buttons = document.querySelectorAll('#my-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert(btn.dataset.message);
    });
  });
</script>
```

---

## 7. Truques e Boas Práticas Avançadas

### 7.1. View Transitions

- Ative o roteamento tipo SPA com um simples import no seu Layout principal.

```astro
import { ViewTransitions } from 'astro:transitions';
<head>
  <ViewTransitions />
</head>
```

- Use a diretiva `transition:name="id-unico"` em elementos (como imagens ou títulos) de páginas diferentes para criar animações fluidas entre navegações.

### 7.2. Fetching Múltiplo Paralelo

- Se o frontmatter precisar fazer múltiplas chamadas de API, **nunca** faça chamadas em cascata (sequenciais). Use `Promise.all` para chamadas paralelas.

```astro
---
const [usuarios, posts] = await Promise.all([
  fetch('api/usuarios').then(res => res.json()),
  fetch('api/posts').then(res => res.json())
]);
---
```

### 7.3. Componentes como Slots

- O Astro permite passar HTML rico (slots) dentro de propriedades (props) chamadas *Named Slots*.

```astro
<Card>
  <h2 slot="header">Título</h2>
  <p>Corpo do Card (slot padrão)</p>
  <div slot="footer">Rodapé</div>
</Card>
```

### 7.4. Compartilhamento de Estado no Cliente (Nano Stores)

- Se precisar compartilhar o estado entre diferentes ilhas (ex: um componente React `<CartIcon />` e um componente Svelte `<ProductList />`), **não** use Context/Redux.
- **Regra:** Utilize o **Nano Stores** (`@nanostores/react` etc.), recomendado oficialmente pelo Astro por ser agnóstico de framework e extremamente leve.

### 7.5. Endpoints de API

- No Astro, arquivos na pasta `src/pages/` que exportam funções de verbos HTTP (`GET`, `POST`, `DELETE`, `ALL`) agem como endpoints de API estáticos (gerando JSON estático) ou dinâmicos (em modo SSR). Use isso para webhooks, RSS Feeds ou APIs para o cliente.

### 7.6. Middleware

- Use um arquivo `src/middleware.ts` para interceptar requisições. Excelente para redirecionamentos de rotas seguras, checagem de tokens de autenticação antes da renderização e injeção de configurações locais via `locals`.

### 7.7. Fragmentos (`Fragment` ou `<>`)

- Ao retornar múltiplos elementos na raiz ou quando usar loops que requerem `set:html`, envolva-os em um `<Fragment>` ou `<>` vazio para não quebrar o layout e evitar a injeção de `<div>` desnecessárias.

---

## 8. Segurança e Variáveis de Ambiente

- **Padrão Vite:** Variáveis de ambiente são carregadas de arquivos `.env`.
- Para usar no servidor (SSG/SSR): `import.meta.env.MINHA_CHAVE_SECRETA`.
- **CRÍTICO:** Nunca exponha segredos no cliente. Variáveis disponíveis para navegadores/scripts no lado do cliente **devem** ser prefixadas com `PUBLIC_` (ex: `import.meta.env.PUBLIC_API_URL`).

---

## 9. Performance de Build

- Se o site (SSG) possuir milhares de páginas de coleções, o tempo de build em Node.js pode crescer.
- Considere ajustar opções experimentais ou trocar o executor padrão de `node` para `bun`, o que pode reduzir consideravelmente os tempos de build.
- Ative o `prefetch` nativo do Astro. Coloque `<link rel="prefetch">` para páginas altamente visitadas ou use a integração oficial `@astrojs/prefetch` para buscar rotas antes mesmo do clique, baseando-se na intenção do cursor.

---

## 10. Recursos Avançados e Modernos (Astro 4+ e 5)

O ecossistema Astro evoluiu significativamente. Abaixo estão as práticas recomendadas para utilizar os recursos mais recentes:

### 10.1. Server Islands (`server:defer`)

- **Para que serve:** Adiar a renderização de componentes dinâmicos pesados (como perfil de usuário ou carrinho de compras) em páginas que, de outra forma, seriam 100% estáticas.
- **Prática:** Adicione a diretiva `server:defer` no componente. O Astro renderizará um fallback genérico no servidor e fará a requisição do conteúdo real de forma assíncrona pelo cliente, sem bloquear o HTML inicial.

```astro
---
import CarrinhoDinamico from '../components/CarrinhoDinamico.astro';
---
<!-- A página fica em cache na CDN, o carrinho carrega depois -->
<CarrinhoDinamico server:defer>
  <p slot="fallback">Carregando carrinho...</p>
</CarrinhoDinamico>
```

### 10.2. Astro Actions

- **Regra:** Se precisar criar um formulário que envia dados para o servidor ou uma chamada RPC, **não** crie um endpoint de API manual (`src/pages/api/...`). Use as **Astro Actions** (disponíveis via `astro:actions`).
- **Benefício:** Elas oferecem validação de dados automática com Zod, segurança de tipos de ponta a ponta e tratamento de erros integrado. Além disso, funcionam nativamente com HTML Forms usando a diretiva `action={actions.minhaAcao}` sem precisar de JavaScript no cliente.

### 10.3. Content Layer API (Astro 5)

- **Evolução:** A Content Layer API expande as Content Collections. Agora você pode usar `loader` no seu arquivo `src/content.config.ts` para carregar conteúdo de **qualquer lugar** (Notion, Contentful, APIs REST, Banco de dados), validá-lo com Zod e consumi-lo com `getCollection()` exatamente como faria com Markdown local.

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const apiPosts = defineCollection({
  loader: async () => {
    const response = await fetch('https://minha-api.com/posts');
    return response.json();
  },
  schema: z.object({ id: z.string(), title: z.string() })
});
```

### 10.4. Contexto Global com `Astro.locals`

- Se o seu middleware verificar um token JWT e extrair dados do usuário logado, **não** refaça essa busca em cada página. Salve o objeto no `Astro.locals` dentro do middleware e consuma-o no frontmatter de qualquer rota.

```typescript
// No middleware.ts
context.locals.user = { id: 1, name: "Maria" };

// Na página .astro
const { user } = Astro.locals;
```

### 10.5. Request Rewriting

- Use `Astro.rewrite()` em páginas ou middlewares para exibir o conteúdo de outra rota na URL atual sem forçar um redirecionamento de navegador (301/302). Excelente para testes A/B ou regras complexas de fallback de idioma.

### 10.6. Renderização Híbrida (Hybrid Rendering)

- Em projetos configurados com `output: 'server'` (SSR), não presuma que tudo precisa rodar no servidor. Adicione `export const prerender = true` no frontmatter de páginas estáticas (como a Home ou Sobre) para construí-las no tempo de build e economizar recursos do servidor.

---

## 11. Internacionalização (i18n)

### 11.1. Roteamento Nativo e Locales

- O Astro possui suporte nativo a i18n sem precisar de bibliotecas pesadas. Defina `locales` e `defaultLocale` no `astro.config.mjs`.
- Utilize a configuração `prefixDefaultLocale: false` para que o idioma padrão não tenha prefixo na URL (ex: `/sobre` em vez de `/pt/sobre`), melhorando o SEO para o público primário.

### 11.2. Coleções de Conteúdo por Idioma

- Organize seus arquivos Markdown/MDX em pastas por idioma dentro das coleções (ex: `src/content/blog/pt/` e `src/content/blog/en/`).
- Utilize a variável `Astro.currentLocale` nas páginas e layouts para filtrar os resultados retornados por `getCollection()` e exibir o conteúdo correspondente.

---

## 12. View Transitions e SPA State

### 12.1. O Componente `<ClientRouter />`

- (Anteriormente conhecido como `<ViewTransitions />`). Ele transforma a navegação estática do site em uma experiência de *Single Page Application* (SPA), interceptando cliques e trocando apenas o conteúdo do `<body>`.
- **Prática:** Adicione a importação do roteador no `<head>` do seu Layout principal.

### 12.2. Eventos de Ciclo de Vida

- **Atenção:** Em sites com o roteador de cliente ativado, o evento global `DOMContentLoaded` do navegador **não dispara** a cada navegação de página, apenas no primeiro carregamento.
- **Regra:** Se você possui scripts puros (Vanilla JS) que precisam rodar a cada troca de tela (ex: reinicializar ouvintes de clique), envolva-os no listener do evento `astro:page-load`.

```javascript
document.addEventListener('astro:page-load', () => {
  // Lógica de inicialização de menus, modais e carrosseis aqui
});
```

### 12.3. Persistência de Estado (State Persist)

- Elementos interativos (como reprodutores de vídeo/áudio ou ilhas mantendo estado complexo) podem continuar existindo ou tocando sem interrupção durante a mudança de página usando a diretiva `transition:persist`.

```astro
<audio transition:persist="player-audio" src="/musica.mp3" controls></audio>
```

---

## 13. Paginação e Coleções Densas

### 13.1. Paginação Dinâmica (SSG)

- Em rotas dinâmicas SSG como `[page].astro`, use o utilitário embutido `paginate()` dentro do retorno de `getStaticPaths()`. Ele fatia os dados e injeta as propriedades `page.data`, `page.url.next` e `page.url.prev` automaticamente nas propriedades do componente.
- **Regra:** Nunca implemente lógica manual de fatiamento de arrays com `.slice()` no frontmatter de componentes `.astro` quando `paginate()` estiver disponível.

### 13.2. Paginação Mista (Infinite Scroll Híbrido)

- Para um volume de dados muito grande em aplicações SSR, evite renderizar uma página HTML gigantesca que degrada o TTFB (*Time to First Byte*).
- Renderize apenas as primeiras "N" postagens no lado do servidor. Busque o restante de forma assíncrona (via botão "Carregar mais" ou rolagem infinita) através de um componente de cliente que consome endpoints de API (`.ts`) ou **Astro Actions**.

---

## 14. Testes e Garantia de Qualidade

### 14.1. Vitest para Lógica e Componentes

- Use o **Vitest** como o executor de testes primário por ser suportado nativamente pelo Vite e compartilhar a mesma configuração.
- Crie arquivos `*.test.ts` para testar utilitários de formatação, validadores de schemas Zod e cálculos de negócios isolados da UI.

### 14.2. Playwright para Testes End-to-End (E2E)

- O Astro recomenda oficialmente o **Playwright** para testar fluxos de navegação, roteamento de i18n, hidratação de ilhas e validações visuais.
- Não confie apenas em testes unitários em componentes hidratados quando o estado do componente depende ativamente do ciclo de vida complexo de ilhas e janelas do navegador.

---

> *Lembre-se: O Astro foi construído para priorizar o conteúdo. Avalie cada pedaço de JavaScript enviado ao cliente; a interatividade deve ser um aprimoramento progressivo, não um gargalo de desempenho.*

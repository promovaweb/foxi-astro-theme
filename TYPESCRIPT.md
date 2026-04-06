# Foxi — Boas Práticas de TypeScript

> Este documento define as convenções, padrões e boas práticas de TypeScript para o projeto **Foxi Astro Theme**. Seguir estas regras garante a consistência, segurança de tipos e manutenibilidade do código.

---

## 1. Tipagem de Props em Componentes Astro

Todo componente `.astro` deve definir suas propriedades no frontmatter usando um tipo `Props`.

```astro
---
// ✅ Correto
type Props = {
 title: string
 description?: string
}

const { title, description } = Astro.props
---
```

## 2. Configurações Modularizadas e Tipadas

Todas as configurações globais do site devem ser modularizadas e suas interfaces centralizadas para evitar redundância e facilitar a manutenção.

### Estrutura de Configuração

- `src/types/config.ts`: **Fonte única de verdade técnica** para todas as interfaces e tipos de configuração.
- `src/config/siteSettings.ts`: Dados de identidade, SEO e logos.
- `src/config/appSettings.ts`: Dados de comportamento, UI e serviços.
- `src/config/config.ts`: Agregador central que exporta o objeto `configData`.

---

## 3. Referência Técnica de Tipos (Configuração)

Abaixo estão as interfaces canônicas definidas em `src/types/config.ts`. Qualquer alteração nesta estrutura deve ser refletida em ambos os arquivos.

```ts
export type Mode = 'auto' | 'light' | 'dark'

export interface Logo {
 src: string
 srcDark?: string
 alt: string
 text: string
}

export interface SiteSettings {
 siteTitle: string
 siteDescription: string
 ogImage: string
 logo: Logo
 canonical: boolean
 noindex: boolean
 social: {
  twitter?: string | null
  linkedin?: string | null
  instagram?: string | null
  youtube?: string | null
  facebook?: string | null
  github?: string | null
 }
}

export interface AppSettings {
 mode: Mode
 scrollAnimations: boolean
 blogPageSize: number
 changelogPageSize: number
 podcastPageSize: number
 exitIntentPopup: boolean
 newsletterUrl: string
 podcastName: string
 podcastDescription: string
}

export interface Config extends SiteSettings, AppSettings {}
```

---

## 4. Aliases de Path Obrigatórios

Nunca use caminhos relativos (`../`, `../../`). Utilize os aliases definidos no `tsconfig.json`.

| Alias | Destino |
| --- | --- |
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@config/*` | `src/config/*` |
| `@data/*` | `src/data/*` |
| `@type/*` | `src/types/*` |

## 5. Segurança de Tipos e Asserções

- **Evite `any`**: Sempre prefira definir interfaces ou tipos específicos.
- **Asserções de Tipo**: Use `as` apenas quando necessário (ex: mapear strings de config para uniões de tipos em componentes).

```ts
// Exemplo de mapeamento seguro
const style = action.style as 'primary' | 'secondary' | 'neutral'
```

## 6. Convenções de Nomenclatura

- **Interfaces e Tipos**: PascalCase (ex: `NavData`, `PricingTableProps`).
- **Variáveis de Configuração**: camelCase (ex: `navigationBarData`, `configData`).
- **Arquivos de Configuração**: camelCase (ex: `footerNavigation.ts`).

---

## 7. Documentação Obrigatória (JSDoc)

Todos os arquivos de definição em `src/types/` e arquivos de configuração em `src/config/` **DEVEM** conter documentação JSDoc em cada propriedade e estrutura.

- **Idioma**: Os comentários devem estar em Português do Brasil (pt-BR).
- **Extensão**: Cada linha de código de uma interface ou tipo deve ser precedida por sua descrição.

```ts
export interface Logo {
 /** Caminho para a imagem do logo */
 src: string;
 /** Texto alternativo */
 alt: string;
}
```

---

## Sincronização de Documentação

Este arquivo faz parte do núcleo de diretrizes do projeto. Sempre que houver uma alteração estrutural nas práticas de TypeScript ou na definição dos tipos de configuração, os seguintes arquivos **DEVEM** ser revisados para manter a consistência:

1. `GEMINI.md`
2. `CLAUDE.md`
3. `AGENTS.md`
4. `src/types/config.ts` (Sincronização entre código e documentação)

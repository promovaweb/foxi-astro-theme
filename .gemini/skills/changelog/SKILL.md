---
name: changelog
description: Cria uma nova entrada no changelog do projeto em src/content/changelog/
---

Você deve criar uma nova entrada no changelog do projeto Foxi Astro Theme seguindo o padrão estabelecido.

## Passo 1 — Identificar a versão atual

Liste os arquivos de changelog existentes e identifique a versão mais recente:

```bash
ls src/content/changelog/ | sort -V | tail -5
```

## Passo 2 — Analisar os commits desde a última versão

Execute o git log para ver o que mudou desde o último commit relevante:

```bash
git log --oneline --no-merges -30
```

Leia também o arquivo do changelog mais recente para entender o contexto.

## Passo 3 — Determinar a nova versão

Com base nos commits encontrados, decida o incremento de versão seguindo o Semantic Versioning:

- **PATCH** (x.y.Z): Correções de bugs, ajustes visuais, pequenas melhorias
- **MINOR** (x.Y.0): Novas funcionalidades que não quebram compatibilidade
- **MAJOR** (X.0.0): Mudanças que quebram compatibilidade, reescritas significativas

Se o usuário passou o número da versão na mensagem, use-o diretamente.

## Passo 4 — Determinar a categoria

Escolha a categoria mais adequada com base nas mudanças:

- `Lançamento` — nova versão principal ou release major
- `Funcionalidade` — nova feature ou melhoria significativa
- `Correção` — bugfixes e patches
- `Performance` — otimizações de velocidade e build
- `Segurança` — atualizações de segurança
- `Infraestrutura` — docker, CI/CD, deploy
- `Componentes` — novos componentes ou alterações no design system
- `Conteúdo` — mudanças em dados, textos ou estrutura de conteúdo
- `API` — integrações e endpoints
- `Documentação` — docs, CLAUDE.md, DESIGN.md, README

## Passo 5 — Gerar as tags

Extraia tags relevantes dos commits. Use apenas termos técnicos em minúsculo, sem acentos. Exemplos: `astro`, `tailwind`, `typescript`, `seo`, `dark-mode`, `componentes`, `n8n`, `claude`, `gemini`.

## Passo 6 — Criar o arquivo

Use a data atual (`date +%Y-%m-%d`) e crie o arquivo `src/content/changelog/vX.Y.Z.md`:

```markdown
---
title: "vX.Y.Z: Título Curto e Descritivo"
description: "Descrição completa com até 200 caracteres explicando o que esta versão traz."
date: "AAAA-MM-DD"
category: "Categoria"
tags: ["tag1", "tag2"]
---

## Resumo

Parágrafo introdutório explicando o contexto e motivação desta release.

---

## O que mudou?

### Funcionalidade ou Área

- Descrição do que foi adicionado ou corrigido
- Outra mudança relevante

---

## Como usar / Como migrar

Instruções práticas se necessário.
```

## Regras obrigatórias

- Todo o conteúdo deve estar em **Português do Brasil**
- Nunca hardcode a data — sempre use `date +%Y-%m-%d`
- O `title` deve conter a versão e um subtítulo descritivo
- A `description` deve ter entre 100 e 200 caracteres (para SEO)
- Após criar o arquivo, informe o caminho e mostre um preview do frontmatter
- **Não faça git commit automaticamente** — apenas crie o arquivo

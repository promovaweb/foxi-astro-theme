---
name: markdown-format
description: Aplica as regras de escrita e linting em arquivos Markdown do projeto
---

# Skill: Formatar e Validar Markdown

> Guia para aplicação de regras de linting e formatação em arquivos Markdown.

Antes de qualquer ação, leia o arquivo `MARKDOWN.md` na raiz do projeto. Ele é a fonte única de verdade para todas as regras de formatação, linting e boas práticas de Markdown neste projeto.

---

## Escopo

Se o usuário especificou um arquivo ou glob, processe apenas esses arquivos.
Caso contrário, processe todos os arquivos `.md` do projeto, exceto `node_modules/` e `.git/`.

---

## Passo 1 — Ler o MARKDOWN.md

```bash
cat MARKDOWN.md
```

Internalize todas as regras antes de continuar.

---

## Passo 2 — Executar o markdownlint

```bash
which markdownlint || npm install -g markdownlint-cli
markdownlint "**/*.md" --ignore node_modules --ignore .git
```

Anote cada erro reportado: arquivo, linha e ID da regra violada.

---

## Passo 3 — Corrigir os arquivos

Para cada erro encontrado, leia o arquivo, aplique a correção correspondente conforme as regras do `MARKDOWN.md` e salve. Priorize:

1. Estrutura de headings (MD001, MD003, MD023, MD025)
2. Listas e formatação (MD004, MD032, MD049, MD050)
3. Blocos de código (MD031, MD040)
4. Espaçamento (MD009, MD010, MD012, MD022)
5. Links e URLs (MD034)
6. HTML inline (MD033)
7. Newline final (MD047)

Arquivos em `src/content/` possuem frontmatter — não aplique regras de linting ao bloco entre `---`. Aplique apenas ao corpo Markdown.

---

## Passo 4 — Confirmar

Rode o markdownlint novamente para confirmar que não há mais erros:

```bash
markdownlint "**/*.md" --ignore node_modules --ignore .git
```

Informe quais arquivos foram modificados e quais regras foram corrigidas em cada um.

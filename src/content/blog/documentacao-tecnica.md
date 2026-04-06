---
title: 'Documentação Técnica: Como Escrever o que as Pessoas Realmente Leem'
pubDate: 2025-01-14T08:00:00Z
description: 'Documentação ruim é mais cara do que nenhuma documentação. Aprenda a criar docs técnicos que as pessoas realmente leem, entendem e usam — com exemplos práticos e templates.'
author: 'luizeof'
image: '/blog/post-06-cover.png'
tags: ['documentação', 'engenharia', 'boas práticas', 'escrita']
---

"O código se documenta sozinho." — Esta é uma das frases mais repetidas e mais prejudiciais da engenharia de software. Código limpo explica *como*. Documentação explica *por quê*.

Sem documentação adequada, cada novo integrante da equipe reinventa a roda. Cada bug misterioso consome horas de investigação. Cada decisão de arquitetura se perde na memória de quem saiu da empresa.

Documentação não é uma tarefa chata. É um ato de gentileza com seu eu futuro e com seus colegas.

---

## Os Tipos de Documentação Técnica

### Documentação de API

Descreve como usar uma interface programática. Deve conter:

- Endpoint, método HTTP e URL
- Parâmetros (obrigatórios e opcionais)
- Formato do request e response
- Códigos de erro e seus significados
- Exemplos funcionais de requisição

**Exemplo de documentação de endpoint:**

#### `POST /api/v1/tasks`

Cria uma nova tarefa no projeto especificado.

**Headers obrigatórios:**

| Header | Valor | Descrição |
| --- | --- | --- |
| `Authorization` | `Bearer {token}` | Token de acesso da API |
| `Content-Type` | `application/json` | Formato do corpo da requisição |

**Body da requisição:**

```json
{
  "title": "Revisar proposta comercial",
  "description": "Verificar valores e condições antes do envio",
  "project_id": "proj_abc123",
  "assignee_id": "user_xyz789",
  "due_date": "2025-01-20T18:00:00Z",
  "priority": "high",
  "tags": ["comercial", "urgente"]
}
```

**Resposta de sucesso (201 Created):**

```json
{
  "id": "task_def456",
  "title": "Revisar proposta comercial",
  "status": "todo",
  "created_at": "2025-01-14T10:30:00Z",
  "url": "https://app.foxi.com.br/tasks/task_def456"
}
```

**Códigos de erro:**

| Código | Significado | Causa comum |
| --- | --- | --- |
| `400` | Bad Request | Campo obrigatório ausente ou inválido |
| `401` | Unauthorized | Token ausente ou expirado |
| `403` | Forbidden | Sem permissão no projeto |
| `404` | Not Found | Projeto ou usuário não encontrado |
| `422` | Unprocessable Entity | Dados válidos mas violam regra de negócio |
| `429` | Too Many Requests | Limite de taxa atingido |

---

### Documentação de Arquitetura (ADR)

*Architecture Decision Records* (ADRs) documentam decisões técnicas importantes. Use este template:

#### ADR-0042: Adoção de PostgreSQL como banco de dados principal

**Status:** Aprovado

**Contexto:**
O sistema precisa de um banco de dados relacional que suporte transações ACID, queries complexas e volume esperado de 10M registros no primeiro ano.

**Decisão:**
Adotar PostgreSQL 16 como banco de dados principal para todos os módulos novos.

**Consequências positivas:**

- Suporte nativo a JSON/JSONB para dados semi-estruturados
- Extensões como `pg_trgm` para busca full-text eficiente
- Ecosistema maduro e vasta documentação

**Consequências negativas:**

- Maior complexidade operacional vs. SQLite em ambientes de desenvolvimento local
- Necessidade de configuração de réplicas para alta disponibilidade

**Alternativas consideradas:**

- *MySQL 8.0* — Descartado por limitações na manipulação de JSON e window functions
- *MongoDB* — Descartado pela necessidade de consistência transacional forte

---

### README de Projeto

Um bom README deve responder a 5 perguntas em menos de 1 minuto de leitura:

1. **O que é isso?** — Uma linha descrevendo o projeto
2. **Por que existe?** — O problema que resolve
3. **Como instalar?** — Passo a passo mínimo para rodar localmente
4. **Como usar?** — Exemplo básico de uso
5. **Como contribuir?** — Link para guia de contribuição

**Exemplo de seção de instalação:**

```bash
# Clone o repositório
git clone https://github.com/empresa/projeto.git
cd projeto

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite .env com suas configurações locais

# Inicie o banco de dados (requer Docker)
docker compose up -d postgres

# Execute as migrations
npm run db:migrate

# Inicie o servidor de desenvolvimento
npm run dev
# Acesse: http://localhost:3000
```

---

## Boas Práticas de Escrita Técnica

### Use a Estrutura da Pirâmide Invertida

Comece pela informação mais importante. Detalhes vêm depois.

**Em vez de:**
> "Para entender como configurar a autenticação, primeiro precisamos compreender o fluxo OAuth 2.0, que foi desenvolvido para resolver os problemas de segurança das versões anteriores..."

**Use:**
> "Para ativar OAuth 2.0, adicione estas 3 variáveis de ambiente ao seu `.env`..."

### Preferências de Linguagem

- **Use voz ativa:** "O sistema envia o e-mail" ✅ vs. "O e-mail é enviado pelo sistema" ❌
- **Seja específico:** "aguarde alguns segundos" ❌ vs. "aguarde até 30 segundos" ✅
- **Evite jargão desnecessário:** escreva para o nível de conhecimento do seu público-alvo
- **Use listas para etapas sequenciais** e listas desordenadas para itens sem ordem obrigatória

### Mantenha Exemplos Funcionais

Um exemplo de código que não funciona é pior que nenhum exemplo. Boas práticas:

- Teste todos os exemplos antes de publicar
- Use dados realistas (não `foo`, `bar`, `test123`)
- Inclua comentários explicando partes não óbvias
- Mostre tanto o código quanto a saída esperada

---

## O Ciclo de Vida da Documentação

A documentação envelhece. Crie um processo para mantê-la viva:

| Gatilho | Ação obrigatória |
| --- | --- |
| Nova feature lançada | Atualizar docs do usuário e changelog |
| Breaking change na API | Atualizar docs da API + guia de migração |
| Bug corrigido que afetava comportamento documentado | Corrigir a documentação |
| Novo membro no time | Revisão do README e docs de onboarding |
| Feedback de usuário sobre confusão | Melhoria imediata da seção relevante |
| Revisão trimestral | Auditoria completa de docs desatualizados |

---

## Ferramentas Recomendadas

### Para Documentação de API

- **Swagger/OpenAPI** — Padrão de mercado para APIs REST
- **Redocly** — Portais de documentação bonitos a partir de specs OpenAPI
- **Postman** — Documentação interativa que serve também como ambiente de testes

### Para Documentação de Produto

- **Notion** — Flexível e colaborativo
- **Confluence** — Robusto para grandes organizações
- **GitBook** — Bonito e integrado com Git

### Para Bases de Conhecimento Internas

- **Foxi Docs** — Documentação contextualizada ao trabalho e projetos
- **Slab** — Focado em busca e descoberta de conhecimento
- **Tettra** — Integração nativa com Slack para busca de documentação

---

## Checklist de Documentação

Antes de considerar uma feature documentada:

- [ ] Existe um guia de início rápido (getting started)?
- [ ] Todos os parâmetros e opções estão descritos?
- [ ] Há exemplos funcionais para os casos de uso mais comuns?
- [ ] Os erros comuns estão documentados com suas soluções?
- [ ] A documentação foi revisada por alguém que não trabalhou no desenvolvimento?
- [ ] Está claro quando a documentação foi atualizada pela última vez?
- [ ] Há um canal claro para reportar problemas na documentação?

---

> "Documentação é uma carta de amor para seu eu futuro."

Comece pequeno. Um README claro já é melhor do que nada. Documente as decisões importantes. Mantenha exemplos funcionando. E revise periodicamente — código muda, documentação precisa acompanhar.

---
title: 'Design de APIs REST: Princípios, Boas Práticas e Exemplos Reais'
pubDate: 2025-03-18T09:00:00Z
description: 'Um guia completo para projetar APIs REST que desenvolvedores adoram usar: nomenclatura consistente, versionamento, autenticação, paginação, tratamento de erros e muito mais.'
author: 'luizeof'
image: '/blog/post-04-cover.png'
tags: ['api', 'rest', 'backend', 'desenvolvimento']
---

Uma API bem projetada é um ato de comunicação. Ela fala com desenvolvedores que nunca te conheceram, em horários em que você está dormindo, resolvendo problemas que você sequer imaginou. Uma API mal projetada é um obstáculo que cria frustração, bugs e horas perdidas de integração.

Este guia cobre os fundamentos e as melhores práticas de design de APIs REST que resistem ao tempo.

---

## Princípios REST

REST (*Representational State Transfer*) não é um protocolo — é um estilo arquitetural com seis restrições:

1. **Interface uniforme** — Recursos identificados por URI, manipulados através de representações
2. **Stateless** — Cada requisição contém toda a informação necessária; sem estado no servidor
3. **Cacheável** — Respostas devem indicar se podem ser cacheadas
4. **Cliente-servidor** — Interface desacoplada da implementação
5. **Sistema em camadas** — Cliente não precisa saber se está falando com servidor final ou proxy
6. **Code on demand (opcional)** — Servidor pode enviar código executável ao cliente

---

## Nomenclatura e Estrutura de URLs

### Regras Fundamentais

Use **substantivos no plural** para coleções, nunca verbos:

```text
# ❌ Errado — verbos na URL
GET /getTasks
POST /createTask
DELETE /deleteTask/123

# ✅ Correto — substantivos + método HTTP semântico
GET    /tasks          # listar tarefas
POST   /tasks          # criar tarefa
GET    /tasks/123      # buscar tarefa específica
PUT    /tasks/123      # atualizar tarefa completa
PATCH  /tasks/123      # atualizar campos parciais
DELETE /tasks/123      # remover tarefa
```

### Hierarquia de Recursos

```text
# Recursos aninhados (máximo 2 níveis de aninhamento)
GET  /projects/456/tasks          # tarefas de um projeto
POST /projects/456/tasks          # criar tarefa no projeto
GET  /projects/456/tasks/123      # tarefa específica no projeto

# Evite aninhamentos profundos
# ❌ /organizations/1/teams/2/projects/3/tasks/4/comments/5
# ✅ /tasks/4/comments/5
```

---

## Métodos HTTP e Seus Significados

| Método | Idempotente | Seguro | Uso |
| --- | --- | --- | --- |
| `GET` | ✅ | ✅ | Leitura de recursos |
| `POST` | ❌ | ❌ | Criação de recursos |
| `PUT` | ✅ | ❌ | Substituição completa |
| `PATCH` | ❌ | ❌ | Atualização parcial |
| `DELETE` | ✅ | ❌ | Remoção de recursos |
| `HEAD` | ✅ | ✅ | Metadados sem body |
| `OPTIONS` | ✅ | ✅ | CORS preflight |

---

## Autenticação e Autorização

### Fluxo de Autenticação com JWT

```bash
# 1. Obter token de acesso
curl -X POST https://api.foxi.com.br/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@empresa.com",
    "password": "senha_segura"
  }'

# Resposta:
# {
#   "access_token": "eyJhbGciOiJIUzI1NiIs...",
#   "refresh_token": "dGhpcyBpcyBhIHJlZnJlc2g...",
#   "expires_in": 3600,
#   "token_type": "Bearer"
# }

# 2. Usar o token em requisições
curl -X GET https://api.foxi.com.br/v1/tasks \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."

# 3. Renovar token antes de expirar
curl -X POST https://api.foxi.com.br/v1/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{"refresh_token": "dGhpcyBpcyBhIHJlZnJlc2g..."}'
```

### Verificando Permissões com Scopes

```bash
# Token com escopo limitado para leitura
curl -X POST https://api.foxi.com.br/v1/auth/token \
  -d '{
    "email": "bot@empresa.com",
    "password": "senha",
    "scope": "tasks:read projects:read"
  }'
```

---

## Paginação

A paginação é essencial para APIs que retornam coleções. O Foxi usa **cursor-based pagination** para consistência:

```bash
# Primeira página (20 itens)
GET /v1/tasks?limit=20

# Próxima página usando cursor
GET /v1/tasks?limit=20&cursor=dGFza19hYmMxMjM=
```

**Estrutura da resposta paginada:**

```json
{
  "data": [
    { "id": "task_001", "title": "Revisão técnica" },
    { "id": "task_002", "title": "Deploy em staging" }
  ],
  "pagination": {
    "has_more": true,
    "next_cursor": "dGFza19hYmMxMjM=",
    "total_count": 847
  }
}
```

---

## Filtros, Ordenação e Busca

### Parâmetros de Query Padronizados

```bash
# Filtrar por status e responsável
GET /v1/tasks?status=in_progress&assignee=user_xyz

# Ordenação (prefixo - para descendente)
GET /v1/tasks?sort=-created_at,title

# Busca textual
GET /v1/tasks?q=revisão+técnica

# Combinar tudo
GET /v1/tasks?status=todo&assignee=user_abc&sort=-priority&limit=10
```

### Seleção de Campos (Sparse Fieldsets)

```bash
# Retornar apenas campos necessários (reduz payload)
GET /v1/tasks?fields=id,title,status,due_date

# Expandir recursos relacionados
GET /v1/tasks?include=assignee,project
```

---

## Tratamento de Erros

### Estrutura Padronizada de Erro

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Um ou mais campos são inválidos",
    "details": [
      {
        "field": "due_date",
        "code": "INVALID_FORMAT",
        "message": "O campo due_date deve estar no formato ISO 8601 (ex: 2025-01-20T18:00:00Z)"
      },
      {
        "field": "assignee_id",
        "code": "NOT_FOUND",
        "message": "Usuário user_xyz789 não encontrado nesta organização"
      }
    ],
    "request_id": "req_abc123def456",
    "docs_url": "https://docs.foxi.com.br/errors/VALIDATION_ERROR"
  }
}
```

### Script de Diagnóstico de Erros

```bash
#!/bin/bash
# diagnose-api.sh — Verificar status da API do Foxi

API_BASE="https://api.foxi.com.br"
TOKEN="${FOXI_API_TOKEN}"

echo "=== Diagnóstico da API Foxi ==="

# Verificar health endpoint
echo -n "Health check: "
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${API_BASE}/health")
if [ "$STATUS" -eq 200 ]; then
  echo "✅ OK (HTTP ${STATUS})"
else
  echo "❌ FALHA (HTTP ${STATUS})"
fi

# Verificar autenticação
echo -n "Autenticação: "
AUTH_STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: Bearer ${TOKEN}" \
  "${API_BASE}/v1/me")
if [ "$AUTH_STATUS" -eq 200 ]; then
  echo "✅ Token válido"
elif [ "$AUTH_STATUS" -eq 401 ]; then
  echo "❌ Token inválido ou expirado"
else
  echo "⚠️  Status inesperado: HTTP ${AUTH_STATUS}"
fi

# Verificar rate limit atual
echo -n "Rate limit: "
RATE_HEADERS=$(curl -s -I \
  -H "Authorization: Bearer ${TOKEN}" \
  "${API_BASE}/v1/tasks?limit=1")
REMAINING=$(echo "$RATE_HEADERS" | grep -i "x-ratelimit-remaining" | awk '{print $2}')
LIMIT=$(echo "$RATE_HEADERS" | grep -i "x-ratelimit-limit" | awk '{print $2}')
echo "${REMAINING}/${LIMIT} requisições restantes"
```

---

## Versionamento de API

### Estratégias Comparadas

| Estratégia | Exemplo | Prós | Contras |
| --- | --- | --- | --- |
| URL path | `/v1/tasks` | Explícito, fácil de testar | Quebra URLs ao versionar |
| Header | `API-Version: 2025-01` | URLs limpas | Difícil de testar no browser |
| Query param | `/tasks?version=1` | Simples | Poluição dos parâmetros |
| Content-Type | `application/vnd.foxi.v1+json` | Purista REST | Complexidade nos clientes |

O Foxi usa **URL path versioning** por ser o mais explícito e fácil de adotar.

### Política de Descontinuação (Deprecation)

```text
# Header de aviso quando endpoint está sendo descontinuado
HTTP/1.1 200 OK
Deprecation: true
Sunset: Sat, 01 Jan 2026 00:00:00 GMT
Link: <https://docs.foxi.com.br/migration/v2>; rel="successor-version"
```

---

## Webhook: Push vs. Pull

Em vez de o cliente verificar por novidades (pull), webhooks enviam eventos ao cliente automaticamente (push):

```bash
# Configurar webhook via API
curl -X POST https://api.foxi.com.br/v1/webhooks \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://meuapp.com.br/webhooks/foxi",
    "events": [
      "task.created",
      "task.completed",
      "task.overdue"
    ],
    "secret": "meu_secret_para_validar_assinatura"
  }'
```

**Validando a assinatura do webhook em Node.js:**

```javascript
const crypto = require('crypto');

function validarAssinaturaWebhook(payload, assinatura, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const assinaturaCalculada = 'sha256=' + hmac.digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(assinatura),
    Buffer.from(assinaturaCalculada)
  );
}
```

---

## SDK de Exemplo em Python

```python
import os
import requests
from typing import Optional

class FoxiClient:
    """Cliente Python para a API do Foxi."""

    BASE_URL = "https://api.foxi.com.br/v1"

    def __init__(self, api_token: str):
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {api_token}",
            "Content-Type": "application/json"
        })

    def listar_tarefas(self, projeto_id: Optional[str] = None, status: Optional[str] = None):
        """Lista tarefas com filtros opcionais."""
        params = {}
        if projeto_id:
            params["project_id"] = projeto_id
        if status:
            params["status"] = status

        response = self.session.get(f"{self.BASE_URL}/tasks", params=params)
        response.raise_for_status()
        return response.json()

    def criar_tarefa(self, titulo: str, projeto_id: str, **kwargs):
        """Cria uma nova tarefa."""
        payload = {"title": titulo, "project_id": projeto_id, **kwargs}
        response = self.session.post(f"{self.BASE_URL}/tasks", json=payload)
        response.raise_for_status()
        return response.json()

# Uso
token = os.environ["FOXI_API_TOKEN"]
cliente = FoxiClient(token)

tarefas = cliente.listar_tarefas(status="todo")
print(f"Tarefas abertas: {tarefas['pagination']['total_count']}")

nova = cliente.criar_tarefa(
    titulo="Implementar autenticação OAuth",
    projeto_id="proj_abc123",
    priority="high",
    due_date="2025-04-01T18:00:00Z"
)
print(f"Tarefa criada: {nova['id']}")
```

---

## Checklist de Design de API

Antes de publicar um novo endpoint:

- [ ] URL usa substantivos no plural e hierarquia clara
- [ ] Método HTTP reflete a operação (GET para leitura, POST para criação etc.)
- [ ] Resposta segue o formato padrão da API
- [ ] Erros retornam estrutura padronizada com `error.code` e `error.message`
- [ ] Paginação implementada para endpoints que retornam listas
- [ ] Autenticação e autorização verificadas em todos os endpoints
- [ ] Rate limiting configurado e documentado nos headers
- [ ] Documentação OpenAPI atualizada
- [ ] Testes de integração cobrindo casos de sucesso e erro
- [ ] Versão da API especificada na URL

---

> "Uma API é uma promessa. Quebrá-la tem um custo enorme — para você e para quem depende dela."

O Foxi oferece uma API REST completa, documentada com OpenAPI e disponível para todos os planos pagos. Acesse `docs.foxi.com.br/api` para explorar os endpoints e testar diretamente no browser.

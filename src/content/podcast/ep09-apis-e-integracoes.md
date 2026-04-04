---
title: "9: APIs e Integrações: O Que Todo Dev Deve Saber"
description: "Arquiteto de software com 12 anos de experiência explica os fundamentos de design de APIs, autenticação, versionamento e as melhores práticas para integrações que não quebram em produção."
pubDate: 2024-03-06
youtubeId: "aqz-KE-bpKQ"
cover: "/blog/post-03-cover.png"
author: "luizeof"
---

APIs são a espinha dorsal da internet moderna. Todo produto digital relevante tem uma — e a qualidade dessa API define se desenvolvedores vão adorar ou odiar seu produto. Neste episódio, o arquiteto André Lima compartilha o que aprendeu em mais de 300 integrações construídas.

![Diagrama de arquitetura de APIs em uma tela de monitor](/blog/post-03.png)

---

## Por Que o Design de APIs Importa

> "Uma API ruim é para sempre. Você pode reescrever o backend, mas quando há clientes em produção dependendo da sua API, mudanças quebram coisas. É por isso que o design precisa ser tratado como um produto, não como um detalhe de implementação." — **André Lima, Arquiteto de Software**

### O Custo de Uma API Mal Projetada

- **Suporte aumentado:** Desenvolvedores confusos geram tickets
- **Adoção baixa:** Empresas escolhem concorrentes com APIs melhores
- **Dívida técnica:** Versões legadas que nunca podem ser removidas
- **Bugs difíceis:** Comportamentos inconsistentes são fonte de erros sutis

---

## REST vs GraphQL vs gRPC

Uma das perguntas mais comuns. A resposta honesta é: depende.

| Critério | REST | GraphQL | gRPC |
|---------|------|---------|------|
| Casos de uso | APIs públicas genéricas | Apps com múltiplos clientes | Comunicação interna entre serviços |
| Flexibilidade do cliente | Baixa | Alta | Baixa |
| Performance | Boa | Variável | Excelente |
| Overfetching | Comum | Nunca | Nunca |
| Underfetching | Comum (N+1) | Nunca | Nunca |
| Curva de aprendizado | Baixa | Média | Alta |
| Ferramentas e ecossistema | Maduro | Crescente | Maduro em Go/Java |
| Streaming | HTTP streaming | Subscriptions | Nativo |

---

## Princípios de um Bom Design REST

### Nomenclatura de Recursos

Use substantivos no plural, não verbos:

```
❌ /getUsers
❌ /createUser
❌ /deleteUser

✅ /users          → GET (listar), POST (criar)
✅ /users/{id}     → GET (buscar), PUT (atualizar), DELETE (remover)
✅ /users/{id}/posts → GET (posts do usuário)
```

### Códigos de Status HTTP Corretos

| Código | Situação | Uso Correto |
|--------|---------|-------------|
| 200 | OK | Resposta bem-sucedida |
| 201 | Created | Recurso criado com sucesso |
| 204 | No Content | Operação bem-sucedida sem retorno |
| 400 | Bad Request | Dados inválidos enviados pelo cliente |
| 401 | Unauthorized | Não autenticado |
| 403 | Forbidden | Autenticado, mas sem permissão |
| 404 | Not Found | Recurso não encontrado |
| 409 | Conflict | Conflito com o estado atual (ex: email já existe) |
| 422 | Unprocessable | Validação de negócio falhou |
| 429 | Too Many Requests | Rate limit atingido |
| 500 | Internal Server Error | Erro inesperado no servidor |

**Regra crítica:** Nunca retorne 200 com `{ "success": false }` no corpo. Use o código HTTP correto.

### Paginação

Escolha um padrão e seja consistente:

#### Paginação por Offset

```json
GET /users?page=2&per_page=20

{
  "data": [...],
  "pagination": {
    "current_page": 2,
    "per_page": 20,
    "total": 342,
    "total_pages": 18
  }
}
```

#### Cursor-Based Pagination (mais eficiente para grandes volumes)

```json
GET /users?cursor=eyJpZCI6MTAwfQ&limit=20

{
  "data": [...],
  "next_cursor": "eyJpZCI6MTIwfQ",
  "has_more": true
}
```

---

## Autenticação e Autorização

### JWT (JSON Web Tokens)

Estrutura do token:

```
header.payload.signature

eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMiLCJleHAiOjE3MDAwMDB9.abc123
```

**Boas práticas:**

1. **Tempo de expiração curto** para access tokens (15-60 minutos)
2. **Refresh tokens** de longa duração armazenados de forma segura
3. **Não armazene dados sensíveis** no payload (é base64, não criptografia)
4. **Valide a assinatura** em cada requisição
5. **Use HTTPS** sempre — tokens em plain text são um desastre

### API Keys

Para integrações server-to-server:

- Gere chaves com entropia alta (32+ bytes aleatórios)
- Permita ao usuário criar múltiplas chaves com escopos diferentes
- Mostre a chave **apenas uma vez** no momento da criação
- Implemente rotação e revogação fácil
- Registre todos os usos nos logs

### OAuth 2.0

Para autorização de terceiros acessarem dados do usuário:

1. **Authorization Code Flow** — para apps web com backend
2. **PKCE Flow** — para apps mobile e SPAs
3. **Client Credentials** — para comunicação server-to-server
4. **Device Flow** — para dispositivos sem teclado

---

## Rate Limiting: Proteção Essencial

Toda API pública precisa de rate limiting:

```
HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1700000000
Retry-After: 60

{
  "error": "rate_limit_exceeded",
  "message": "Você atingiu o limite de 1000 requisições por hora",
  "retry_after_seconds": 60
}
```

### Estratégias de Rate Limiting

- **Fixed Window:** Limite por janela fixa (ex: 1000/hora)
- **Sliding Window:** Janela deslizante mais precisa
- **Token Bucket:** Permite bursts controlados
- **Leaky Bucket:** Taxa de saída constante

---

## Versionamento de APIs

Toda API precisa de uma estratégia de versionamento:

### Via URL (mais comum)

```
/v1/users
/v2/users
```

**Prós:** Explícito, fácil de testar
**Contras:** Proliferação de versões no codebase

### Via Header

```
Accept: application/vnd.myapi.v2+json
```

**Prós:** URL limpa
**Contras:** Menos visível, dificulta testes manuais

### Estratégia de Deprecação

1. Anuncie a deprecação com **mínimo de 6 meses** de antecedência
2. Adicione header `Sunset` nas respostas da versão antiga
3. Envie e-mails diretos para clientes usando a versão antiga
4. Mantenha a versão antiga funcional por todo o período
5. Apenas então remova após a data anunciada

---

## Documentação: Ninguém Usa o Que Não Entende

### OpenAPI / Swagger

O padrão da indústria para documentar APIs REST:

```yaml
openapi: 3.0.0
info:
  title: Foxi API
  version: 1.0.0

paths:
  /users/{id}:
    get:
      summary: Buscar usuário por ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Usuário encontrado
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: Usuário não encontrado
```

### O Que Boa Documentação Tem

- **Guia de início rápido** que funciona em menos de 10 minutos
- **Referência completa** de todos os endpoints
- **Exemplos de código** em pelo menos 3 linguagens
- **Playground interativo** (Swagger UI, Postman collection)
- **Guias de casos de uso** comuns
- **Changelog** com todas as mudanças por versão

---

## Tratamento de Erros

Erros bem estruturados economizam horas de debug:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Os dados enviados são inválidos",
    "details": [
      {
        "field": "email",
        "code": "INVALID_FORMAT",
        "message": "O e-mail fornecido não é válido"
      },
      {
        "field": "phone",
        "code": "REQUIRED",
        "message": "O campo telefone é obrigatório"
      }
    ],
    "request_id": "req_abc123xyz",
    "documentation_url": "https://docs.foxi.com/errors/VALIDATION_ERROR"
  }
}
```

**Sempre inclua:**

- Código de erro único e estável (para programar contra)
- Mensagem legível por humanos
- Request ID para rastreamento nos logs
- Link para documentação detalhada do erro

---

## Checklist de API Pronta para Produção

### Design

- [ ] Nomenclatura consistente e seguindo REST corretamente
- [ ] Códigos HTTP adequados para cada situação
- [ ] Paginação implementada em todos os endpoints de lista
- [ ] Filtragem e ordenação documentadas

### Segurança

- [ ] HTTPS obrigatório (sem fallback para HTTP)
- [ ] Autenticação implementada corretamente
- [ ] Rate limiting configurado
- [ ] Validação de input em todas as entradas
- [ ] CORS configurado adequadamente

### Observabilidade

- [ ] Logs estruturados com request_id em cada requisição
- [ ] Métricas de latência e taxa de erro
- [ ] Alertas para aumento de erros 5xx
- [ ] Dashboard de uso por cliente

---

*André Lima escreve sobre arquitetura de software no newsletter **"Arquitetura Prática"**. Assine gratuitamente no link da descrição.*

# Referência Rápida

> Diretrizes de resposta e padrões comuns para Tailwind CSS v4.

---

## Diretrizes de Resposta

Ao ajudar com Tailwind CSS:

1. **Sempre use a sintaxe v4** — Sem `tailwind.config.js`, use `@theme` no CSS.
2. **Use as ferramentas MCP primeiro** — Obtenha a documentação atual antes de responder.
3. **Prefira variáveis de tema** — `bg-primary` em vez de `bg-blue-500`.
4. **Inclua acessibilidade** — Adicione `focus-visible`, `sr-only` onde apropriado.
5. **Mostre exemplos completos** — Inclua todas as classes necessárias.
6. **Explique as escolhas de classes** — Ajude os usuários a entender o porquê.

---

### Fluxo de Resposta de Exemplo

**Usuário:** "Como crio um botão com efeito de hover?"

**Resposta:**

1. Use `mcp__tailwindcss__get_tailwind_utilities` para utilitários relacionados a botões.
2. Forneça um exemplo com a ordenação correta de classes:

   ```html
   <button class="px-4 py-2 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-colors">
     Clique aqui
   </button>
   ```

3. Explique as classes usadas.
4. Sugira extrair para um componente se for usado várias vezes.

---

## Referência Rápida

### Escala de Espaçamento

| Classe | Tamanho |
| --- | --- |
| 1 | 0.25rem (4px) |
| 2 | 0.5rem (8px) |
| 3 | 0.75rem (12px) |
| 4 | 1rem (16px) |
| 5 | 1.25rem (20px) |
| 6 | 1.5rem (24px) |
| 8 | 2rem (32px) |
| 10 | 2.5rem (40px) |
| 12 | 3rem (48px) |
| 16 | 4rem (64px) |

---

### Padrões Comuns

```html
<!-- Conteúdo centralizado -->
<div class="flex items-center justify-center">

<!-- Card -->
<div class="p-6 bg-card rounded-xl border border-border shadow-sm">

<!-- Grid responsivo -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- Texto truncado -->
<p class="truncate">Texto longo que será truncado...</p>

<!-- Fundo com gradiente -->
<div class="bg-gradient-to-r from-primary to-secondary">

<!-- Cabeçalho fixo -->
<header class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
```

---

*Para a documentação mais recente, consulte sempre [tailwindcss.com/docs](https://tailwindcss.com/docs)*

# Antipadrões do v4 a Evitar

> Guia de antipadrões e erros comuns ao trabalhar com Tailwind CSS v4.

---

## NÃO USE (padrões do v3)

| Errado (v3) | Correto (v4) |
| --- | --- |
| `tailwind.config.js` | Diretiva CSS `@theme { }` |
| `@tailwind base;` | `@import "tailwindcss";` |
| `@tailwind components;` | (incluído no import) |
| `@tailwind utilities;` | (incluído no import) |
| `darkMode: 'class'` na config | `@variant dark { }` no CSS |
| `theme.extend.colors` in JS | `--color-*` no @theme |
| `content: [...]` in JS | `@source "..."` no CSS |

---

## Erros Comuns

```html
<!-- Errado: Estilos inline quando existe utilitário -->
<div style="display: flex; gap: 1rem;">

<!-- Correto -->
<div class="flex gap-4">

<!-- Errado: valores em px quando existe escala -->
<div class="p-[16px]">

<!-- Correto -->
<div class="p-4">

<!-- Errado: Utilitários duplicados -->
<div class="p-4 p-6">

<!-- Correto -->
<div class="p-6">

<!-- Errado: Utilitários conflitantes -->
<div class="flex block">

<!-- Correto: Escolha um -->
<div class="flex">
```

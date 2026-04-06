# Sintaxe Principal do Tailwind CSS v4

> Resumo da nova sintaxe do Tailwind CSS v4 e principais mudanças em relação à versão 3.

---

**CRÍTICO**: O Tailwind v4 mudou significativamente em relação ao v3. Sempre use a sintaxe v4.

---

## Ponto de Entrada CSS

```css
@import "tailwindcss";
```

Este único import substitui as antigas diretivas `@tailwind base; @tailwind components; @tailwind utilities;`.

---

## Configuração de Tema (diretiva @theme)

Toda a personalização do tema é feita no CSS, não no JavaScript:

```css
@theme {
  /* Cores - use oklch para melhor manipulação de cores */
  --color-primary: oklch(0.6 0.2 250);
  --color-primary-foreground: oklch(1 0 0);
  --color-secondary: oklch(0.5 0.02 250);
  --color-secondary-foreground: oklch(1 0 0);

  /* Cores semânticas */
  --color-background: oklch(1 0 0);
  --color-foreground: oklch(0.145 0 0);
  --color-muted: oklch(0.95 0 0);
  --color-muted-foreground: oklch(0.4 0 0);
  --color-border: oklch(0.9 0 0);
  --color-destructive: oklch(0.55 0.25 25);

  /* Famílias de fontes */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Fira Code", ui-monospace, monospace;

  /* Espaçamento personalizado (estende a escala padrão) */
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;

  /* Raio de borda personalizado */
  --radius-4xl: 2rem;
}
```

---

## Detecção de Origem (diretiva @source)

O Tailwind detecta automaticamente a maioria dos arquivos de template. Use `@source` para caminhos personalizados:

```css
@source "./templates/**/*.templ";
@source "./components/**/*.html";
@source "./src/**/*.{js,jsx,ts,tsx,vue,svelte}";
```

---

## Modo Escuro (diretiva @variant)

```css
@variant dark {
  --color-background: oklch(0.145 0 0);
  --color-foreground: oklch(0.985 0 0);
  --color-muted: oklch(0.25 0 0);
  --color-muted-foreground: oklch(0.6 0 0);
  --color-border: oklch(0.3 0 0);
  --color-card: oklch(0.205 0 0);
}
```

---

## Camada de Componentes (@layer components)

Extraia padrões repetidos:

```css
@layer components {
  .btn {
    @apply px-4 py-2 rounded-lg font-medium transition-colors;
  }

  .btn-primary {
    @apply btn bg-primary text-primary-foreground hover:bg-primary/90;
  }

  .btn-secondary {
    @apply btn bg-secondary text-secondary-foreground hover:bg-secondary/90;
  }

  .card {
    @apply p-6 bg-card rounded-xl border border-border shadow-sm;
  }
}
```

---

## Plugins (diretiva @plugin)

```css
@plugin "@tailwindcss/typography";
```

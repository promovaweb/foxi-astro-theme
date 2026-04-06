# Melhores Práticas

> Diretrizes para escrita de código Tailwind CSS limpo, eficiente e acessível.

---

## Convenção de Ordenação de Classes

Ordene os utilitários de forma consistente para facilitar a leitura:

**Ordem:** layout -> espaçamento -> dimensionamento -> tipografia -> cores -> efeitos -> interativo

```html
<!-- Bom: Ordem lógica -->
<div class="flex items-center gap-4 p-4 w-full text-sm text-gray-700 bg-white shadow-sm hover:bg-gray-50 transition-colors">

<!-- Ruim: Ordem aleatória -->
<div class="hover:bg-gray-50 flex bg-white p-4 text-sm shadow-sm w-full gap-4 items-center text-gray-700 transition-colors">
```

---

## Design Responsivo

Mobile-first: estilos base para mobile, adicione breakpoints para telas maiores.

```html
<!-- Mobile-first -->
<div class="w-full md:w-1/2 lg:w-1/3">

<!-- Breakpoints -->
sm: 640px   <!-- Dispositivos pequenos -->
md: 768px   <!-- Dispositivos médios -->
lg: 1024px  <!-- Dispositivos grandes -->
xl: 1280px  <!-- Extra grande -->
2xl: 1536px <!-- 2X grande -->
```

---

## Regra de Extração de Componentes

Extraia quando uma combinação de classes aparecer **3 ou mais vezes**:

```css
/* Em vez de repetir no HTML */
@layer components {
  .flex-center {
    @apply flex items-center justify-center;
  }

  .text-muted {
    @apply text-sm text-muted-foreground;
  }
}
```

---

## Use Variáveis de Tema

Sempre prefira variáveis de tema em vez de valores hardcoded:

```html
<!-- Bom: Usa variável de tema -->
<div class="bg-primary text-primary-foreground">

<!-- Ruim: Cor hardcoded -->
<div class="bg-[#3b82f6] text-white">
```

---

## Acessibilidade

```html
<!-- Estados de foco -->
<button class="focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none">

<!-- Apenas para leitores de tela -->
<span class="sr-only">Fechar menu</span>

<!-- Garanta o contraste -->
<!-- Use cores oklch com diferença de luminosidade suficiente -->
```

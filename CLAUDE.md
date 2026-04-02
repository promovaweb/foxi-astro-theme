# Claude Code — Instruções do Projeto Foxi Astro Theme

## Idioma

**Todo o código, comentários, documentação, nomes de variáveis descritivas, textos de interface e respostas geradas para este projeto devem estar em Português do Brasil (pt-BR).** Isso inclui comentários em arquivos `.astro`, `.ts` e `.css`, conteúdo de componentes, mensagens de erro e qualquer texto visível ao usuário.

**Regra importante: Não é permitido traduzir termos técnicos (ex: props, slot, layout, frontmatter, etc.). Mantenha os termos técnicos em sua forma original.**

---

## Referência ao Design System

**Antes de criar, modificar ou estender qualquer componente, página, bloco ou estilo neste projeto, leia o `DESIGN.md`.**

O `DESIGN.md` é a fonte única de verdade para a linguagem visual deste projeto. Ele documenta a paleta de cores, a escala tipográfica, as regras de espaçamento, o sistema de layout, todos os componentes existentes (com suas props), as convenções e os arquivos de configuração.

### Quando consultar o DESIGN.md

- Criar um novo componente `.astro` → verificar convenções de componentes, padrões de classe BEM, estilo de tipagem de props, padrão de slot
- Adicionar uma nova cor → sempre usar um token existente das escalas `primary-*` ou `neutral-*`; nunca introduzir valores hex arbitrários
- Adicionar um novo tamanho de fonte ou nível de título → seguir a escala tipográfica estabelecida exatamente
- Criar uma nova página ou seção → usar os primitivos de layout `<Section>`, `<Row>`, `<Col>`; não criar wrappers de grid customizados
- Adicionar elementos interativos → preferir os componentes existentes `<Button>`, `<Accordion>`, `<Modal>` antes de criar novos
- Lidar com modo escuro → todo elemento visual deve ter variantes `dark:` do Tailwind conforme documentado
- Adicionar ícones → usar apenas ícones SVG de `src/icons/` via `<Icon name="..." />` do `astro-icon`

---

## Regras Absolutas (Nunca Quebrar)

1. **Idioma pt-BR** — Todos os comentários, textos, documentação e respostas devem estar em Português do Brasil.
2. **Apenas tokens de cor** — Usar tokens `primary-*` e `neutral-*` de `tailwind.config.mjs`. Não adicionar valores hex brutos nem novas escalas de cores.
3. **Estilos escopados com @apply** — Estilos de componentes ficam em um bloco `<style>` usando `@apply`. Sem atributos `style=""` inline para propriedades de design.
4. **Nomenclatura BEM** — Classes CSS de componentes seguem o padrão `.block`, `.block__element`, `.block--modifier`.
5. **Props TypeScript** — Todo componente deve tipar suas props com `type Props = {}` no frontmatter do Astro.
6. **Responsivo mobile-first** — Estilos padrão para mobile. Usar `lg:` para sobrescritas no desktop. Nunca inverter isso.
7. **Modo escuro sempre** — Qualquer cor de fundo ou de texto deve ter um par `dark:`.
8. **Primitivos de layout** — Usar `<Section>` → `<Row>` → `<Col>` para todos os layouts de página. Não criar wrappers customizados de seção/linha/grid.
9. **Dados em config** — Conteúdo repetido (itens de nav, links do rodapé, listas de funcionalidades, dados de preços) deve ficar em `src/config/` ou `src/data/json-files/`. Nunca hardcodar nos componentes.
10. **Astro Image** — Usar o componente `<Image>` do Astro para todas as imagens estáticas. Nunca usar `<img>` bruto para novo conteúdo (o `<img>` legado nos logos de navegação/rodapé é aceitável).
11. **Famílias de fontes** — Texto de corpo usa `font-sans` (Inter). Títulos, logos, marcas usam `font-headings` (Outfit). Não introduzir outras famílias de fontes.

---

## Checklist de Criação de Componente

Ao criar um novo componente:

- [ ] Ler `DESIGN.md` para verificar componentes similares existentes antes de criar um novo
- [ ] Iniciar o arquivo com um bloco de comentário: `// NomeDoComponente`, `// Descrição:`, `// Propriedades:` (ver componentes existentes para o formato)
- [ ] Tipar todas as props com `type Props = {}`
- [ ] Usar `<slot />` para injeção de conteúdo
- [ ] Escrever `<style>` escopado com classes BEM e `@apply`
- [ ] Incluir variantes `dark:` para todas as classes de cor
- [ ] Usar `primary-500` como cor da marca/destaque
- [ ] Verificar se o nome do ícone existe em `src/icons/` antes de referenciá-lo
- [ ] Comentários e textos de interface em pt-BR

---

## Localização dos Arquivos

| O quê | Onde |
|---|---|
| Primitivos de UI | `src/components/ui/` |
| Blocos de página | `src/components/blocks/` |
| Estilos globais | `src/styles/global.css` |
| Config do Tailwind | `tailwind.config.mjs` |
| Config do site | `src/config/config.ts` |
| Config da navegação | `src/config/navigationBar.ts` |
| Config do rodapé | `src/config/footerNavigation.ts` |
| Links sociais | `src/config/socialLinks.ts` |
| Dados JSON | `src/data/json-files/` |
| Ícones | `src/icons/` |
| Páginas | `src/pages/` |
| Layouts | `src/layouts/` |

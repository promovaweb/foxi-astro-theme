# Foxi — Guia de Primeiros Passos (Getting Started)

> Este guia fornece o passo a passo completo para configurar um novo site do zero utilizando o Foxi Astro Theme. Siga esta lista em ordem para garantir que nada seja esquecido.

---

## 🚀 Checklist de Configuração

### 1. Identidade Visual e Design System

O coração do site é controlado pelo arquivo `src/styles/global.css`.

- [ ] **Paleta de Cores**: No bloco `:root`, altere os valores RGB das variáveis `--primary-*`.
- [ ] **Tipografia**: Se necessário, altere as variáveis `--font-sans` e `--font-headings`.
- [ ] **Logotipos**:
  - Substitua os arquivos em `public/logo.svg`.
  - Configure os caminhos e o texto da marca em `src/config/siteSettings.ts`.
- [ ] **Favicon**: Substitua o arquivo `public/favicon.svg`.

### 2. Configurações de Identidade (`src/config/siteSettings.ts`)

- [ ] **SEO**: Defina `siteTitle` e `siteDescription`.
- [ ] **Open Graph**: Substitua a imagem `public/og.jpg` e verifique a prop `ogImage`.
- [ ] **Social**: Insira os links para perfis sociais (Twitter, LinkedIn, Instagram, etc.).

### 3. Comportamento do App (`src/config/appSettings.ts`)

- [ ] **Tema Padrão**: Defina se o site inicia em `auto`, `light` ou `dark`.
- [ ] **Animações**: Habilite ou desabilite `scrollAnimations`.
- [ ] **Newsletter**: Configure a `newsletterUrl` do seu serviço de captura.
- [ ] **Podcast**: Se for usar, defina `podcastName` e `podcastDescription`.

### 4. Conteúdo e Navegação

- [ ] **Menus**: Organize os links de navegação em `src/config/navigationBar.ts`.
- [ ] **Rodapé**: Configure as colunas e o texto de copyright em `src/config/footerNavigation.ts`.
- [ ] **Blog**: Adicione os primeiros posts em `src/content/blog/` seguindo o [MARKDOWN.md](./MARKDOWN.md).
- [ ] **Podcast**: Adicione os episódios em `src/content/podcast/`.
- [ ] **Changelog**: Inicie o histórico de versões em `src/content/changelog/`.

### 5. Configurações Técnicas e Infra

- [ ] **Domínio**: Se for usar um subdiretório ou domínio específico, configure a prop `site` no `astro.config.mjs`.
- [ ] **Analytics**: Insira os IDs do Google Analytics / GTM em `src/config/analytics.ts`.
- [ ] **Robots**: Verifique as regras em `src/pages/robots.txt.ts`.

---

## 🛠️ Comandos Úteis

### Instalação e Desenvolvimento

```bash
npm install          # Instala as dependências
npm run dev          # Inicia o servidor de desenvolvimento
```

### Qualidade e Linting

```bash
npm run lint         # Executa o linter
npm run check        # Executa a checagem de tipos Astro/TS
```

### Documentação Automática

Sempre que criar componentes, consulte o guia de interface:

```bash
# Gemini CLI
/activate_skill ui-component

# Claude Code
/ui-component
```

---

## 💡 Próximos Passos

Após concluir a checklist, leia o [UI-COMPONENTS.md](./UI-COMPONENTS.md) para entender como construir novas páginas usando os blocos pré-configurados (Heros, Features, Bento Grids, etc.).

---

## 📝 Regra de Sincronização

Este arquivo deve ser atualizado se novos passos de configuração forem adicionados ao template base (ex: novas integrações de API ou serviços).

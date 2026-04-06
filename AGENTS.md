# Foxi — Instruções para Agentes de IA

> Este documento define como os agentes de IA (Gemini, Claude, etc.) devem operar neste projeto, garantindo consistência e segurança.

---

## 1. Referências Obrigatórias

Antes de realizar qualquer alteração, o agente deve consultar os arquivos de diretrizes:

- `GEMINI.md`: Regras absolutas e contexto do projeto.
- `CLAUDE.md`: Instruções específicas para Claude Code.
- `TYPESCRIPT.md`: Boas práticas de TypeScript e modularização de tipos.
- `MARKDOWN.md`: Padrões de formatação e linting de Markdown.
- `DESIGN.md`: Linguagem visual e Design System.

---

## 2. Sincronização de Documentação

Os arquivos `GEMINI.md`, `CLAUDE.md` e `AGENTS.md` devem estar sempre sincronizados em relação às regras de negócio e diretrizes técnicas. Sempre que uma mudança for aplicada em um destes arquivos, o agente **DEVE** replicar a alteração nos outros dois.

---

## 3. Fluxo de Trabalho

1. **Pesquisa**: Mapear o codebase e validar suposições.
2. **Estratégia**: Planejar a implementação com base nas regras dos arquivos de diretrizes.
3. **Execução**: Aplicar as mudanças cirurgicamente.
4. **Validação**: Executar testes e garantir integridade estrutural.

---

## 4. Regras Absolutas

- **Idioma pt-BR**: Toda comunicação técnica e de interface em Português do Brasil.
- **Aliases de Path**: Nunca usar caminhos relativos; sempre usar `@config/`, `@components/`, etc.
- **Tipagem**: Toda nova funcionalidade deve ser estritamente tipada seguindo o `TYPESCRIPT.md`.
- **Documentação Obrigatória (JSDoc)**: Todos os arquivos de definição em `src/types/` e arquivos de configuração em `src/config/` **DEVEM** conter documentação JSDoc em cada propriedade e estrutura (em pt-BR).
- **Trabalho com UI (ui-component)**: A skill `ui-component` é **obrigatória para TODO e QUALQUER trabalho que envolva interface**, novos componentes, páginas ou modificação de estilo. Antes de agir, ative a skill, consulte o `DESIGN.md` e o guia em `UI-COMPONENTS.md`.
- **Registro de Componentes**: Qualquer novo componente criado **DEVE** ser registrado no arquivo central `UI-COMPONENTS.md` com sua descrição e insight de uso.
- **Sincronização DESIGN.md / global.css**: O arquivo `DESIGN.md` deve estar sempre sincronizado com o `src/styles/global.css`. Qualquer alteração nas variáveis CSS, tokens semânticos ou regras globais deve ser imediatamente refletida no manual de design.
- **Sincronização de Skills/Comandos**: Qualquer capacidade (skill/comando) criada ou modificada nos diretórios `.gemini/skills/` ou `.claude/commands/` deve ser replicada no outro diretório para manter a equivalência entre as ferramentas.
- **Conventional Commits**: Todo commit solicitado pelo usuário **DEVE** seguir o padrão: `tipo(escopo): descrição` (ex: `feat(ui): adiciona modal`, `fix(config): corrige alias`). Tipos válidos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.
- **Separação de Lógica**: Lógica complexa de manipulação de dados deve ser extraída do frontmatter de arquivos `.astro` para funções puras e testáveis em `src/utils/` ou `src/lib/`.
- **Formatação de Markdown (OBRIGATÓRIO)**: Ao final de QUALQUER tarefa que crie ou modifique um arquivo `.md`, você **DEVE OBRIGATORIAMENTE** ativar e executar a skill `markdown-format` (Gemini) ou comando `markdown-format` (Claude). Não finalizar uma tarefa sem garantir que o linting passou.

---
title: 'Guia Completo de Produtividade com o Foxi'
pubDate: 2024-07-10T08:00:00Z
description: 'Aprenda a usar todos os recursos do Foxi para maximizar sua produtividade. Este guia completo cobre desde a configuração inicial até as funcionalidades avançadas.'
author: 'luizeof'
image: '/blog/post-01-cover.png'
tags: ['produtividade', 'guia', 'dicas']
---

A produtividade não é sobre fazer mais coisas — é sobre fazer as **coisas certas** no momento certo. O Foxi foi criado com essa filosofia em mente, oferecendo um conjunto de ferramentas que trabalham juntas para que você alcance seus objetivos com menos esforço e mais foco.

![Painel de controle do Foxi mostrando tarefas organizadas](/blog/post-01.png)

Neste guia, vamos explorar cada recurso disponível, com dicas práticas para que você tire o máximo proveito da plataforma desde o primeiro dia.

---

## Por Onde Começar

### 1. Configure seu Perfil

Antes de qualquer coisa, acesse as **Configurações do Perfil** e preencha:

- Nome completo e foto de avatar
- Fuso horário correto (essencial para notificações)
- Preferências de idioma
- Integração com calendário externo

### 2. Crie seu Primeiro Projeto

Todo trabalho no Foxi começa com um **Projeto**. Pense no projeto como um contêiner para tudo relacionado a um objetivo específico.

> "Um objetivo sem um plano é apenas um desejo." — Antoine de Saint-Exupéry

---

## Hierarquia de Tarefas

O Foxi suporta uma hierarquia de 4 níveis para organização das tarefas:

| Nível | Tipo | Descrição | Limite |
|-------|------|-----------|--------|
| 1 | Projeto | Objetivo macro | Ilimitado |
| 2 | Épico | Agrupamento de funcionalidades | 100 por projeto |
| 3 | Tarefa | Unidade de trabalho | 1.000 por épico |
| 4 | Subtarefa | Detalhe da tarefa | 50 por tarefa |

---

## Técnicas de Produtividade Integradas

### Método Pomodoro

O Foxi inclui um temporizador Pomodoro nativo. O ciclo padrão é:

1. Trabalhe por **25 minutos** com foco total
2. Faça uma pausa de **5 minutos**
3. Após 4 ciclos, faça uma pausa longa de **15 a 30 minutos**
4. Reinicie o processo

### Matriz de Eisenhower

Classifique suas tarefas por urgência e importância:

1. **Urgente e Importante** → Faça agora
2. **Importante, não urgente** → Agende
3. **Urgente, não importante** → Delegue
4. **Nem urgente, nem importante** → Elimine

---

## Atalhos de Teclado Essenciais

Dominar os atalhos aumenta sua velocidade em até **40%**. Os mais usados:

- `Ctrl + N` — Nova tarefa
- `Ctrl + K` — Busca rápida
- `Ctrl + /` — Abrir ajuda de atalhos
- `Ctrl + Shift + P` — Paleta de comandos
- `G` depois de `D` — Ir para Dashboard

---

## Configuração via Linha de Comando

O Foxi CLI permite gerenciar tarefas diretamente do terminal. Instale e configure com:

```bash
# Instalar o Foxi CLI via npm
npm install -g @foxi/cli

# Autenticar com seu token de API
foxi auth login --token SEU_TOKEN_AQUI

# Verificar configuração atual
foxi config list
```

Após autenticar, crie e liste tarefas sem sair do terminal:

```bash
# Criar uma nova tarefa no projeto atual
foxi task create "Revisar documentação da API" \
  --project proj_abc123 \
  --priority high \
  --due "2024-12-31"

# Listar tarefas abertas
foxi task list --status todo --assignee @me

# Marcar tarefa como concluída
foxi task complete task_xyz789
```

Script de automação para sincronizar tarefas recorrentes:

```bash
#!/bin/bash
# sync-tarefas-recorrentes.sh
# Cria as tarefas semanais todo domingo à noite

PROJETO="proj_semanal"
RESPONSAVEL="luiz@empresa.com"

tarefas=(
  "Revisar backlog da semana"
  "Atualizar OKRs no Foxi"
  "Enviar relatório semanal para o gestor"
  "Limpar caixa de entrada de e-mails"
)

for tarefa in "${tarefas[@]}"; do
  foxi task create "$tarefa" \
    --project "$PROJETO" \
    --assignee "$RESPONSAVEL" \
    --due "next monday"
  echo "✅ Criada: $tarefa"
done

echo "🎯 ${#tarefas[@]} tarefas semanais criadas com sucesso!"
```

---

## Integrações Disponíveis

O Foxi se conecta nativamente com diversas ferramentas:

- **Comunicação:** Slack, Microsoft Teams, Discord
- **Repositórios:** GitHub, GitLab, Bitbucket
- **Calendários:** Google Calendar, Outlook, Apple Calendar
- **Armazenamento:** Google Drive, Dropbox, OneDrive
- **CI/CD:** GitHub Actions, CircleCI, Jenkins

---

## Conclusão

Com este guia, você tem tudo que precisa para começar a usar o Foxi com máxima eficiência. Lembre-se: a produtividade é uma habilidade que se desenvolve com a prática. Comece pequeno, seja consistente e ajuste conforme necessário.

*Alguma dúvida? Acesse nossa central de ajuda ou entre em contato com o suporte.*

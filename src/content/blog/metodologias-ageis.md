---
title: 'Metodologias Ágeis na Prática: Scrum, Kanban e Shape Up'
pubDate: 2024-08-20T08:30:00Z
description: 'Compare as principais metodologias ágeis — Scrum, Kanban e Shape Up — e descubra qual se encaixa melhor no seu contexto, com exemplos práticos de implementação.'
author: 'luizeof'
image: '/blog/post-04-cover.png'
tags: ['ágil', 'scrum', 'kanban', 'gestão']
---

O manifesto ágil completou mais de duas décadas de existência, mas a confusão sobre **qual metodologia usar** continua sendo um dos maiores pontos de dúvida para equipes de produto e tecnologia. Scrum? Kanban? SAFe? Shape Up? XP?

Neste artigo, vamos desmistificar as três abordagens mais populares e ajudá-lo a tomar uma decisão informada para o seu contexto.

---

## O Que É "Ser Ágil"?

Antes de comparar metodologias, é essencial entender o que elas têm em comum. Os 4 valores do Manifesto Ágil:

> **Indivíduos e interações** mais que processos e ferramentas
> **Software em funcionamento** mais que documentação abrangente
> **Colaboração com o cliente** mais que negociação de contratos
> **Responder a mudanças** mais que seguir um plano

Esses valores são o *porquê*. As metodologias são o *como*. Nenhuma metodologia é universalmente superior — cada uma serve melhor a contextos diferentes.

---

## Scrum

### O Que É

Scrum é um framework de gestão para desenvolvimento iterativo e incremental. Trabalho é organizado em **Sprints** de duração fixa (geralmente 2 semanas).

### Os Três Pilares do Scrum

1. **Transparência** — Todo o trabalho e progresso é visível para todos
2. **Inspeção** — Revisão frequente do progresso em direção à meta
3. **Adaptação** — Ajuste rápido quando algo não está no caminho certo

### Papéis no Scrum

| Papel | Responsabilidade | Tempo dedicado |
|-------|-----------------|---------------|
| Product Owner | Priorização do backlog, visão do produto | 100% |
| Scrum Master | Facilitação, remoção de impedimentos | 50–100% |
| Dev Team | Desenvolvimento e entrega | 100% |

### Cerimônias Obrigatórias

- **Sprint Planning** (4h para sprint de 2 semanas) — Define o que será feito
- **Daily Scrum** (15min) — Sincronização diária da equipe
- **Sprint Review** (2h) — Demonstração do incremento entregue
- **Sprint Retrospective** (1.5h) — Melhoria do processo

### Quando Usar Scrum

- Projetos com escopo em evolução
- Times de 3 a 9 pessoas
- Produto com usuários que podem dar feedback frequente
- Organização disposta a investir em treinamento e cerimônias

---

## Kanban

### O Que É

Kanban é um método de gestão de fluxo de trabalho baseado em três princípios fundamentais:

1. Visualize o trabalho
2. Limite o trabalho em progresso (WIP)
3. Gerencie e melhore o fluxo

### Métricas do Kanban

Kanban é orientado a dados. As métricas principais são:

- **Lead Time** — Tempo desde a solicitação até a entrega
- **Cycle Time** — Tempo desde o início do trabalho até a entrega
- **Throughput** — Quantidade de itens entregues por período
- **WIP** — Quantidade de itens em andamento simultaneamente

### Comparação entre Colunas Típicas

| Coluna | Significado | Limite WIP sugerido |
|--------|-------------|---------------------|
| Backlog | Trabalho priorizado aguardando início | Sem limite |
| A Fazer | Prontos para serem iniciados | 3–5 |
| Em Progresso | Sendo trabalhados agora | 1–2 por pessoa |
| Em Revisão | Aguardando revisão ou aprovação | 3 |
| Concluído | Entregues | Sem limite |

### Quando Usar Kanban

- Times de suporte e operações
- Trabalho com fluxo contínuo e demanda variável
- Equipes que já trabalham com Scrum e querem mais flexibilidade
- Manutenção e bugfix de sistemas em produção

---

## Shape Up (Basecamp)

### O Que É

Shape Up é a metodologia desenvolvida pelo Basecamp (criadores do Hey e do próprio Shape Up). É radicalmente diferente do Scrum e Kanban.

### Os Ciclos do Shape Up

O trabalho é organizado em ciclos de **6 semanas** (ao contrário das sprints curtas do Scrum):

1. **Shaping** (2 semanas) — Gestão define o *pitch* do trabalho com nível de detalhe suficiente
2. **Betting** (1 semana) — Decisão de quais pitches serão construídos no próximo ciclo
3. **Building** (6 semanas) — Times autônomos constroem e entregam

### Conceitos Exclusivos do Shape Up

- **Appetite** — Quanto tempo a empresa está disposta a investir (ao contrário de estimativas)
- **Breadboard** — Esboço de fluxo de navegação sem design visual
- **Fat Marker Sketch** — Rascunho grosseiro de layout, intencional para deixar espaço à criatividade
- **Hill Chart** — Gráfico que mostra progresso em termos de "descoberta" e "execução"
- **Circuit Breaker** — Se o trabalho não for entregue em 6 semanas, o projeto é cancelado automaticamente

### Quando Usar Shape Up

- Times de produto pequenos e autônomos (2–3 pessoas)
- Organizações que querem reduzir cerimônias e reuniões
- Produtos com roadmap bem definido mas problemas que precisam ser "esculpidos"
- Empresas cansadas de sprints com entrega incompleta

---

## Comparativo Final

| Critério | Scrum | Kanban | Shape Up |
|----------|-------|--------|----------|
| Ciclo de entrega | 1–4 semanas | Contínuo | 6 semanas |
| Papéis definidos | Sim (3 papéis) | Não | Sim (Shaper + Builder) |
| Reuniões | Muitas e regulares | Poucas | Muito poucas |
| Estimativas | Story Points | Opcional | Appetite (fixo) |
| Ideal para | Times de desenvolvimento | Suporte e ops | Times de produto |
| Curva de aprendizado | Média | Baixa | Alta |
| Documentação | Backlog estruturado | Board visual | Pitches escritos |

---

## Como Escolher?

Use este fluxo de decisão:

1. Seu trabalho tem **demanda contínua e imprevisível**? → **Kanban**
2. Seu time tem **menos de 5 pessoas e alta autonomia**? → **Shape Up**
3. Você precisa de **estrutura, previsibilidade e cerimônias**? → **Scrum**
4. Está em **manutenção e desenvolvimento simultâneos**? → **Kanban + Scrum (Scrumban)**

---

> "A melhor metodologia é aquela que sua equipe realmente pratica, não a que está escrita no manual."

O Foxi suporta todos esses frameworks nativamente. Configure sprints para Scrum, boards Kanban visuais ou ciclos customizados para Shape Up — tudo na mesma plataforma.

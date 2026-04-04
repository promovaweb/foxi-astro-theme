---
title: "10: Métricas que Importam: Do Dado à Decisão"
description: "Head of Data de uma unicórnio brasileira revela como transformar dashboards bonitos em decisões reais de negócio. A diferença entre empresas data-driven e data-informed — e por que essa distinção muda tudo."
pubDate: 2024-03-13
youtubeId: "aqz-KE-bpKQ"
cover: "/blog/post-04-cover.png"
author: "luizeof"
---

Toda empresa moderna tem dashboards. Poucas têm decisões melhores por causa deles. A diferença entre *data-driven* e *data-informed* não é semântica — é filosófica. Neste episódio, Fernanda Luz, Head of Data de uma empresa com mais de 2 milhões de usuários, explica como transformar números em ações reais.

![Analista de dados trabalhando em um dashboard com múltiplos gráficos](/blog/post-04.png)

---

## O Problema com "Ser Data-Driven"

> "Quando uma empresa diz que é data-driven, geralmente significa que usa dados para confirmar decisões que já foram tomadas com base em intuição. Isso não é data-driven — é *HiPPO-driven* com estatísticas para embelezar." — **Fernanda Luz, Head of Data**

*HiPPO = Highest Paid Person's Opinion (Opinião da Pessoa Mais Bem Paga)*

### Data-Driven vs Data-Informed

| Abordagem | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **Data-Driven** | Os dados decidem automaticamente | Decisões operacionais repetíveis, testes A/B com alta confiança |
| **Data-Informed** | Os dados informam, humanos decidem | Decisões estratégicas, novos mercados, situações sem histórico |
| **Data-Ignorant** | Intuição sem dados | Evitar — exceto no estágio 0, quando não há dados ainda |

---

## A Hierarquia de Dados

### Nível 1 — Coleta

Você não pode analisar o que não coleta:

- **Eventos de produto:** clicks, pageviews, conversões
- **Dados de negócio:** receita, contratos, cancelamentos
- **Dados operacionais:** uptime, latência, erros
- **Dados de cliente:** NPS, tickets, entrevistas

### Nível 2 — Armazenamento e Organização

Arquitetura moderna de dados:

```
[Fontes] → [Ingestão] → [Data Warehouse] → [Transformação] → [BI/Analytics]

Exemplos:
Stripe + Salesforce + App → Fivetran → BigQuery → dbt → Metabase
```

### Nível 3 — Análise

Transformar dados brutos em insights:

- Análises descritivas: o que aconteceu?
- Análises diagnósticas: por que aconteceu?
- Análises preditivas: o que vai acontecer?
- Análises prescritivas: o que devemos fazer?

### Nível 4 — Decisão

O ponto que a maioria das empresas ainda não chegou:

- Insights precisam chegar às pessoas certas no momento certo
- Decisões tomadas com base em dados precisam ser rastreadas
- Resultados das decisões precisam ser medidos

---

## As Métricas Que Realmente Importam por Área

### Produto

#### North Star Metric

Uma única métrica que captura o valor que o produto entrega ao cliente:

| Empresa | North Star Metric |
|---------|-----------------|
| Spotify | Tempo escutado por usuário por mês |
| Airbnb | Noites reservadas |
| Facebook | DAU (Usuários Ativos Diários) |
| Foxi | Tarefas concluídas por semana por equipe |

#### Framework HEART (Google)

| Dimensão | Significado | Exemplo de Métrica |
|----------|-------------|-------------------|
| **H**appiness | Satisfação do usuário | NPS, CSAT |
| **E**ngagement | Uso ativo | Sessões por semana, tarefas criadas |
| **A**doption | Novos usuários usando funcionalidade | % ativação de nova feature |
| **R**etention | Usuários que voltam | Retenção D7, D30 |
| **T**ask Success | Usuários completam o que tentam | Taxa de conclusão de onboarding |

### SaaS / Receita

As métricas fundamentais de um negócio SaaS:

| Métrica | Fórmula | Benchmark Saudável |
|---------|---------|-------------------|
| MRR | Soma de todas as assinaturas mensais | Crescimento > 10% ao mês (early stage) |
| ARR | MRR × 12 | — |
| Churn Rate | Clientes cancelados / Total clientes | < 2% ao mês (SMB), < 0,5% (enterprise) |
| NRR | (MRR início + expansão - churn) / MRR início | > 100% (indica expansão líquida) |
| CAC | Gasto com vendas+marketing / Novos clientes | — |
| LTV | ARPU / Churn Rate | LTV/CAC > 3x |
| Payback Period | CAC / (ARPU × Margem bruta) | < 12 meses |

### Marketing

- **Tráfego orgânico:** visitantes via SEO
- **Taxa de conversão:** visitantes que se tornam leads
- **CPL:** Custo por Lead
- **MQL → SQL rate:** Taxa de qualificação de leads
- **Attribution:** Qual canal gera os melhores clientes

---

## Como Construir um Dashboard Que Gera Ação

A maioria dos dashboards tem o problema oposto do esperado: **informação demais**.

### Os 5 Erros Mais Comuns

1. **Métricas de vaidade:** pageviews, followers, downloads sem correlação com receita
2. **Sem contexto temporal:** um número sem tendência não diz nada
3. **Sem benchmark:** 1.000 usuários ativos é bom ou ruim? Depende do contexto
4. **Sem dono:** dashboard que é de todos não é de ninguém
5. **Sem ação associada:** se o número cair, o que faremos?

### O Modelo de Dashboard Eficiente

Para cada métrica no dashboard, defina:

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| Nome | Nome claro da métrica | Taxa de Ativação D7 |
| Definição | Como é calculada exatamente | % de usuários que criam ao menos 1 tarefa nos primeiros 7 dias |
| Dono | Quem é responsável | Head de Produto |
| Meta | Qual é o target | 65% |
| Sinal de alerta | Quando acionar investigação | < 55% por 3 dias consecutivos |
| Ação padrão | O que fazer quando o alerta dispara | Revisar funil de onboarding + entrevistar usuários que não ativaram |

---

## Testes A/B: A Ferramenta Mal Usada

### O Que Torna um Teste Válido

1. **Hipótese clara:** "Acreditamos que mudar o CTA de 'Cadastrar' para 'Começar Grátis' aumentará a conversão porque..."
2. **Tamanho de amostra suficiente:** Use uma calculadora de poder estatístico
3. **Duração adequada:** Mínimo de 1 ciclo de negócio completo (geralmente 2 semanas)
4. **Uma variável por vez:** Testar múltiplas mudanças simultâneas invalida o teste
5. **Nível de confiança definido antes:** 95% é o padrão, 90% pode ser aceitável em decisões de baixo risco

### Erros Clássicos em Testes A/B

- **Parar o teste cedo** quando vê resultado positivo (peeking problem)
- **Testar amostras muito pequenas** sem significância estatística
- **Celebrar variações de 0,1%** sem avaliar impacto real no negócio
- **Não testar nada** porque "já sabemos o que funciona"
- **Testar tudo** sem foco nas métricas que realmente movem o negócio

---

## Análise de Coorte: Entendendo Retenção

Análise de coorte é a ferramenta mais poderosa para entender retenção:

```
Coorte       | Semana 0 | Semana 1 | Semana 2 | Semana 4 | Semana 8
-------------|----------|----------|----------|----------|----------
Jan/2024     | 100%     | 62%      | 48%      | 35%      | 28%
Fev/2024     | 100%     | 65%      | 51%      | 39%      | 31%
Mar/2024     | 100%     | 71%      | 58%      | 44%      | —
```

**O que analisar:**
- A retenção está melhorando entre coortes? (produto melhorando)
- Onde está o maior drop? (onde atuar)
- Existe um "patamar de retenção"? (indica produto-market fit)

---

## Ferramentas para Cada Estágio

### Estágio Inicial (até 10k usuários)

- **Google Analytics 4** — analytics web gratuito
- **Hotjar** — gravação de sessões e mapas de calor
- **Typeform** — pesquisas com clientes
- **Google Sheets / Notion** — análises simples

### Estágio de Crescimento (10k a 100k usuários)

- **Mixpanel ou Amplitude** — análise de eventos de produto
- **Metabase** — BI self-service para o time
- **Segment** — centralização de eventos
- **Stripe Dashboard** — métricas financeiras

### Estágio de Escala (100k+ usuários)

- **BigQuery + dbt** — data warehouse e transformações
- **Looker ou Tableau** — BI avançado
- **LaunchDarkly** — feature flags e testes A/B
- **DataDog** — observabilidade com correlação de negócio

---

*Quer aprender mais sobre analytics de produto? Fernanda tem um curso online gratuito — link na descrição do episódio.*

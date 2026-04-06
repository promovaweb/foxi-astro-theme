---
title: 'Onboarding de Times: Como Integrar Novos Colaboradores com Eficiência'
pubDate: 2024-10-22T08:00:00Z
description: 'Um onboarding bem estruturado reduz o tempo até a produtividade e aumenta a retenção. Saiba como criar um processo de integração que encante novos colaboradores e acelere resultados.'
author: 'luizeof'
image: '/blog/post-02-cover.png'
tags: ['rh', 'onboarding', 'cultura', 'times']
---

Os primeiros 90 dias de um novo colaborador são decisivos. Pesquisas mostram que **69% dos funcionários** têm maior probabilidade de ficar na empresa por 3 anos quando vivenciam um onboarding estruturado. Por outro lado, um onboarding mal executado pode custar entre **50% e 200% do salário anual** do colaborador em perda de produtividade, retrabalho e turnover precoce.

O onboarding não é um evento. É um processo.

---

## As Quatro Fases do Onboarding

### Fase 1: Pré-Boarding (Antes do Primeiro Dia)

O onboarding começa *antes* da data de início. O que deve acontecer nessa fase:

- Enviar e-mail de boas-vindas com informações práticas (horário, endereço, dress code, o que trazer)
- Criar contas de e-mail, Foxi e sistemas necessários
- Configurar estação de trabalho (equipamentos, acessos)
- Compartilhar material de leitura introdutório (cultura, missão, valores)
- Designar um *buddy* (colega que vai acompanhar o novato nos primeiros dias)

### Fase 2: Primeiro Dia

O primeiro dia define a primeira impressão. Torne-o memorável:

1. Recepcione pessoalmente (ou virtualmente) com entusiasmo genuíno
2. Apresente a equipe e a liderança
3. Faça um tour pelas instalações ou plataformas digitais
4. Almoce junto com o time
5. Apresente o plano de onboarding detalhado dos próximos 90 dias
6. Primeira reunião 1:1 com o gestor direto

### Fase 3: Primeiras Semanas (Dias 2–30)

Foco em **contexto e relacionamentos**:

- Reuniões com diferentes áreas da empresa (shadowing)
- Acesso gradual a sistemas e responsabilidades
- Check-ins frequentes com o buddy e o gestor
- Primeiro entregável pequeno para gerar senso de conquista
- Treinamentos obrigatórios (segurança, compliance, ferramentas)

### Fase 4: Consolidação (Dias 31–90)

Foco em **autonomia e contribuição**:

- Primeiras responsabilidades independentes
- Participação ativa em reuniões e decisões
- Definição formal de OKRs individuais
- Avaliação de 90 dias com feedback bidirecional

---

## O Plano de 30-60-90 Dias

Use esta estrutura como base para qualquer função:

| Período | Meta Principal | Critério de Sucesso |
| --- | --- | --- |
| 30 dias | Aprender | Conhece o produto, os processos e as pessoas-chave |
| 60 dias | Contribuir | Entrega trabalho com qualidade sem supervisão constante |
| 90 dias | Liderar | Toma decisões, resolve problemas, propõe melhorias |

---

## Checklist Completo de Onboarding

### Antes do Primeiro Dia

- [ ] Contrato assinado e documentação completa
- [ ] Equipamentos configurados e entregues
- [ ] Contas criadas: e-mail, Foxi, Slack, ferramentas específicas da função
- [ ] Buddy designado e briefado sobre o papel
- [ ] Agenda do primeiro dia enviada
- [ ] Material de boas-vindas preparado (kit, carta personalizada)
- [ ] Equipe avisada sobre a chegada do novo colaborador

### Primeira Semana

- [ ] Tour pela empresa / apresentação das plataformas digitais
- [ ] Apresentação formal para a equipe e liderança
- [ ] 1:1 com o gestor para alinhamento de expectativas
- [ ] Acesso a todos os sistemas necessários funcionando
- [ ] Treinamentos de onboarding iniciados
- [ ] Buddy check-in diário agendado
- [ ] Primeiro entregável definido

### Primeiro Mês

- [ ] Reuniões com todas as áreas com as quais vai colaborar
- [ ] Entendimento do produto/serviço (demo, uso real, feedback de clientes)
- [ ] Participação em pelo menos uma sprint ou ciclo de trabalho
- [ ] Avaliação informal de 30 dias realizada
- [ ] Dúvidas e bloqueios identificados e resolvidos

### 90 Dias

- [ ] OKRs individuais definidos e alinhados
- [ ] Avaliação formal de 90 dias com feedback documentado
- [ ] Plano de desenvolvimento individual (PDI) iniciado
- [ ] Integração à cultura verificada (pesquisa de engajamento)

---

## Onboarding Remoto: Desafios Específicos

O onboarding remoto exige atenção extra a pontos que no presencial acontecem naturalmente:

### O Problema da Câmera Desligada

Quando as câmeras ficam desligadas, o novato perde pistas não-verbais essenciais para entender a cultura. **Política sugerida:** câmeras ligadas nas primeiras 4 semanas de onboarding, especialmente em reuniões de equipe.

### O Silêncio que Isola

No escritório, você ouve conversas, participa de discussões informais, percebe o ritmo da equipe. Remotamente, isso não existe. Soluções:

- Canal #boas-vindas no Slack com interações ativas
- Café virtual casual (sem pauta, apenas conversa)
- Espaço virtual permanente (Gather.town) para interações espontâneas
- Canais temáticos de interesses (música, esportes, culinária)

---

## Métricas para Avaliar seu Onboarding

Acompanhe estes indicadores para melhorar continuamente:

- **Time to Productivity (TTP):** Quantos dias até o novo colaborador atingir 80% da produtividade esperada?
- **Retenção de 90 dias:** Percentual de novos contratados que permanecem após 3 meses
- **Net Promoter Score do Onboarding:** "De 0 a 10, você recomendaria nosso processo de onboarding?"
- **Satisfação do gestor:** Avaliação qualitativa da preparação do novo colaborador
- **Conclusão de treinamentos:** % de módulos obrigatórios concluídos no prazo

---

## Automatizando o Onboarding com Scripts

Este script cria automaticamente o projeto de onboarding no Foxi quando um novo colaborador é admitido:

```bash
#!/bin/bash
# criar-onboarding.sh
# Uso: ./criar-onboarding.sh "Nome Completo" "email@empresa.com" "cargo"

NOME="$1"
EMAIL="$2"
CARGO="$3"
TOKEN="${FOXI_API_TOKEN}"
TEMPLATE_ID="proj_template_onboarding"
DATA_INICIO=$(date +"%Y-%m-%dT%H:%M:%SZ")
DATA_30=$(date -d "+30 days" +"%Y-%m-%dT%H:%M:%SZ")
DATA_60=$(date -d "+60 days" +"%Y-%m-%dT%H:%M:%SZ")
DATA_90=$(date -d "+90 days" +"%Y-%m-%dT%H:%M:%SZ")

if [ -z "$NOME" ] || [ -z "$EMAIL" ]; then
  echo "❌ Uso: $0 'Nome Completo' 'email@empresa.com' 'cargo'"
  exit 1
fi

echo "🚀 Criando projeto de onboarding para: $NOME ($CARGO)"

# Criar projeto de onboarding a partir do template
PROJETO=$(curl -s -X POST "https://api.foxi.com.br/v1/projects" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{
    \"name\": \"Onboarding — ${NOME}\",
    \"template_id\": \"${TEMPLATE_ID}\",
    \"members\": [\"${EMAIL}\"],
    \"custom_fields\": {
      \"cargo\": \"${CARGO}\",
      \"data_inicio\": \"${DATA_INICIO}\",
      \"marco_30d\": \"${DATA_30}\",
      \"marco_60d\": \"${DATA_60}\",
      \"marco_90d\": \"${DATA_90}\"
    }
  }")

PROJETO_ID=$(echo "$PROJETO" | jq -r '.id')

echo "✅ Projeto criado: $PROJETO_ID"
echo "📧 Enviando boas-vindas para: $EMAIL"

# Enviar notificação de boas-vindas
curl -s -X POST "https://api.foxi.com.br/v1/notifications" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{
    \"recipient\": \"${EMAIL}\",
    \"template\": \"onboarding_welcome\",
    \"data\": {
      \"nome\": \"${NOME}\",
      \"projeto_url\": \"https://app.foxi.com.br/projects/${PROJETO_ID}\"
    }
  }" > /dev/null

echo "🎉 Onboarding de ${NOME} iniciado com sucesso!"
echo "🔗 Acesse: https://app.foxi.com.br/projects/${PROJETO_ID}"
```

### Template de e-mail de boas-vindas (texto plano)

```text
Assunto: Bem-vindo(a) à equipe, [NOME]! Seu guia de onboarding está pronto 🎉

Olá, [NOME]!

Que alegria ter você a bordo. Preparamos tudo para que seus primeiros
dias sejam incríveis.

SEU CHECKLIST DO PRIMEIRO DIA:
[ ] Acessar o Foxi: https://app.foxi.com.br
[ ] Verificar seu projeto de onboarding
[ ] Fazer check-in com seu buddy: [NOME_BUDDY]
[ ] Participar do almoço de boas-vindas às 12h

LINKS IMPORTANTES:
- Manual do colaborador: [URL]
- Canal #boas-vindas no Slack: [URL]
- Agenda da semana: [URL]
- Contato do RH: rh@empresa.com

Qualquer dúvida, responda este e-mail ou me chame no Slack.

Seja bem-vindo(a)!
[GESTOR]
```

## Onboarding no Foxi

O Foxi tem um template nativo de onboarding que você pode ativar com um clique:

- Projeto pré-configurado com todas as fases e tarefas
- Automação que notifica o buddy a cada novo marco
- Dashboard de progresso visível para o colaborador e o gestor
- Check-ins automáticos nos dias 7, 30, 60 e 90
- Integração com HRIS para criação automática do projeto quando um novo colaborador é admitido

---

> "Pessoas não pedem demissão de empresas. Pedem demissão de líderes e de experiências ruins — muitas vezes criadas nos primeiros dias."

Invista no onboarding. O retorno é mensurável, rápido e duradouro.
